'use client';

import { Call, CallRecording } from '@stream-io/video-react-sdk';
import { useGetCalls } from '@/hooks/useGetCalls';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '../auth/loading';
import MeetingCard from './MeetingCard';

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {
  const router = useRouter();
  const { endedCalls, upcomingCalls, callRecordings, isLoading } = useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  // Memoize the getCalls function to avoid unnecessary re-renders
  const getCalls = useMemo(() => {
    switch (type) {
      case 'ended':
        return endedCalls;
      case 'recordings':
        return recordings;
      case 'upcoming':
        return upcomingCalls;
      default:
        return [];
    }
  }, [type, endedCalls, upcomingCalls, recordings]);

  const getNoCallsMessage = useMemo(() => {
    switch (type) {
      case 'ended':
        return 'No Previous Calls';
      case 'upcoming':
        return 'No Upcoming Calls';
      case 'recordings':
        return 'No Recordings';
      default:
        return '';
    }
  }, [type]);

  // Fetch recordings with limited concurrent requests
  const fetchRecordings = useCallback(async () => {
    if (!callRecordings || type !== 'recordings') return;

    const poolSize = 5; // Limit the number of concurrent requests
    const results = [];

    for (let i = 0; i < callRecordings.length; i += poolSize) {
      const chunk = callRecordings.slice(i, i + poolSize);
      const chunkResults = await Promise.all(chunk.map((meeting) => meeting.queryRecordings()));
      results.push(...chunkResults);
    }

    const recordings = results
      .filter((call) => call.recordings.length > 0)
      .flatMap((call) => call.recordings);

    setRecordings(recordings);
  }, [callRecordings, type]);

  // Debounce the fetching function to avoid rapid state changes
  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      fetchRecordings();
    }, 300); // Adjust delay as needed

    return () => clearTimeout(debounceFetch);
  }, [fetchRecordings]);

  if (isLoading) return <Loading />;

  const calls = getCalls;
  const noCallsMessage = getNoCallsMessage;

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => (
          <MeetingCard
            key={(meeting as Call).id || (meeting as CallRecording).url}
            icon={
              type === 'ended'
                ? '/icons/previous.svg'
                : type === 'upcoming'
                  ? '/icons/upcoming.svg'
                  : '/icons/recordings.svg'
            }
            title={
              (meeting as Call).state?.custom?.description ||
              (meeting as CallRecording).filename?.substring(0, 20) ||
              'No Description'
            }
            date={
              (meeting as Call).state?.startsAt?.toLocaleString() ||
              (meeting as CallRecording).start_time?.toLocaleString()
            }
            isPreviousMeeting={type === 'ended'}
            link={
              type === 'recordings'
                ? (meeting as CallRecording).url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/conferencing/structured/meeting/${(meeting as Call).id}`
            }
            buttonIcon1={type === 'recordings' ? '/icons/play.svg' : undefined}
            buttonText={type === 'recordings' ? 'Play' : 'Start'}
            handleClick={
              type === 'recordings'
                ? () => router.push(`${(meeting as CallRecording).url}`)
                : () => router.push(`/conferencing/structured/meeting/${(meeting as Call).id}`)
            }
          />
        ))
      ) : (
        <h1 className="text-xl text-white">{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
