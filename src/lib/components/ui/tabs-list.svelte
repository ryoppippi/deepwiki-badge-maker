<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	
	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: import('svelte').Snippet;
	};
	
	let { 
		class: className = undefined,
		children,
		...restProps
	}: Props = $props();
</script>

<div
	class={cn(
		"inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
		className
	)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</div>