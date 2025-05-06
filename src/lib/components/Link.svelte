<script lang="ts">
	const { href, children, external = false, underline = false } = $props();
	import { base } from '$app/paths';
	const link = external ? href : `${base}${href}`;
</script>

<a
	class={`text-blue-600 ${underline ? 'underline' : ''}`}
	target={external ? '_blank' : ''}
	href={link}
>
	{@render children()}
</a>
