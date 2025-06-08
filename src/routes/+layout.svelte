<script lang="ts">
import "../app.css";
import { page } from "$app/stores";
import GoogleAdsense from "$lib/components/google-adsense.svelte";

const { children } = $props();

const adsenseId = import.meta.env.VITE_GOOGLE_ADSENSE_PUBLISHER_ID || "";
</script>

<svelte:head>
	<title>DeepWiki Badge Generator</title>
	<meta name="description" content="A simple tool to generate DeepWiki badges for your GitHub README" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content="https://deepwiki.ryoppippi.com" />
	<meta property="og:title" content="DeepWiki Badge Generator" />
	<meta property="og:description" content="A simple tool to generate DeepWiki badges for your GitHub README" />
	<meta property="og:image" content="{$page.url.origin}/screenshot.jpeg" />
	<meta name="twitter:title" content="DeepWiki Badge Generator" />
	<meta name="twitter:description" content="A simple tool to generate DeepWiki badges for your GitHub README" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@ryoppippi" />
	<meta name="twitter:image" content="{$page.url.origin}/screenshot.jpeg" />
</svelte:head>

{@render children()}

<GoogleAdsense pId={adsenseId} />