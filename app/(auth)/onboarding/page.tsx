"use client";             


// import AccountProfile from "@/components/community/forms/AccountProfile";
import { useUser } from "@clerk/nextjs";

 function Page() {
  const {user} = useUser();// This will give you the user object
   
 
  if (!user) return null; // to avoid typescript warnings

  // const userInfo = runQuery(api.users.getUser(user.id));
  // if (userInfo?.onboarded) redirect("/");

  // const userData = {
  //   id: user.id,
  //   objectId: userInfo?._id,
  //   username: userInfo ? userInfo?.username : user.username,
  //   name: userInfo ? userInfo?.name : user.firstName ?? "",
  //   bio: userInfo ? userInfo?.bio : "",
  //   image: userInfo ? userInfo?.image : user.imageUrl,
  // };

  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
      <h1 className='head-text'>Onboarding</h1>
      <p className='mt-3 text-base-regular text-light-2'>
        Complete your profile now, to use Sapyge
      </p>

      <section className='mt-9 bg-dark-2 p-10'>
        {/* <AccountProfile user={userData} btnTitle='Continue' /> */}
      </section>
    </main>
  );
}

export default Page;