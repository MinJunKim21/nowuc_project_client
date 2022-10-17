import tw from 'tailwind-styled-components';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import OneVideo from '../components/OneVideo';
import PlayListOneVideo from '../components/PlayListOneVideo';
import { youtuberList } from '../utils/youtuberList';
import { youtubePlayList } from '../utils/youtubePlayList';
import { useState } from 'react';

//API 관련
const API_KEY = 'AIzaSyDy1kxV8bZgc9ye2b_fTxeRyj1tp8MJ9Ks';
const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';
const YOUTUBE_CHANNELS_API = 'https://www.googleapis.com/youtube/v3/channels';
const YOUTUBE_SEARCH_API = 'https://www.googleapis.com/youtube/v3/search';

export async function getStaticProps() {
  const requests = (num) => {
    return `${YOUTUBE_SEARCH_API}?part=snippet&fields=items(id,snippet(title,publishedAt))&channelId=${youtuberList[num].channelId}&order=date&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`;
  };
  // 이거로 정보중 채택해서 가져오는거 해봐보기
  const playListRequests = (num) => {
    return `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&fields=items(id,snippet(title,publishedAt,resourceId))&playlistId=${youtubePlayList[num].playListId}&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`;
  };

  const [
    youtuberZero,
    youtuberOne,
    youtuberTwo,
    youtuberThree,
    youtuberFour,
    youtuberFive,
    youtuberSix,
    youtuberSeven,
    youtuberEight,
    youtuberNine,
    youtuberTen,
    youtuberEleven,
    youtuberTwelve,
    youtuberThirteen,
    youtuberFourteen,
    youtuberFifteen,
    playListZero,
    playListOne,
    playListTwo,
    playListThree,
  ] = await Promise.all([
    fetch(requests(0)).then((res) => res.json()),
    fetch(requests(1)).then((res) => res.json()),
    fetch(requests(2)).then((res) => res.json()),
    fetch(requests(3)).then((res) => res.json()),
    fetch(requests(4)).then((res) => res.json()),
    fetch(requests(5)).then((res) => res.json()),
    fetch(requests(6)).then((res) => res.json()),
    fetch(requests(7)).then((res) => res.json()),
    fetch(requests(8)).then((res) => res.json()),
    fetch(requests(9)).then((res) => res.json()),
    fetch(requests(10)).then((res) => res.json()),
    fetch(requests(11)).then((res) => res.json()),
    fetch(requests(12)).then((res) => res.json()),
    fetch(requests(13)).then((res) => res.json()),
    fetch(requests(14)).then((res) => res.json()),
    fetch(requests(15)).then((res) => res.json()),
    fetch(playListRequests(0)).then((res) => res.json()),
    fetch(playListRequests(1)).then((res) => res.json()),
    fetch(playListRequests(2)).then((res) => res.json()),
    fetch(playListRequests(3)).then((res) => res.json()),
  ]);

  return {
    props: {
      youtuberZero,
      youtuberOne,
      youtuberTwo,
      youtuberThree,
      youtuberFour,
      youtuberFive,
      youtuberSix,
      youtuberSeven,
      youtuberEight,
      youtuberNine,
      youtuberTen,
      youtuberEleven,
      youtuberTwelve,
      youtuberThirteen,
      youtuberFourteen,
      youtuberFifteen,
      playListZero,
      playListOne,
      playListTwo,
      playListThree,
    },
    revalidate: 3600,
  };
}

