<script lang='ts'>
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type Props = HTMLAttributes<HTMLDivElement> & {
		orientation?: 'horizontal' | 'vertical';
	};

	const {
		class: className = undefined,
		orientation = 'horizontal',
		...restProps
	}: Props = $props();
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div
	class={cn(
		'shrink-0 bg-border',
		orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
		className,
	)}
	{...restProps}
/>
