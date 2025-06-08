<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type Props = HTMLAttributes<HTMLHeadingElement> & {
		children?: import('svelte').Snippet;
	};

	const {
		class: className = undefined,
		children,
		...restProps
	}: Props = $props();
</script>

<h3
	class={cn('text-2xl font-semibold leading-none tracking-tight', className)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</h3>
