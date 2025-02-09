<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	let { children } = $props();
</script>

<Article color="blue">
	{@render children()}
</Article>
