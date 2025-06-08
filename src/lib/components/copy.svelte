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
	import { Check, Copy } from 'lucide-svelte';

	interface Props {
		type: 'markdown' | 'html';
	}

	let { type }: Props = $props();

	const copyStateInstance = getCopyState();
	const isCopied = $derived(copyStateInstance[type]);
</script>

{#if isCopied}
	<Check class='size-4' />
{:else}
	<Copy class='size-4' />
{/if}
