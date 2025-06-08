<script lang='ts'>
	import { assets } from '$app/paths';
	import { PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID } from '$env/static/public';
	import screenshot from '$lib/assets/screenshot.jpeg?url';
	import GoogleAdsense from '$lib/components/google-adsense.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import * as ufo from 'ufo';

	import '../app.css';

	const { children } = $props();

</script>

<MetaTags
	description='A simple tool to generate DeepWiki badges for your GitHub README'
	openGraph={{
		type: 'website',
		locale: 'en_US',
		url: assets,
		images: [{ url: ufo.joinURL(assets, screenshot) }],
	}}
	title='DeepWiki Badge Generator'
	twitter={{
		cardType: 'summary_large_image',
		creator: '@ryoppippi',
		image: ufo.joinURL(assets, screenshot),
	}}
/>

{@render children()}

<GoogleAdsense pId={PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID ?? ''} />