export default function Home({
  youtuberZero,
  youtuberOne,
  youtuberTwo,
  youtuberThree,
  youtuberFour,
  youtuberFive,
  youtuberSix,
  youtuberSeven,
  youtuberEight,
  youtuberNine,
  youtuberTen,
  youtuberEleven,
  youtuberTwelve,
  youtuberThirteen,
  youtuberFourteen,
  youtuberFifteen,
  playListZero,
  playListOne,
  playListTwo,
  playListThree,
}) {
  const [category, setCategory] = useState('fun');
  // const [study, setStudy] = useState(false);
  // const [subscriber, setSubscriber] = useState(false);

  return (
    <div>
      <div className="flex flex-col text-center justify-center space-y-8 bg-[#252450] h-[348px] relative">
        <span className="text-white text-xl font-semibold leading-8">
          뭘좀아는 민준과 지원은
          <br />
          사소한 고민에서 출발했다.
        </span>
        <span className="text-xs text-white">
          보고 싶은 영상만 선별하여 최고의 시간을 갖을 유튜브 오마카세
        </span>
        <div className="flex w-full space-x-4 absolute bottom-8 justify-center ">
          {category === 'study' ? (
            <ButtonActive>공부하자</ButtonActive>
          ) : (
            <ButtonInactive
              onClick={() => {
                setCategory('study');
              }}
            >
              공부하자
            </ButtonInactive>
          )}
          {category === 'fun' ? (
            <ButtonActive>즐&nbsp;&nbsp;기&nbsp;&nbsp;자</ButtonActive>
          ) : (
            <ButtonInactive
              onClick={() => {
                setCategory('fun');
              }}
            >
              즐&nbsp;&nbsp;기&nbsp;&nbsp;자
            </ButtonInactive>
          )}
          {category === 'subscriber' ? (
            <ButtonActive>구독자순</ButtonActive>
          ) : (
            <ButtonInactive
              onClick={() => {
                setCategory('subscriber');
              }}
            >
              구독자순
            </ButtonInactive>
          )}
        </div>
      </div>
      {category === 'fun' && (
        <div>
          <OneVideo dataName={youtuberZero} youtuberList={youtuberList[0]} />
          <OneVideo dataName={youtuberOne} youtuberList={youtuberList[1]} />
          <OneVideo dataName={youtuberTwo} youtuberList={youtuberList[2]} />
          <OneVideo dataName={youtuberThree} youtuberList={youtuberList[3]} />
          <OneVideo dataName={youtuberFour} youtuberList={youtuberList[4]} />
          <OneVideo dataName={youtuberFive} youtuberList={youtuberList[5]} />
          <OneVideo dataName={youtuberSix} youtuberList={youtuberList[6]} />
          <OneVideo dataName={youtuberSeven} youtuberList={youtuberList[7]} />
          <OneVideo dataName={youtuberEight} youtuberList={youtuberList[8]} />
          <PlayListOneVideo
            dataName={playListZero}
            youtubePlayList={youtubePlayList[0]}
          />
          <PlayListOneVideo
            dataName={playListOne}
            youtubePlayList={youtubePlayList[1]}
          />
          <PlayListOneVideo
            dataName={playListTwo}
            youtubePlayList={youtubePlayList[2]}
          />
          <PlayListOneVideo
            dataName={playListThree}
            youtubePlayList={youtubePlayList[3]}
          />
        </div>
      )}
      {category === 'study' && (
        <div>
          <OneVideo dataName={youtuberNine} youtuberList={youtuberList[9]} />
          <OneVideo dataName={youtuberTen} youtuberList={youtuberList[10]} />
          <OneVideo dataName={youtuberEleven} youtuberList={youtuberList[11]} />
          <OneVideo dataName={youtuberTwelve} youtuberList={youtuberList[12]} />
          <OneVideo
            dataName={youtuberThirteen}
            youtuberList={youtuberList[13]}
          />
          <OneVideo
            dataName={youtuberFourteen}
            youtuberList={youtuberList[14]}
          />
          <OneVideo
            dataName={youtuberFifteen}
            youtuberList={youtuberList[15]}
          />
        </div>
      )}
    </div>
  );
}

const ButtonActive = tw.div`bg-[#FAFC6D] rounded-full text-[#252450] px-2 py-1 font-semibold
`;

const ButtonInactive = tw.div`border border-gray-300 rounded-full text-gray-400 px-2 py-1 font-semibold
`;
