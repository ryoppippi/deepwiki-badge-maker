<script lang='ts'>
	import { dev } from '$app/environment';

	interface Props {
		pId: string;
	}

	const { pId }: Props = $props();
</script>

<svelte:head>
	{#if !dev && pId}
		<script async crossorigin='anonymous' src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-{pId}'/>
	{/if}
</svelte:head>
