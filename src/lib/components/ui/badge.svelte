<script lang="ts">
	import { type VariantProps, cva } from 'class-variance-authority';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	
	const badgeVariants = cva(
		"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
		{
			variants: {
				variant: {
					default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
					secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
					destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
					outline: "text-foreground",
				},
			},
			defaultVariants: {
				variant: "default",
			},
		},
	);
	
	type Props = HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants> & {
		children?: import('svelte').Snippet;
	};
	
	let { 
		class: className = undefined,
		variant = "default",
		children,
		...restProps
	}: Props = $props();
</script>

<div
	class={cn(badgeVariants({ variant }), className)}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</div>