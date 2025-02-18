import { fetchBlogPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchBlogPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.publishedOn) - new Date(a.meta.publishedOn);
  });

  return json(sortedPosts);
};

export const prerender = true;
