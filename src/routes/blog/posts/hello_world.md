---
title: Hello, World!
tags: [blog, svelte, tailwind, gh-pages]
---
This blog is a static site built with [Sveltekit](https://svelte.dev/docs/kit/introduction) and hosted on [Github Pages](https://pages.github.com/).

Each blog post is a markdown file that's rendered by [MDsveX](https://mdsvex.pngwn.io/) and styled by [Tailwind Typography](https://tailwindcss-typography.vercel.app/); otherwise it's all just Svelte and [Tailwind](https://tailwindcss.com/).

Publishing updates to the site just requires compiling the site with a [special adapter](https://svelte.dev/docs/kit/adapter-static) and pushing it to a branch on github that's configured to deploy on commit.

### Why Svelte?
Svelte feels like the closest that a frontend frame work as gotten to nailing the first two pillars of [The Rails Doctrine](https://rubyonrails.org/doctrine): `Optimize for programmer happiness` and `Convention over Configuration`. Which is ironic because it feels a bit like a mix of PHP and React.

I'm still not convinced that the data flow story would work well for a large project with multiple people developing in parallel, but for a single person hacking together some interactive web pages svelte feels like it hits the convention sweet spot.

### Why Tailwind?
Tailwind is a joy for rapidly prototyping a new site. It's the css framework that's feels the closest to the direct feedback of editing css directly in the browser.

### Why Github pages?
It's the right combination of easy and free. That's it, but that's a lot. There's a reason why most static developer sites are built on github pages; the free storage, hosting, CDN, deploy pipeline, and SSL certs are hard to ignore.
