import axios from 'axios';
import { options } from '../layout';

export default async function Page() {
  const data = await axios.get(
    'https://api.themoviedb.org/3/genre/tv/list?language=en',
    options
  );
}
