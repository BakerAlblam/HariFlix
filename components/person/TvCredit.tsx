import { options } from '@/app/layout';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default async function TvCredit({ data }: { data: any }) {
  const actorId = data?.id;
  const actorData = await axios.get(
    `https://api.themoviedb.org/3/person/${actorId}/tv_credits?language=en-US`,
    options
  );

  type Tv = {
    id: string;
    title: string;
    release_date: string;
    poster_path: any;
    name: string;
    media_type: string;
    first_air_date: string;
    vote_average: number;
  };

  const response = actorData?.data?.cast;
  const limitedResponse = response ? response.slice(0, 20) : null;
  console.log(limitedResponse);

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1 lg:gap-3">
        {limitedResponse?.map((d: any) => (
          <div
            className="mb-2"
            key={d?.id}
          >
            <img
              alt={d?.name}
              className="object-cover w-3/4 lg:w-full h-fit-screen rounded-lg"
              height={300}
              src={`https://image.tmdb.org/t/p/original${d.poster_path}`}
              width={400}
            />
            <Link href={`/${'tv'}/${d.id}`}>
              <h3 className="font-semibold truncate text-center mt-1">
                {' '}
                {d?.name}{' '}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
