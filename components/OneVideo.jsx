import Image from 'next/image';
import Link from 'next/link';

function OneVideo({ dataName, youtuberList }) {
  console.log(dataName);
  console.log(youtuberList);
  return (
    <div>
      <ul>
        {dataName.items.map((item) => {
          console.log(item, item);
          const { id = {}, snippet = {} } = item;
          const { videoId } = id;
          const { title, publishedAt, channelTitle } = snippet; //destructure 해두는 과정임
          const { profilepic, name } = youtuberList;
          return (
            <li key={videoId}>
              <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
                <div>
                  <h2 className="text-sm">{title}</h2>
                  <h2 className="text-sm">{name}</h2>
                  <h4>{new Date(publishedAt).toLocaleDateString()}</h4>
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
