import Image from "next/image";

const Loading = () => {
  return (
    <main className="flex flex-col w-full h-full items-center justify-center ">
      <Image src={"/logo.svg"} alt="Sapyge logo" width={150} height={150} className="animate-pulse duration-700"></Image>
      
    </main>
  );
};

export default Loading;
