import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

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
  // const resThree = await fetch(
  //   `${YOUTUBE_SEARCH_API}?part=snippet&channelId=UCUj6rrhMTR9pipbAWBAMvUQ&order=date&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`
  // );
  // const dataThree = await resThree.json();

  // const resFour = await fetch(
  //   `${YOUTUBE_SEARCH_API}?part=snippet&channelId=${chosenList[1].channelId}&order=date&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`
  // );
  // const dataFour = await resFour.json();

  //fetch 하는거 모았음
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
      {/* <ul>
        {data.items.map((item) => {
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
      </ul> */}

      <ul>
        {dataThree.items.map((item) => {
          const { id = {}, snippet = {} } = item;
          const { videoId } = id;
          const { title, publishTime, channelTitle, thumbnails = {} } = snippet; //destructure 해두는 과정임
          const { medium = {} } = thumbnails;
          return (
            <li key={videoId}>
              <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
                <div>
                  <p>
                    <Image
                      width={medium.width}
                      height={medium.height}
                      src={medium.url}
                      alt=""
                    />
                  </p>
                  <h2>{title}</h2>
                  <h4>{publishTime}</h4>
                  <h4>{channelTitle}</h4>
                  <h5>만약 publishTime이 오늘이라면 오늘이라고 마킹되어있기</h5>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <ul>
        {dataFour.items.map((item) => {
          const { id = {}, snippet = {} } = item;
          const { videoId } = id;
          const { title, publishTime, channelTitle, thumbnails = {} } = snippet; //destructure 해두는 과정임
          const { medium = {} } = thumbnails;
          return (
            <li key={videoId}>
              <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
                <div>
                  <p>
                    <Image
                      width={medium.width}
                      height={medium.height}
                      src={medium.url}
                      alt=""
                    />
                  </p>
                  <h2>{title}</h2>
                  <h4>{publishTime}</h4>
                  <h4>{channelTitle}</h4>
                  <h5>만약 publishTime이 오늘이라면 오늘이라고 마킹되어있기</h5>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <ul>
        {dataFive.items.map((item) => {
          const { id = {}, snippet = {} } = item;
          const { videoId } = id;
          const { title, publishTime, channelTitle, thumbnails = {} } = snippet; //destructure 해두는 과정임
          const { medium = {} } = thumbnails;
          return (
            <li key={videoId}>
              <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
                <div>
                  <p>
                    <Image
                      width={medium.width}
                      height={medium.height}
                      src={medium.url}
                      alt=""
                    />
                  </p>
                  <h2>{title}</h2>
                  <h4>{publishTime}</h4>
                  <h4>{channelTitle}</h4>
                  <h5>만약 publishTime이 오늘이라면 오늘이라고 마킹되어있기</h5>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
