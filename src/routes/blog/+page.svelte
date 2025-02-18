<script>
	import Article from '$lib/components/Article.svelte';
	import Link from '$lib/components/Link.svelte';
	export let data;
</script>

<Article title="Latest Posts" autostyled={false}>
	<ul class="mt-4 ml-2 flex flex-col gap-4">
		{#each data.posts as post}
			<li class="flex flex-col">
				<h2 class="text-lg"><Link href={post.path}>{post.meta.title}</Link></h2>
				<p class="my-0 text-sm font-extralight italic">
					{new Date(post.meta.publishedOn).toDateString()}
				</p>
			</li>
		{/each}
	</ul>
</Article>
