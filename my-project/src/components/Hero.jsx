import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="flex-1 font-semibold font-poppins ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="hidden mr-0 ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-semibold w-full font-poppins ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
          repudiandae. Eveniet ullam est illum a voluptate, corporis laudantium?
          Suscipit dignissimos magnam repellendus ducimus, nam fuga, saepe
          delectus harum ipsum exercitationem quam obcaecati atque debitis,
          minima adipisci accusantium minus rerum similique.
        </p>
      </div>
      <div>
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] top-0 bottom-40 rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] top-0 blue__gradient bottm-20 right-20" />
      </div>
      
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
