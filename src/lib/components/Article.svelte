<script lang="ts">
	let { children, color = 'green', autostyled = true } = $props();
	const colors = { blue: 'border-blue-400', green: 'border-green-500' };
	const borderColor = colors[color];
</script>

<div class={`bg-offwhite-500 w-3/4 rounded-r-lg border-l-10 p-5 ${borderColor}`}>
	<article class={autostyled ? 'prose' : ''}>
		{@render children()}
	</article>
</div>
