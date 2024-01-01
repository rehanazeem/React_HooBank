import { card } from "../assets";
import styles, { layout } from "../assets";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Lorem ipsum dolor sit amet <br className="hidden sm:block" /> in a few
        days.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
        aspernatur. Deserunt iure quae, adipisci temporibus libero sit repellat
        veritatis laborum.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
