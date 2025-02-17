<script lang="ts">
	let { title, publishedOn = null } = $props();
</script>

<div class="not-prose">
	<h1 class="text-4xl font-extrabold">{title}</h1>

	{#if publishedOn}
		<p><i>Published on: {new Date(publishedOn).toLocaleDateString()}</i></p>
	{/if}
</div>
