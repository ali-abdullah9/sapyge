import CallList from "@/components/conferencing/CallList";

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white h-[calc(46% - 100px)] p-4 rounded-lg bg-glassmorphism">
      <h1 className="text-3xl font-bold">Previous Calls</h1>

      <CallList type="ended" />
    </section>
  );
};

export default PreviousPage;