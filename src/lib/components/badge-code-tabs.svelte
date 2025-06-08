<script lang='ts'>
	import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui';
	import CopyIcon, { copyToClipboard } from './copy.svelte';

	interface Props {
		markdownCode: string;
		htmlCode: string;
		creditComment: string;
	}

	const { markdownCode, htmlCode, creditComment }: Props = $props();

	let tabValue = $state('markdown');
</script>

<div class='space-y-4'>
	<h3 class='text-sm font-medium'>Embed this badge in your README</h3>

	<Tabs class='w-full' bind:value={tabValue}>
		<TabsList class='grid w-full grid-cols-2'>
			<TabsTrigger value='markdown'>Markdown</TabsTrigger>
			<TabsTrigger value='html'>HTML</TabsTrigger>
		</TabsList>
		<TabsContent value='markdown'>
			<div class='relative'>
				<pre class='bg-muted p-4 rounded-md overflow-x-auto text-sm font-mono'><code>{markdownCode}</code></pre>
				<Button
					class='absolute top-2 right-2'
					onclick={() => copyToClipboard(`${markdownCode}\n${creditComment}`, 'markdown')}
					size='sm'
					variant='ghost'
				>
					<CopyIcon type='markdown' />
				</Button>
			</div>
		</TabsContent>
		<TabsContent value='html'>
			<div class='relative'>
				<pre class='bg-muted p-4 rounded-md overflow-x-auto text-sm font-mono'><code>{htmlCode}</code></pre>
				<Button
					class='absolute top-2 right-2'
					onclick={() => copyToClipboard(`${htmlCode}\n${creditComment}`, 'html')}
					size='sm'
					variant='ghost'
				>
					<CopyIcon type='html' />
				</Button>
			</div>
		</TabsContent>
	</Tabs>
</div>
