<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	
	type Props = HTMLAttributes<HTMLParagraphElement> & {
		children?: import('svelte').Snippet;
	};
	
	let { 
		class: className = undefined,
		children,
		...restProps
	}: Props = $props();
</script>

<p
	class={cn("text-sm text-muted-foreground", className)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</p>