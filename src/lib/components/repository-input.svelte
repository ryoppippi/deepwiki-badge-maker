<script lang='ts'>
	import { Badge, Input } from '$lib/components/ui';
	import Github from '~icons/lucide/github';

	interface Props {
		owner: string;
		repo: string;
		urlError: string | null;
		onUrlChange: (url: string) => void;
		onSubmit?: () => void;
	}

	let { owner, repo, urlError, onUrlChange, onSubmit }: Props = $props();
</script>

<div class='space-y-2'>
	<label class='text-sm font-medium' for='repoUrl'>
		GitHub Repository URL
	</label>
	<div class='flex items-center space-x-2'>
		<Github class='size-4 text-muted-foreground' />
		<Input
			id='repoUrl'
			class={urlError ? 'border-red-500 focus-visible:ring-red-500' : ''}
			oninput={e => onUrlChange(e.currentTarget.value)}
			onkeypress={(e) => {
				if (e.key === 'Enter' && owner && repo && onSubmit) {
					onSubmit();
				}
			}}
			placeholder='https://github.com/owner/repo'
		/>
	</div>
	{#if urlError}
		<p class='text-sm text-red-500 mt-1'>{urlError}</p>
	{/if}
</div>

{#if owner && repo}
	<div class='mt-2 flex items-center space-x-2'>
		<span class='text-sm text-muted-foreground'>Detected:</span>
		<Badge class='font-mono' variant='outline'>
			{owner}/{repo}
		</Badge>
	</div>
{/if}
