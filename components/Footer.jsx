import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowUp } from 'react-icons/md';

function Footer() {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="flex flex-col relative">
      <div className="flex h-[212px] z-[-10] w-full">
        <Image
          src="/imgsrc/footerbg.png"
          alt="/"
          layout="fill"
          className="z-[-30]"
        />
      </div>
      <div onClick={goToTop} className="absolute z-50 right-8">
        <MdKeyboardArrowUp className="bg-[#FAFC6D] w-9 h-9 rounded-full p-1 border-[1px] border-black" />
      </div>
      <div className="flex space-x-6 absolute bottom-28 left-10">
        <Link href="https://www.notion.so/minjunkim21/MinJunKim-52799d7e488646e799470acfb797213b">
          <div className="bg-white flex items-center justify-center rounded-full w-12 h-12 relative cursor-pointer">
            <Image
              src="/imgsrc/mnjnicon.png"
              alt="/"
              width="29px"
              height="32px"
              className="bg-white rounded-full "
            />
            <div className="absolute w-12 h-12 rounded-full bg-[#0E0D30] z-[-5] left-2 top-2"></div>
          </div>
        </Link>
        <Link href="https://www.notion.so/leejivvn/Jiwon-Lee-cec879ee8f0f44e881acd24d66d5093e">
          <div className="bg-white flex items-center justify-center rounded-full w-12 h-12 relative cursor-pointer">
            <Image
              src="/imgsrc/easyicon.png"
              alt="/"
              width="27px"
              height="34px"
              className="bg-white rounded-full"
            />
            <div className="absolute w-12 h-12 rounded-full bg-[#0E0D30] z-[-5] left-2 top-2"></div>
          </div>
        </Link>
      </div>
      <h4 className="text-md text-white absolute top-20 right-8">
        Early Access
      </h4>
      <div className="absolute top-16 right-5">
        <Image src="/imgsrc/marking.png" alt="/" width="170px" height="54px" />
      </div>
      <span className=" text-white text-xs absolute left-10 bottom-9">
        © OMAKASE, 2022 | MNJN & EASY
      </span>
    </div>
  );
}

export default Footer;
