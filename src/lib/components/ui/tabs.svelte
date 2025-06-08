<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import { setContext } from 'svelte';

	type Props = HTMLAttributes<HTMLDivElement> & {
		value?: string;
		children?: import('svelte').Snippet;
	};

	let {
		class: className = undefined,
		value = $bindable(''),
		children,
		...restProps
	}: Props = $props();

	setContext('tabs', {
		get value() { return value; },
		set value(v: string) { value = v; },
	});
</script>

<div
	class={cn('w-full', className)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</div>
