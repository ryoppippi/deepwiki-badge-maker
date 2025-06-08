<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import { getContext } from 'svelte';

	type Props = HTMLAttributes<HTMLDivElement> & {
		value: string;
		children?: import('svelte').Snippet;
	};

	const {
		class: className = undefined,
		value,
		children,
		...restProps
	}: Props = $props();

	const tabs = getContext<{ value: string }>('tabs');

	const isActive = $derived(tabs?.value === value);
</script>

{#if isActive}
	<div
		class={cn(
			'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
			className,
		)}
		{...restProps}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
{/if}
