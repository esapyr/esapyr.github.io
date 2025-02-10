<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import Link from '$lib/components/Link.svelte';
	import { Hand } from 'lucide-svelte';
</script>

<Article autostyled={false}>
	<div class="flex flex-col gap-3">
		<div class="flex flex-row items-center gap-1 text-center">
			<h1 class="text-3xl font-bold">
				Hey there, my name is <i class="font-semibold text-red-600">Ryan Serazin</i>
			</h1>
			<Hand size={32} class="rotate-45 pl-2" />
		</div>
		<p class="text-lg">
			I'm a Senior Full Stack Engineer currently based out of <Link href="https://rocwiki.org/"
				>Rochester, NY</Link
			> with over ten years of experience builds products for the web.
		</p>

		<div>
			<p class="text-lg">Some of my notable past experience includes:</p>
			<ul class="list-disc">
				<li class="ml-8">
					Building ASP.net web forms to track factory floor repair part usage as an <span
						class="font-semibold text-green-700">intern</span
					>
					for <Link href="https://www.macleanfoggcs.com/">MacLean-Fogg Component Solutions</Link>.
				</li>
				<li class="ml-8">
					Building a simple graphical frontend for FFMPEG in Python as an <span
						class="font-semibold text-green-700">intern</span
					>
					for the <Link href="https://www.rit.edu/ntid/"
						>National Technical Institute for the Deaf</Link
					>.
				</li>
				<li class="ml-8">
					Building a simple Dieselpoint to ElasticSearch query translator as an <span
						class="font-semibold text-green-700">intern</span
					>
					at <Link external href="https://www.tourbuzz.com/">TourBuzz LLC</Link>.
				</li>
				<li class="ml-8">
					Maintaining data pipelines and implemeting data cleaning tools as an <span
						class="font-semibold text-green-700">intern</span
					>
					at <Link external href="https://showcaseidx.com/">Showcase IDX</Link>.
				</li>
				<li class="ml-8">
					Scaling the internal real-time ad auctioning platform as a <span
						class="font-semibold text-yellow-700">Full Stack Engineer</span
					>
					at <Link href="https://www.bookbub.com/">BookBub</Link> to support CPC bidding as well as an
					order of magnitude of new users.
				</li>
				<li class="ml-8">
					Bootstraping the new audiobook sales platform as a <span
						class="font-semibold text-yellow-700">Full Stack Engineer</span
					>
					at <Link href="https://www.bookbub.com/">BookBub</Link>
					by building internal tools to manage transactions as well as an Alexa Skill.
				</li>
				<li class="ml-8">
					Building internal operational tools as a <span class="font-semibold text-yellow-700"
						>Full Stack Engineer</span
					>
					at <Link href="https://jackpocket.com/">Jackpocket</Link>.
				</li>
				<li class="ml-8">
					Unifying the search and filtering experience across the shop pages as a <span
						class="font-semibold text-red-600">Senior Software Engineer</span
					>
					at <Link href="https://www.leafly.com/">Leafly</Link>.
				</li>
				<li class="ml-8">
					Leading the 0 to 1 project to build next generation of financial reporting products as a <span
						class="font-semibold text-red-600">Senior Software Engineer</span
					>
					at <Link href="https://www.debtbook.com/">Debtbook</Link>.
				</li>
			</ul>
		</div>

		<p class="text-lg">
			In my free time I enjoy playing tennis both socially and competively at my local club, and
			have spent the last few years learning how to do woodworking with power and hand tools. I also
			have a deep love and appreciation for strategy and board games.
		</p>
	</div>
</Article>
