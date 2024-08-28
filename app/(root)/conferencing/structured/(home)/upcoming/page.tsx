import CallList from '@/components/conferencing/CallList';

const UpcomingPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white bg-dark-1 h-screen p-4 rounded-lg bg-glassmorphism">
      <h1 className="text-3xl font-bold ">Upcoming Meeting</h1>

      <CallList type="upcoming" />
    </section>
  );
};

export default UpcomingPage;