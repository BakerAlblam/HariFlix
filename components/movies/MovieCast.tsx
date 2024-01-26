import { options } from '@/app/layout';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default async function MovieCast({ data }: { data: any }) {
  const castData = await axios.get(
    `https://api.themoviedb.org/3/movie/${data?.id}/credits?language=en-US`,
    options
  );

  const limitedData = castData.data?.cast.slice(0, 18);

  console.log(castData?.data?.cast);
  return (
    <div className="grid lg:grid-cols-6">
      {limitedData?.map((d: any) => (
        <div
          className="mb-2"
          key={d?.id}
        >
          <Image
            alt={d?.name}
            className="object-cover w-2/4 h-2/3 rounded-lg"
            height={300}
            src={`https://image.tmdb.org/t/p/original${d.profile_path}`}
            width={400}
          />
          <Link href={`/${'person'}/${d.id}`}>
            <h3 className="font-semibold truncate mt-1"> {d?.name} </h3>
            <p className="truncate mt-1 text-slate-400"> {d?.character} </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
