import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import OneVideo from '../components/OneVideo';
import PlayListOneVideo from '../components/PlayListOneVideo';
import { youtuberList } from './utils/youtuberList';
import { youtubePlayList } from './utils/youtubePlayList';

const API_KEY = 'AIzaSyDy1kxV8bZgc9ye2b_fTxeRyj1tp8MJ9Ks';
const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';
const YOUTUBE_CHANNELS_API = 'https://www.googleapis.com/youtube/v3/channels';
const YOUTUBE_SEARCH_API = 'https://www.googleapis.com/youtube/v3/search';

export async function getStaticProps() {
  const requests = (num) => {
    return `${YOUTUBE_SEARCH_API}?part=snippet&fields=items(id,snippet(title,publishedAt))&channelId=${youtuberList[num].channelId}&order=date&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`;
  };
  // 이거로 정보중 채택해서 가져오는거 해봐보기
  const playListRequests = (num) => {
    return `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&fields=items(id,snippet(title,publishedAt,resourceId))&playlistId=${youtubePlayList[num].playListId}&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`;
  };

  const [
    youtuberZero,
    // youtuberOne,
    // youtuberTwo,
    // youtuberThree,
    // youtuberFour,
    // youtuberFive,
    // youtuberSix,
    // youtuberSeven,
    // youtuberEight,
    playListZero,
    // playListOne,
    // playListTwo,
    // playListThree,
  ] = await Promise.all([
    fetch(requests(0)).then((res) => res.json()),
    // fetch(requests(1)).then((res) => res.json()),
    // fetch(requests(2)).then((res) => res.json()),
    // fetch(requests(3)).then((res) => res.json()),
    // fetch(requests(4)).then((res) => res.json()),
    // fetch(requests(5)).then((res) => res.json()),
    // fetch(requests(6)).then((res) => res.json()),
    // fetch(requests(7)).then((res) => res.json()),
    // fetch(requests(8)).then((res) => res.json()),
    fetch(playListRequests(0)).then((res) => res.json()),
    // fetch(playListRequests(1)).then((res) => res.json()),
    // fetch(playListRequests(2)).then((res) => res.json()),
    // fetch(playListRequests(3)).then((res) => res.json()),
  ]);

  return {
    props: {
      youtuberZero,
      // youtuberOne,
      // youtuberTwo,
      // youtuberThree,
      // youtuberFour,
      // youtuberFive,
      // youtuberSix,
      // youtuberSeven,
      // youtuberEight,
      playListZero,
      // playListOne,
      // playListTwo,
      // playListThree,
    },
    revalidate: 3600,
  };
}

export default function Home({
  youtuberZero,
  // youtuberOne,
  // youtuberTwo,
  // youtuberThree,
  // youtuberFour,
  // youtuberFive,
  // youtuberSix,
  // youtuberSeven,
  // youtuberEight,
  playListZero,
  // playListOne,
  // playListTwo,
  // playListThree,
}) {
  return (
    <div>
      <PlayListOneVideo
        dataName={playListZero}
        youtubePlayList={youtubePlayList[0]}
      />
      {/* <PlayListOneVideo dataName={playListOne} />
      <PlayListOneVideo dataName={playListTwo} />
      <PlayListOneVideo dataName={playListThree} /> */}
      <OneVideo dataName={youtuberZero} youtuberList={youtuberList[0]} />
      {/* <OneVideo dataName={youtuberOne} />
      <OneVideo dataName={youtuberTwo} />
      <OneVideo dataName={youtuberThree} />
      <OneVideo dataName={youtuberFour} />
      <OneVideo dataName={youtuberFive} />
      <OneVideo dataName={youtuberSix} />
      <OneVideo dataName={youtuberSeven} />
      <OneVideo dataName={youtuberEight} /> */}
    </div>
  );
}
