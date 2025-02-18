<script lang="ts">
	let { title, publishedOn = null, tags = [] } = $props();
	import Tag from '../Tag.svelte';
</script>

<div class="not-prose flex flex-col gap-1">
	<div class="flex flex-col">
		<div class="flex flex-row flex-wrap items-center justify-between gap-1">
			<h1 class="text-4xl font-extrabold">{title}</h1>

			<div class="flex flex-row flex-wrap gap-2">
				{#each tags as tag}
					<Tag name={tag} />
				{/each}
			</div>
		</div>

		{#if publishedOn}
			<p class="text-sm font-extralight italic">
				published {new Date(publishedOn).toLocaleDateString()}
			</p>
		{/if}
	</div>
</div>
