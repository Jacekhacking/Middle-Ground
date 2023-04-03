import styles from "../styles/LandingPage.module.css";
import Hero from "../components/home/Hero";
import Image from "next/image";
import welcomeImg from "../public/images/welcome-page-tiny 2.jpg";
// import Instagram from "../components/home/Instagram";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* <section className="grid grid-cols-4 grid-rows-4 gap-2 max-2xl:"> */}
        <section className=" py-20 md:py-32 flex flex-col md:flex-row items-center justify-center gap-2 m-10 ">
          <h2 className=" py-10 text-center text-3xl flex items-center justify-center  md:text-5xl ">
            FIND YOUR MIDDLE GROUND
          </h2>
          <ul className=" pb-10 text-lg sm:text-2xl flex justify-center items-center flex-col md:text-2xl lg:text-3xl">
            <li>Exploration & gaining awareness of your body</li>
            <li>Assessment & tracking your progress</li>
            <li>Empowerment & educating every client</li>
            <li>Consistency & movement longevity </li>
          </ul>
        </section>

        <section className={`min-h-[75vh] pb-12 grid grid-cols-7 grid-rows-7`}>
          <div className={`${styles["overlap-1"]}`}></div>
          <div className={`${styles["overlap-2"]}`}></div>
        </section>

        <section
          className={`${styles["services-section-wrapper"]} bg-gray-100 text-black`}
        >
          <h2 className="text-xl">SERVICES</h2>
          <p className="text-xl">
            Here is a list of the modalities & services offered with Middle
            Ground we like to take a comprehensive view of the body because we
            believe that you deserve it all. Each session is customized to each
            client. Depending on where you are along the spectrum of treatment &
            training. Book a treatment or a training session.
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
        {/*<Instagram />*/}
      </main>
    </>
  );
}
