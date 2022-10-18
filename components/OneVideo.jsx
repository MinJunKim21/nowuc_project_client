import Image from 'next/image';
import Link from 'next/link';
import { BsFillPlayFill } from 'react-icons/bs';

function OneVideo({ dataName, youtuberList }) {
  console.log(dataName);
  console.log(youtuberList);
  return (
    <div>
      <ul>
        {dataName.items.map((item) => {
          const { id = {}, snippet = {} } = item;
          const { videoId } = id;
          const { title, publishedAt, channelTitle } = snippet; //destructure 해두는 과정임
          const { profilepic, name } = youtuberList;
          return (
            <li key={videoId}>
              <div className="flex w-full h-19 items-center border-b-[1px] border-gray-300 border-r-0">
                <div className="bg-[#252450] h-[76px] w-1.5"></div>
                <div className="px-1 py-auto">
                  <Image
                    src={profilepic}
                    width="50"
                    height="50"
                    objectFit="cover"
                    alt="/"
                    className="rounded-full"
                  />
                </div>
                <div className="h-[76px] w-full border-r-[1px] border-gray-300">
                  <div className="flex flex-col space-y-0.5 pr-3 justify-center h-full">
                    <h3 className="overflow-hidden text-ellipsis whitespace-nowrap w-[300px] pl-2">
                      {title}
                    </h3>
                    <div className="flex justify-between pl-2">
                      <h3 className="text-sm text-[#888888] underline">
                        {name}
                      </h3>
                      <h3 className="font-light text-xs">
                        {new Date(publishedAt).toLocaleDateString()}
                      </h3>
                    </div>
                  </div>
                </div>
                <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
                  <div className="flex w-[50px] border-l-gray-300 justify-center items-center text-3xl text-[#252450] mx-auto h-full cursor-pointer mx-2 ">
                    <BsFillPlayFill />
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OneVideo;
