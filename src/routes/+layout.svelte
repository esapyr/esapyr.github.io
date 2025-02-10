<script lang="ts">
	import { Linkedin, Github, Send } from 'lucide-svelte';

	import { base } from '$app/paths';
	import '../app.css';
	import Link from '$lib/components/Link.svelte';
	import Analytics from '$lib/analytics.svelte';

	let { children } = $props();
</script>

<main class="m-auto my-15 flex w-2/3 flex-row">
	<Analytics />

	<div
		class=" text-white-600 sticky top-10 flex w-1/4 flex-col items-center self-start rounded-l-lg"
	>
		<img class="rounded-tl-lg" alt="my face" src={`${base}/face.jpg`} />
		<div class="w-full">
			<div class="border-white-700 flex w-full flex-row justify-between border-l p-2">
				<Link external href="mailto:ryan@seraz.in"><Send color="#f49092" /></Link>
				<Link external href="https://github.com/esapyr"><Github color="#ffd685" /></Link>
				<Link external href="https://www.linkedin.com/in/ryan-serazin"
					><Linkedin color="#84add6" /></Link
				>
			</div>

			<ul class="w-full text-center">
				<Link external={false} href="/"
					><li class="text-black-500 bg-green-500 p-1 text-lg font-light">Home</li></Link
				>
				<Link external={false} href="/blog"
					><li class="text-black-500 bg-blue-400 p-1 text-lg font-light">Blog</li></Link
				>
				<Link external={false} href="/Ryan_Serazin_Resume.pdf"
					><li class="text-black-500 rounded-bl-lg bg-yellow-400 p-1 text-lg font-light">
						Resume
					</li></Link
				>
			</ul>
		</div>
	</div>

	{@render children()}
</main>
