import Image from 'next/image';
import Link from 'next/link';

function OneVideo({ dataName }) {
  return (
    <div>
      <ul>
        {dataName.items.map((item) => {
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

export default OneVideo;
