import Image from 'next/image';
import Link from 'next/link';

function OneVideo({ dataName, youtubePlayList }) {
  return (
    <div>
      <ul>
        {dataName.items.map((item) => {
          console.log('item', item);
          console.log(youtubePlayList);
          const { id, snippet = {} } = item;
          const { title, resourceId, publishedAt, channelTitle } = snippet; //destructure 해두는 과정임
          const { profilepic, name } = youtubePlayList;
          return (
            <li key={id}>
              <Link
                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
              >
                <div>
                  <h3>{title}</h3>
                  <h3>{name}</h3>
                  <h3>{new Date(publishedAt).toLocaleDateString()}</h3>
                  {/* <h3>{profilepiㄴc}</h3> */}
                  <Image
                    src={profilepic}
                    width="36"
                    height="36"
                    objectFit="cover"
                    alt="/"
                    className="rounded-full"
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OneVideo;
