<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type Props = HTMLAttributes<HTMLDivElement> & {
		children?: import('svelte').Snippet;
	};

	const {
		class: className = undefined,
		children,
		...restProps
	}: Props = $props();
</script>

<div
	class={cn('flex flex-col space-y-1.5 p-6', className)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</div>
