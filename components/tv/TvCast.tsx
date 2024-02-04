import { options } from '@/app/layout';
import { Avatar } from '@nextui-org/react';
import axios from 'axios';
import Link from 'next/link';

export default async function TvCast({ data }: { data: any }) {
  const castData = await axios.get(
    `https://api.themoviedb.org/3/tv/${data?.id}/credits?language=en-US`,
    options
  );

  const limitedData = castData.data?.cast.slice(0, 12);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-1 lg:gap-2">
      {limitedData?.map((d: any) => (
        <div
          className="mb-2 flex flex-col items-center"
          key={d?.id}
        >
          <div className="mb-2">
            <Avatar
              size="lg"
              src={`https://image.tmdb.org/t/p/original${d.profile_path}`}
            />
          </div>
          <Link href={`/${'person'}/${d.id}`}>
            <h3 className="font-semibold truncate mt-1 text-center">
              {' '}
              {d?.name}{' '}
            </h3>
          </Link>
          <p className="truncate mt-1 text-slate-400 text-center">
            {' '}
            {d?.character}{' '}
          </p>
        </div>
      ))}
    </div>
  );
}
