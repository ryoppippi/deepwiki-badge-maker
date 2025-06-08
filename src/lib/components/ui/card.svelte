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
	class={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</div>
