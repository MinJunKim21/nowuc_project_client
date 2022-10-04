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
  { name: '콬TV', channelId: 'UCybPxZoFDPR1qbN04daAc2g' },
  { name: 'GYM JONG KOOK', channelId: 'UCoe-0EVDJnjlSoPK8ygcGwQ' },
  { name: '애니멀봐', channelId: 'UC6zbH1Z4G32bBV9wyK6ikPA' },
  { name: '김해준', channelId: 'UCPwGQuQiIqvUTfa_OKZL7qQ' },
];

const chosenPlayList = [
  {
    name: '미노이의 요리조리',
    playListId: 'PLeb2Hd9bOARRduRxOeT9YIm6BvD6hYYHs',
  },
  {
    name: '05학번이즈히어',
    playListId: 'PL1nP78IpsXsOGFF5_ngIr69vpAIL0zZWy',
  },
];
export async function getStaticProps() {
  const requests = (num) => {
    return `${YOUTUBE_SEARCH_API}?part=snippet&channelId=${chosenList[num].channelId}&order=date&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`;
  };

  const playListRequests = (num) => {
    return `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${chosenPlayList[num].playListId}&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`;
  };

  const [
    dataThree,
    dataFour,
    dataFive,
    dataSix,
    dataSeven,
    youtuberZero,
    youtuberOne,
    playListOne,
    playListTwo,
  ] = await Promise.all([
    fetch(requests(0)).then((res) => res.json()),
    fetch(requests(1)).then((res) => res.json()),
    fetch(requests(2)).then((res) => res.json()),
    fetch(requests(3)).then((res) => res.json()),
    fetch(requests(4)).then((res) => res.json()),
    fetch(requests(5)).then((res) => res.json()),
    fetch(requests(6)).then((res) => res.json()),
    fetch(playListRequests(0)).then((res) => res.json()),
    fetch(playListRequests(1)).then((res) => res.json()),
  ]);

  // const [playListOne, playListTwo] = await Promise.all([
  //   fetch(playListRequests(0)).then((res) => res.json()),
  //   fetch(playListRequests(1)).then((res) => res.json()),
  // ]);

  // const resTwo = await fetch(
  //   `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLeb2Hd9bOARRduRxOeT9YIm6BvD6hYYHs&maxResults=3&key=${process.env.YOUTUBE_API_KEY}`
  // );
  // const playListTwo = await resTwo.json();

  return {
    props: {
      dataThree,
      dataFour,
      dataFive,
      dataSix,
      playListOne,
      playListTwo,
      dataSeven,
      youtuberZero,
      youtuberOne,
    },
    revalidate: 3600,
  };
}

export default function Home({
  dataThree,
  dataFour,
  dataFive,
  dataSix,
  playListOne,
  playListTwo,
  youtuberZero,
  youtuberOne,
  // dataSeven,
}) {
  console.log('dataThree', dataThree);
  console.log('dataFour', dataFour);
  console.log('dataFive', dataFive);
  console.log('dataSix', dataSix);
  console.log('playListOne', playListOne);
  console.log('playListTwo', playListTwo);

  return (
    <div>
      {/* <ul>
        {playListOne.items.map((item) => {
          console.log('item', item);
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet; //destructure 해두는 과정임
          const { medium = {} } = thumbnails;
          return (
            <li key={id}>
              <Link
                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
              >
                <div>
                  <p>
                    <Image
                      width={medium.width}
                      height={medium.height}
                      src={medium.url}
                      alt=""
                    />
                  </p>
                  <h3>{title}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul>
        {playListTwo.items.map((item) => {
          console.log('item', item);
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet; //destructure 해두는 과정임
          const { medium = {} } = thumbnails;
          return (
            <li key={id}>
              <Link
                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
              >
                <div>
                  <p>
                    <Image
                      width={medium.width}
                      height={medium.height}
                      src={medium.url}
                      alt=""
                    />
                  </p>
                  <h3>{title}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <OneVideo dataName={dataThree} />
      <OneVideo dataName={dataFour} />
      <OneVideo dataName={dataFive} />
      <OneVideo dataName={dataSix} />
      <OneVideo dataName={youtuberZero} />
      <OneVideo dataName={youtuberOne} /> */}
    </div>
  );
}
