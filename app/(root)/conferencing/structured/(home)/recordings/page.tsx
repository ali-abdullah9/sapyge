import CallList from '@/components/conferencing/CallList';

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white h-screen  p-4 rounded-lg bg-glassmorphism">
      <h1 className="text-3xl font-bold">Recordings</h1>

      <CallList type="recordings" />
    </section>
  );
};

export default PreviousPage;