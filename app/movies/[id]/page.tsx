import { options } from '@/app/layout';
import NotFound from '@/components/NotFound';
import MovieCast from '@/components/movies/MovieCast';
import axios from 'axios';
import MovieBreadcrumb from '@/components/movies/MovieBreadcrumb';
import MovieOverview from '@/components/movies/MovieOverview';
import MovieImages from '@/components/movies/MovieImages';
import SimilarMovies from '@/components/movies/SimiliarMovies';
import MovieProduction from '@/components/movies/MovieProduction';
import MovieReviews from '@/components/movies/MovieReviews';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import MovieVideos from '@/components/movies/MovieVideos';

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
      <Suspense fallback={<Loading />}>
        <div className="bg-[#0F1117] text-white sm:p-10 py-12 px-2 flex flex-col gap-2 ">
          <section className="w-full py-6">
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
          <hr className="w-full h-0.5 bg-gray-900" />
          <section className="w-full py-8">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-4">Cast</h2>
              <MovieCast data={data} />
            </div>
          </section>
          <hr className="w-full h-0.5 bg-gray-900" />
          <section className="w-full pt-8 pb-6 mb-6">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold text-center mb-4">Photos</h2>
              <MovieImages data={data} />
            </div>
          </section>
          <hr className="w-full h-0.5 bg-gray-900" />
          <section className="w-full pt-8 pb-6 mb-6">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold text-center mb-4">Videos</h2>
              <MovieVideos data={data} />
            </div>
          </section>
          <hr className="w-full h-0.5 bg-gray-900" />
          <section className="w-full pt-8">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold text-center mb-4">Similar</h2>
              <SimilarMovies data={data} />
            </div>
          </section>
          <section className="w-full py-12">
            <MovieProduction data={data} />
          </section>
          <section className="w-full py-12">
            <MovieReviews data={data} />
          </section>
        </div>
      </Suspense>
    );
  } catch (error) {
    // Handle other errors (e.g., network issues)
    console.error('Error fetching data:', error);
    return <NotFound />;
  }
}
