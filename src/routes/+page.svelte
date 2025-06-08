<script lang='ts'>
	import BadgeGenerator from '$lib/components/badge-generator.svelte';
</script>

<main class='container mx-auto py-10 px-4'>
	<div class='max-w-3xl mx-auto space-y-6'>
		<div class='text-center space-y-2'>
			<h1 class='text-3xl font-bold tracking-tight'>
				DeepWiki Badge Generator
			</h1>
			<p class='text-muted-foreground'>
				A simple tool to generate DeepWiki badges for your GitHub README
			</p>
		</div>
		<BadgeGenerator />
	</div>
</main>
