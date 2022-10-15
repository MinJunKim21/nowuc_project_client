import Image from 'next/image';
import Link from 'next/link';

function OneVideo({ dataName, youtubePlayList }) {
  return (
    <div>
      <ul>
        {/* console.log(youtubePlayList); */}
        {dataName.items.map((item) => {
          console.log('item', item);
          const { id, snippet = {} } = item;
          const { title, resourceId } = snippet; //destructure 해두는 과정임

          return (
            <li key={id}>
              <Link
                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
              >
                <div>
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

export default OneVideo;
