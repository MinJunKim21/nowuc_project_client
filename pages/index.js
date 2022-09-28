import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const API_KEY = 'AIzaSyDy1kxV8bZgc9ye2b_fTxeRyj1tp8MJ9Ks';
const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLif_jr7pPZAD8EJtkFBBctqm5L38JqtGb&maxResults=3&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  console.log('data', data);

  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
}
