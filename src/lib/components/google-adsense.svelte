<script lang='ts'>
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';

	interface Props {
		pId: string;
	}

	const { pId }: Props = $props();

	onMount(() => {
		if (!dev && pId) {
			const script = document.createElement('script');
			script.async = true;
			script.crossOrigin = 'anonymous';
			script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`;
			document.head.appendChild(script);
		}
	});
</script>
