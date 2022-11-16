import styles from "../components/styles/LandingPage.module.css";
import Header from "../components/home/Header";
import Image from "next/image";
import welcomeImg from "../components/images/welcome-page-tiny.JPG";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Header />

        <section className={`${styles["welcome-section"]}`}>
          <h2>HELLO WELCOME TO MY WEBSITE my name is alora</h2>

          <div>
            <Image src={welcomeImg} height={250} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit
            dolores repellat voluptates laborum reprehenderit iste molestias
            autem temporibus minus cumque assumenda sequi similique eos dicta
            laboriosam, dolorem vel recusandae?
          </div>
        </section>

        <section className={`${styles["welcome-div-image-wrapper"]}`}>
          <div className={`${styles["overlap-1"]}`}></div>
          <div className={`${styles["overlap-2"]}`}></div>
        </section>

        <section className={`${styles["services-section"]}`}>
          <h3>SERVICES</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            reiciendis aspernatur facilis, dolorem itaque quasi? Vel dolore vero
            laudantium hic nulla delectus porro quo, voluptatem, labore possimus
            nisi laboriosam explicabo?
          </p>
        </section>
      </main>
    </div>
  );
}
