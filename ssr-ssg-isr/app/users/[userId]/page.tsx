import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./UserPosts";
import type { Metadata } from "next";

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
