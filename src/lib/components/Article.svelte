<script lang="ts" module>
	import a from '$lib/components/Link.svelte';
	import ArticleHeader from '$lib/components/Article/Header.svelte';
	export { a };
</script>

<script lang="ts">
	let {
		children,
		title,
		subtitle = null,
		publishedOn = null,
		autostyled = true,
		tags = []
	} = $props();
</script>

<article class={autostyled ? 'prose prose-a:no-underline prose-h2:my-4 prose-h3:my-2' : ''}>
	{#if title}
		<ArticleHeader {tags} {title} {publishedOn} {subtitle} />
	{/if}

	{@render children()}
</article>
