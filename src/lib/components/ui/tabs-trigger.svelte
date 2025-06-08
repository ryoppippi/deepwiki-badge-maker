<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import { getContext } from 'svelte';
	
	type Props = HTMLButtonAttributes & {
		value: string;
		children?: import('svelte').Snippet;
	};
	
	let { 
		class: className = undefined,
		value,
		children,
		...restProps
	}: Props = $props();
	
	const tabs = getContext<{ value: string; }>('tabs');
	
	const isActive = $derived(tabs?.value === value);
</script>

<button
	class={cn(
		"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
		isActive ? "bg-background text-foreground shadow-sm" : "",
		className
	)}
	onclick={() => tabs.value = value}
	type="button"
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</button>