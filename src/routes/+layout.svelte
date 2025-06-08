<script lang='ts'>
	import { page } from '$app/stores';
	import GoogleAdsense from '$lib/components/google-adsense.svelte';
	import '../app.css';

	const { children } = $props();

	const adsenseId = import.meta.env.VITE_GOOGLE_ADSENSE_PUBLISHER_ID || '';
</script>

<svelte:head>
	<title>DeepWiki Badge Generator</title>
	<meta name='description' content='A simple tool to generate DeepWiki badges for your GitHub README' />
	<meta content='website' property='og:type' />
	<meta content='en_US' property='og:locale' />
	<meta content='https://deepwiki.ryoppippi.com' property='og:url' />
	<meta content='DeepWiki Badge Generator' property='og:title' />
	<meta content='A simple tool to generate DeepWiki badges for your GitHub README' property='og:description' />
	<meta content='{$page.url.origin}/screenshot.jpeg' property='og:image' />
	<meta name='twitter:title' content='DeepWiki Badge Generator' />
	<meta name='twitter:description' content='A simple tool to generate DeepWiki badges for your GitHub README' />
	<meta name='twitter:card' content='summary_large_image' />
	<meta name='twitter:creator' content='@ryoppippi' />
	<meta name='twitter:image' content='{$page.url.origin}/screenshot.jpeg' />
</svelte:head>

{@render children()}

<GoogleAdsense pId={adsenseId} />
