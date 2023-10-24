import type { Metadata } from "next";
import Link from "next/link";
import getAllUsers from "@/lib/getAllUsers";

export const metadata: Metadata = {
  title: "Users",
};

//this is a server component
export default async function UsersPage() {
  const UsersData: Promise<User[]> = getAllUsers(); // the promise is returning User type(array of users) corresponding to type.d.ts file in the root folder
  const users = await UsersData;
  console.log("hello");
  return (
    <>
      <section>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        <br />
        {users.map((user) => (
          <div key={user.id}>
            <h3>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </h3>
          </div>
        ))}
      </section>
    </>
  );
}
