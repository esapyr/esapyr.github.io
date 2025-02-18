export const load = async ({ fetch, params }: { fetch: any, params: { tag: string } }) => {
  const { tag } = params;
  const response = await fetch(`/api/blog`);
  const allPosts = await response.json();

  const posts = allPosts.filter((post: { meta: { tags: string[] } }) => post.meta.tags.includes(tag));

  return {
    tag,
    posts
  };
};
