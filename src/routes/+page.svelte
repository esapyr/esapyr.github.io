<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import { Hand } from 'lucide-svelte';
</script>

<article class="pr-4 pb-4">
	<div class="flex flex-col gap-6">
		<div class="flex flex-row items-center gap-1 text-center">
			<h1 class="text-3xl font-bold">
				Hey there, my name is <i class="font-semibold text-red-600">Ryan Serazin</i>
			</h1>
			<Hand size={32} class="rotate-45 pl-2" />
		</div>

		<p class="text-lg">
			I'm a Senior Full Stack Engineer currently based out of <Link
				external
				href="https://rocwiki.org/">Rochester, NY</Link
			> with over ten years of experience building products for the web.
		</p>

		<p class="text-lg">
			I've most recently been developing in Ruby (with Rails) and Typescript, but love using
			functional languages like Clojure and Elixir when I get the chance.
		</p>

		<p class="text-lg">
			In my free time I enjoy playing <Link
				external
				href="https://app.utrsports.net/profiles/4862505">tennis</Link
			> both socially and competively at my local club, have spent the last few years learning how to
			woodwork with power and hand tools, and have a deep love for strategy and board games.
		</p>

		<div>
			<p class="text-lg">Some of my past work experience includes:</p>
			<ul class="list-disc">
				<li class="ml-8">
					Building inventory tracking tools in ASP.net as an <span
						class="font-semibold text-green-700">intern</span
					>
					for <Link external href="https://www.macleanfoggcs.com/"
						>MacLean-Fogg Component Solutions</Link
					>.
				</li>
				<li class="ml-8">
					Building tools to maintain and edit educational ASL videos as an <span
						class="font-semibold text-green-700">intern</span
					>
					for the <Link external href="https://www.rit.edu/ntid/"
						>National Technical Institute for the Deaf</Link
					>.
				</li>
				<li class="ml-8">
					Migrating a profitable legacy real estate search service from Dieselpoint to ElasticSearch
					as an <span class="font-semibold text-green-700">intern</span>
					at <Link external href="https://www.tourbuzz.com/">TourBuzz LLC</Link>.
				</li>
				<li class="ml-8">
					Building and maintaining data pipelines and MLS data cleaning tools as an <span
						class="font-semibold text-green-700">intern</span
					>
					at <Link external href="https://showcaseidx.com/">Showcase IDX</Link>.
				</li>
				<li class="ml-8">
					Scaling the internal real-time ad auctioning platform as a <span
						class="font-semibold text-yellow-700">Full Stack Engineer</span
					>
					at <Link external href="https://www.bookbub.com/">BookBub</Link>
				</li>
				<li class="ml-8">
					Bootstraping the new audiobook sales platform as a <span
						class="font-semibold text-yellow-700">Full Stack Engineer</span
					>
					at <Link external href="https://www.bookbub.com/">BookBub</Link>
				</li>
				<li class="ml-8">
					Building internal operational tools to fulfill lottery tickets as a <span
						class="font-semibold text-yellow-700">Full Stack Engineer</span
					>
					at <Link external href="https://jackpocket.com/">Jackpocket</Link>.
				</li>
				<li class="ml-8">
					Unifying the search and filtering experience across the shop pages as a <span
						class="font-semibold text-red-600">Senior Software Engineer</span
					>
					at <Link external href="https://www.leafly.com/">Leafly</Link>.
				</li>
				<li class="ml-8">
					Leading the greenfield project to build next generation of financial reporting products as
					a <span class="font-semibold text-red-600">Senior Software Engineer</span>
					at <Link external href="https://www.debtbook.com/">Debtbook</Link>.
				</li>
			</ul>
		</div>
	</div>
</article>
