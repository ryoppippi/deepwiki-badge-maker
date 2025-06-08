<script lang='ts'>
	interface Props {
		badgeUrl: string;
		deepWikiUrl: string;
	}

	const { badgeUrl, deepWikiUrl }: Props = $props();
</script>

<div class='flex items-center justify-center py-4'>
	<a href={deepWikiUrl} rel='noopener noreferrer' target='_blank'>
		<img alt='DeepWiki Badge' src={badgeUrl} />
	</a>
</div>
