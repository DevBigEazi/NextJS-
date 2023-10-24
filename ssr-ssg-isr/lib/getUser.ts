export default async function getUser(userId: string) {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${userId}`,
  //     { cache: "no-store" }
  //   );
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { next: { revalidate: 60 } } //this will revalidate the data every 60s
  );
  if (!res.ok) return undefined
  return res.json();
}

// by default the data catch status is set to force catch and we dont have to specify.
// but because we dont want the cache to be saved incase the there are changes in the databases, we will set the catch to no-store
// but we need to increament static regeneration which can be apply for checking status of the ssr and ssg so often if there is an update using revalidate
