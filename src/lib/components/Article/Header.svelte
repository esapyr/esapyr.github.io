<script lang="ts">
	let { title, subtitle = null, publishedOn = null, tags = [] } = $props();
	import Tag from '../Tag.svelte';
</script>

<header class="not-prose flex flex-col gap-1">
	<div class="flex flex-row flex-wrap gap-2">
		{#each tags as tag}
			<Tag name={tag} />
		{/each}
	</div>

	<div>
		<h1 class="text-4xl font-extrabold">{title}</h1>
		<p class="text-lg font-extralight italic">{subtitle}</p>

		{#if publishedOn}
			<p class="text-sm font-thin italic">
				published {new Date(publishedOn).toLocaleDateString()}
			</p>
		{/if}
	</div>
</header>
