import { options } from '@/app/layout';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import Image from 'next/image';

type genre = {
  id: string;
  name: string;
};

export default async function Page({ params }: { params: { id: any } }) {
  const fetchMovie = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    options
  );
  const data = fetchMovie.data;
  console.log(fetchMovie.data?.genres);
  return (
    <div className="flex flex-col bg-[#0F1117] text-white">
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex">
            {data?.genres?.map((g: genre) => (
              <li
                key={g.id}
                className="ml-2 mb-2"
              >
                {g.name}
              </li>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt={data?.title}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full sm:h-full  lg:order-last lg:aspect-square"
              height={'550'}
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              width={'550'}
            />
            <div className="flex flex-col justify-center space-y-2">
              <div className="space-y-1">
                <h1 className="text-3xl mb-2 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {data?.title}
                </h1>
                <span>&quot;{data?.tagline}&quot;</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Overview</h2>
                <p className="">{data?.overview}</p>
                <p className="">Release Date: {data?.release_date} </p>
                <p className="">Runtime: {data?.runtime} minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-full h-0.5 bg-white" />
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="">This is the plot of the movie.</p>
              <p className="">Release Date: January 1, 2024</p>
              <p className="">Runtime: 120 minutes</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Cast</h2>
              <p className="">Main Actor as Main Character</p>
              <p className="">Supporting Actor as Supporting Character</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Ratings & Reviews</h2>
              <p className="">User 1: 5 stars - This movie was amazing!</p>
              <p className="">
                User 2: 4 stars - Great movie, would recommend..
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
