<script lang='ts'>
	import type { checkIfRepositoryExists } from '$lib/github';
	import type { Snippet } from 'svelte';

	interface Props {
		repositoryCheckResult: Awaited<ReturnType<typeof checkIfRepositoryExists>>;
		children: Snippet;
	}

	const { repositoryCheckResult, children }: Props = $props();
</script>

{#if repositoryCheckResult.isErr()}
	<div class='text-center p-4 border rounded-md bg-muted'>
		<p class='text-destructive font-medium'>
			Repository not found or private
		</p>
		<p class='text-sm text-muted-foreground mt-1'>
			Make sure the repository is public and exists on DeepWiki.
		</p>
	</div>
{:else}
	{@render children()}
{/if}
