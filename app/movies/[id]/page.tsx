import { options } from '@/app/layout';
import NotFound from '@/components/NotFound';
import MovieCast from '@/components/movies/MovieCast';
import axios from 'axios';
import Image from 'next/image';
import MovieBreadcrumb from '@/components/movies/MovieBreadcrumb';
import MovieOverview from '@/components/movies/MovieOverview';
import MovieImages from '@/components/movies/MovieImages';

export default async function Page({ params }: { params: { id: number } }) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}`,
      options
    );

    if (response.status === 404) {
      return <NotFound />;
    }

    const data = await response.data;

    const trailer = await axios.get(
      `https://api.themoviedb.org/3/movie/${params?.id}/videos?language=en-US`,
      options
    );

    const lastTrailer = trailer?.data?.results[trailer.data.results.length - 1];

    return (
      <div className="flex flex-col bg-[#0F1117] text-white">
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <MovieBreadcrumb data={data} />

            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <iframe
                width="660"
                height="400"
                className="w-full rounded-md"
                src={`https://www.youtube.com/embed/${lastTrailer?.key}?si=PUMN8a0SmlPFGnDN`}
                title={`${data?.movie?.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              <MovieOverview data={data} />
            </div>
          </div>
        </section>
        <hr className="w-full h-0.5 bg-white" />
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Cast</h2>
            <MovieCast data={data} />
          </div>
        </section>
        <hr className="w-full h-0.5 bg-white" />
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Photos</h2>
            <MovieImages data={data} />
          </div>
        </section>
        {/* <section className="w-full py-12">
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
        </section> */}
      </div>
    );
  } catch (error) {
    // Handle other errors (e.g., network issues)
    console.error('Error fetching data:', error);
    return <NotFound />;
  }
}
