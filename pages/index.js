import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const API_KEY = 'AIzaSyDy1kxV8bZgc9ye2b_fTxeRyj1tp8MJ9Ks';
const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';
const YOUTUBE_CHANNELS_API = 'https://www.googleapis.com/youtube/v3/channels';
const YOUTUBE_SEARCH_API = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEOS_API = 'https://www.googleapis.com/youtube/v3/videos';

export async function getServerSideProps() {
  // const res = await fetch(
  //   `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLif_jr7pPZAD8EJtkFBBctqm5L38JqtGb&maxResults=3&key=${process.env.YOUTUBE_API_KEY}`
  // );
  // const data = await res.json();
  // return {
  //   props: {
  //     data,
  //   },
  // };

  // const resTwo = await fetch(
  //   `${YOUTUBE_CHANNELS_API}?part=snippet&forUsername=zilioner83&key=${process.env.YOUTUBE_API_KEY}`
  // );
  // const dataTwo = await resTwo.json();
  // return {
  //   props: {
  //     dataTwo,
  //   },
  // };

  const resThree = await fetch(
    `${YOUTUBE_SEARCH_API}?part=snippet&channelId=UCUj6rrhMTR9pipbAWBAMvUQ&order=date&key=${process.env.YOUTUBE_API_KEY}`
  );
  const dataThree = await resThree.json();
  return {
    props: {
      dataThree,
    },
  };
}

export default function Home({ data, dataTwo, dataThree }) {
  console.log('data', data);
  console.log('dataTwo', dataTwo);
  console.log('dataThree', dataThree);

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
          console.log('item3', item);
          const { id = {}, snippet = {} } = item;
          const { videoId } = id;
          const { title, thumbnails = {} } = snippet; //destructure 해두는 과정임
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
                  <h3>{title}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
