<script lang='ts' module>
	type CopyState = {
		markdown: boolean;
		html: boolean;
	};

	let copyStateValue = $state<CopyState>({ markdown: false, html: false });

	export function copyToClipboard(text: string, type: 'markdown' | 'html') {
		navigator.clipboard.writeText(text);
		copyStateValue = { ...copyStateValue, [type]: true };

		setTimeout(() => {
			copyStateValue = { ...copyStateValue, [type]: false };
		}, 2000);
	}

	export function getCopyState() {
		return copyStateValue;
	}
</script>

<script lang='ts'>
	import Check from '~icons/lucide/check';
	import Copy from '~icons/lucide/copy';

	interface Props {
		type: 'markdown' | 'html';
	}

	const { type }: Props = $props();

	const copyStateInstance = getCopyState();
	const isCopied = $derived(copyStateInstance[type]);
</script>

{#if isCopied}
	<Check class='size-4' />
{:else}
	<Copy class='size-4' />
{/if}
