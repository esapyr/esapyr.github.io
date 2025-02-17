<script lang="ts" module>
	import a from '$lib/components/Link.svelte';
	import ArticleHeader from '$lib/components/Article/Header.svelte';
	export { a };
</script>

<script lang="ts">
	let { children, title, publishedOn, color = 'blue', autostyled = true } = $props();
	const colors = { blue: 'border-blue-400', green: 'border-green-500' };
	const borderColor = colors[color];
</script>

<div class={`bg-offwhite-500 w-3/4 border-l-10 p-5 md:rounded-r-lg ${borderColor}`}>
	<article class={autostyled ? 'prose' : ''}>
		{#if title}
			<ArticleHeader {title} {publishedOn} />
		{/if}

		{@render children()}
	</article>
</div>
