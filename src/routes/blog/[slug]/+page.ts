export async function load({ params }: { params: { slug: string } }) {
  const post = await import(`../posts/${params.slug}.md`);
  const content = post.default;

  return { content };
}
