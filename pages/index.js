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
          <h2>WE PROVIDE TREATMENT AND TRAINING FOR EVERYONE</h2>
          <p>
            Middle Ground is part of a health collective that in motivated help
            yo find your middle ground amidst the various treatment & training
            paths in the world. We offer bodywork modalities & personal training
            to help you be your best self, feel good for a lifetime, and build
            trust within your own body. Book a section to learn the most.
            Explore the website to learn more.
          </p>
        </section>

        <section className={`${styles["welcome-div-image-wrapper"]}`}>
          <div className={`${styles["overlap-1"]}`}></div>
          <div className={`${styles["overlap-2"]}`}></div>
        </section>

        <section className={`${styles["services-section"]}`}>
          <h2>SERVICES</h2>
          <p>
            Here is a list of the modalities & services offered with Middle
            Ground we like to take a comprehensive view of the body because we
            believe that you deserve it all. Each session is customized to each
            client. Depending on where you are along the spectrum of treatment &
            training. Book a treatment or a training session.{" "}
          </p>
          <div className="" style={{ display: "flex" }}>
            <ul>
              <h3>TRAINING</h3>
              <li>Strength Training</li>
              <li>FRC Training</li>
              <li>Corrective Exercise</li>
            </ul>
            <ul>
              <h3>TREATMENT</h3>
              <li>Massage Therapy</li>
              <li>Assisted Stretching</li>
              <li>Cupping</li>
              <li>Muscle Scraping</li>
              <li>Lymphatic Drainage</li>
              <li>Deep Tissue</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
// testing for other branch
