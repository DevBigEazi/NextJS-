import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
// import { notFound } from "next/navigation"; inbuilt notFund()
import NotFound from "./components/not-found"; // custom Not found

type Params = {
  params: {
    userId: string;
  };
};

// generating dynamic metadata
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const UserData: Promise<User> = getUser(userId);
  const user: User = await UserData;

  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: user.name,
    description: `Thsis is the page of user ${user.name}`,
  };
}

export default async function User({ params: { userId } }: Params) {
  const UserData: Promise<User> = getUser(userId);
  const UserPostsData: Promise<Posts[]> = getUserPosts(userId);
  //   const [user, userPosts] = await Promise.all([UserData, UserPostsData]);
  const user = await UserData;

  if (!user) return <NotFound />;

  return (
    <div>
      <h2>{user.name}</h2>
      <br />
      {/* applying loading UI, streaming and suspense for better fetching behaviour using Suspense component. Meanwhile, the Userposts component is not available to the public */}
      <Suspense fallback={<h4>Loading...</h4>}>
        <UserPosts promise={UserPostsData} />
      </Suspense>
    </div>
  );
}

// turning the ssr pages to the recommended ssg pages
// the static page will be generated in advance without the ssr
export async function generateStaticParams() {
  const UsersData: Promise<User[]> = getAllUsers();
  const users = await UsersData;

  return users.map((user) => ({ userId: user.id.toString() })); // changed the id toString cos param must be string
}
