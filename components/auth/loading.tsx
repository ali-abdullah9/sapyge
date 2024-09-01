import Image from "next/image";

const Loading = () => {
  return (
    <main className="flex w-full h-screen items-center justify-center bg-logo-gradient ">
      <Image src={"/logo.svg"} alt="Sapyge logo" width={150} height={150} className="animate-pulse duration-700"></Image>
      
    </main>
  );
};

export default Loading;
