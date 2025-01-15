import { AiOutlineCopyright } from 'react-icons/ai';
import Image from '../DeginLayout/Images';
import { paymentCart } from '../../assets/allImage';

const FooterBottom = () => {
  const currentDate = new Date().getFullYear();
  return (
    <section className="bg-gray-700 group">
      <div className="container mx-auto">
        <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20 flex flex-col md:flex-row lg:flex-row">
          <p className="text-titleFont font-normal flex md:items-center text-gray-200 duration-200 text-sm">
            <span className="text-md mr-[1px] mt-[2px] md:mt-0 hidden md:inline-flex">
              <AiOutlineCopyright />
            </span>
            Copyright {currentDate} | MR College | All Rights Reserved |
            <a
              href="https://monirujjaman.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ml-1 font-medium group-hover:text-primeColor">
                Powered by MR College
              </span>
            </a>
          </p>
          <Image
            className={`w-[80%] lg:w-[30%] mx-auto lg:mr-5`}
            imgSrc={paymentCart}
          />
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
