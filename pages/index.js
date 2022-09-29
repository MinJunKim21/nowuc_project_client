import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Hi from '../components/Hi';
import OneVideo from '../components/OneVideo';

const API_KEY = 'AIzaSyDy1kxV8bZgc9ye2b_fTxeRyj1tp8MJ9Ks';
const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';
const YOUTUBE_CHANNELS_API = 'https://www.googleapis.com/youtube/v3/channels';
const YOUTUBE_SEARCH_API = 'https://www.googleapis.com/youtube/v3/search';

const chosenList = [
  { name: '침착맨', channelId: 'UCUj6rrhMTR9pipbAWBAMvUQ' },
  { name: '슈카', channelId: 'UCsJ6RuBiTVWRX156FVbeaGg' },
  { name: '걍밍경', channelId: 'UCfqVrM2cvwxG3-EvxbsN0KQ' },
];
export async function getStaticProps() {
  const requests = (num) => {
    return `${YOUTUBE_SEARCH_API}?part=snippet&channelId=${chosenList[num].channelId}&order=date&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`;
  };

  const [dataThree, dataFour, dataFive] = await Promise.all([
    fetch(requests(0)).then((res) => res.json()),
    fetch(requests(1)).then((res) => res.json()),
    fetch(requests(2)).then((res) => res.json()),
  ]);

  return {
    props: {
      dataThree,
      dataFour,
      dataFive,
    },
    revalidate: 3600,
  };
}

export default function Home({ dataThree, dataFour, dataFive }) {
  console.log('dataThree', dataThree);
  console.log('dataFour', dataFour);
  console.log('dataFive', dataFive);

  return (
    <div>
      <OneVideo dataName={dataThree} />
      <OneVideo dataName={dataFour} />
      <OneVideo dataName={dataFive} />
    </div>
  );
}
