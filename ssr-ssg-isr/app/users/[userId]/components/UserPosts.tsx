type Props = {
  promise: Promise<Posts[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;
  return (
    <>
      {posts.map((post) => (
        <article key={post.id} className="mb-10 w-1/2 flex-1">
          <h2 className="text-slate-700 text-xl">{post.title}</h2>

          <p className="text-sm">{post.body}</p>
        </article>
      ))}
    </>
  );
}
