<script lang="ts" module>
	import a from '$lib/components/Link.svelte';
	import ArticleHeader from '$lib/components/Article/Header.svelte';
	export { a };
</script>

<script lang="ts">
	let { children, title, publishedOn = null, autostyled = true, tags = [] } = $props();
</script>

<article class={autostyled ? 'prose' : ''}>
	{#if title}
		<ArticleHeader {tags} {title} {publishedOn} />
	{/if}

	{@render children()}
</article>
