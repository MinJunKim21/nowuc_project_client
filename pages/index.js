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
];
export async function getStaticProps() {
  const requests = (num) => {
    return `${YOUTUBE_SEARCH_API}?part=snippet&channelId=${chosenList[num].channelId}&order=date&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`;
  };

  const playListRequests = () => {
    return `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLAlM76XTWG8fZ2bT8hcQL3HKbVVs3j95g&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`;
  };

  const [dataThree, dataFour, dataFive, dataSix] = await Promise.all([
    fetch(requests(0)).then((res) => res.json()),
    fetch(requests(1)).then((res) => res.json()),
    fetch(requests(2)).then((res) => res.json()),
    fetch(requests(3)).then((res) => res.json()),
  ]);

  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLif_jr7pPZAD8EJtkFBBctqm5L38JqtGb&maxResults=3&key=${process.env.YOUTUBE_API_KEY}`
  );
  const playListOne = await res.json();

  return {
    props: {
      dataThree,
      dataFour,
      dataFive,
      dataSix,
      playListOne,
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
}) {
  console.log('dataThree', dataThree);
  console.log('dataFour', dataFour);
  console.log('dataFive', dataFive);
  console.log('dataSix', dataSix);
  console.log('playListOne', playListOne);

  return (
    <div>
      <ul>
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
      <OneVideo dataName={dataThree} />
      <OneVideo dataName={dataFour} />
      <OneVideo dataName={dataFive} />
      <OneVideo dataName={dataSix} />
    </div>
  );
}
