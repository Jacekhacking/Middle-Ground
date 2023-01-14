import styles from "../components/styles/LandingPage.module.css";
import Hero from "../components/home/Hero";
import Image from "next/image";
import welcomeImg from "../images/welcome-page-tiny.JPG";
import Instagram from "../components/home/Instagram";

export default function Home() {
  return (
    <>
      <main style={{ paddingTop: "-5rem" }}>
        <Hero />

        <section className={`${styles["welcome-section"]}`}>
          <h2>FIND YOUR MIDDLE GROUND</h2>
          <ul>
            <li>Exploration & gaining awareness of your body</li>
            <li>Assessment & tracking your progress</li>
            <li>Empowerment & educating every client</li>
            <li>Consistency & movement longevity </li>
          </ul>
        </section>

        <section className={`${styles["welcome-div-image-wrapper"]}`}>
          <div className={`${styles["overlap-1"]}`}></div>
          <div className={`${styles["overlap-2"]}`}></div>
        </section>

        <section className={`${styles["services-section-wrapper"]}`}>
          <h2>SERVICES</h2>
          <p>
            Here is a list of the modalities & services offered with Middle
            Ground we like to take a comprehensive view of the body because we
            believe that you deserve it all. Each session is customized to each
            client. Depending on where you are along the spectrum of treatment &
            training. Book a treatment or a training session.{" "}
          </p>
          <div className={`${styles["services-section-ul-div"]}`}>
            <ul>
              <h3>TREATMENT</h3>
              <li>Massage Therapy</li>
              <li>Assisted Stretching</li>
              <li>Cupping</li>
              <li>Muscle Scraping</li>
              <li>Lymphatic Drainage</li>
              <li>Deep Tissue</li>
            </ul>
            <ul>
              <h3>TRAINING</h3>
              <li>Strength Training</li>
              <li>FRC Training</li>
              <li>Corrective Exercise</li>
            </ul>
          </div>
        </section>
        <Instagram />
      </main>
    </>
  );
}
// testing for other branch
