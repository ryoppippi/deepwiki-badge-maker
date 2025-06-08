<script lang="ts" module>
	type CopyState = {
		markdown: boolean;
		html: boolean;
	};
	
	let copyState = $state<CopyState>({ markdown: false, html: false });
	
	export function copyToClipboard(text: string, type: 'markdown' | 'html') {
		navigator.clipboard.writeText(text);
		copyState = { ...copyState, [type]: true };
		
		setTimeout(() => {
			copyState = { ...copyState, [type]: false };
		}, 2000);
	}
	
	export function getCopyState() {
		return copyState;
	}
</script>

<script lang="ts">
	import { Check, Copy } from 'lucide-svelte';
	
	interface Props {
		type: 'markdown' | 'html';
	}
	
	let { type }: Props = $props();
	
	const state = getCopyState();
	const isCopied = $derived(state[type]);
</script>

{#if isCopied}
	<Check class="size-4" />
{:else}
	<Copy class="size-4" />
{/if}