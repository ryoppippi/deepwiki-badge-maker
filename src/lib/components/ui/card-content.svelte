<script lang='ts'>
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
	class={cn('p-6 pt-0', className)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</div>
