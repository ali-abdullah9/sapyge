// "use client";

// import { api } from "@/convex/_generated/api";
// import { useMutation } from "convex/react";
// import Image from "next/image";
// import { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  // const storeUser = useMutation(api.users.store);

  // useEffect(() => {
  //   storeUser();
  // });
  return (
    <>
      <h1 className="head-text text-left">index</h1>
    </>
  );
}
