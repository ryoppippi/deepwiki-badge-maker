<script lang="ts">
import { dev } from "$app/environment";

interface Props {
	pId: string;
}

const { pId }: Props = $props();
</script>

{#if !dev && pId}
	<svelte:head>
		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-{pId}" crossorigin="anonymous"></script>
	</svelte:head>
{/if}