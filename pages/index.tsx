import Hero from '../components/home/Hero';
import Image from 'next/image';
import Instagram from '../components/home/Instagram';
import AboutAloraComponent from '../components/about/AboutAloraComponent';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
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

        <section
          className={`min-h-[75vh] relative mb-28 grid grid-cols-7 grid-rows-7`}
        >
          <div className="bg-contain bg-center relative col-start-2 md:col-start-4 col-end-7 row-start-1 row-end-3 md:row-end-4">
            <Image
              src={'/images/welcome-page-overlap2.jpg'}
              fill={true}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="object-cover"
              alt="Person getting their shoulders massaged."
            ></Image>
          </div>

          <div className=" bg-contain bg-center -z-10 relative col-start-2 col-end-7 md:col-end-5 row-start-4 md:row-start-3 row-end-6">
            <Image
              src={'/images/welcome-page-overlap1.jpg'}
              fill={true}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="object-cover"
              alt="Person getting their shoulders massaged."
            ></Image>
          </div>
        </section>

        <section className=" flex gap-10 items-center flex-col justify-center min-h-[50vh] px-10 py-20 bg-zinc-200 text-zinc-950">
          <h2 className="text-4xl ">SERVICES</h2>
          <p className="text-2xl text-center max-w-5xl">
            Here is a list of the modalities & services offered with Middle
            Ground we like to take a comprehensive view of the body because we
            believe that you deserve it all. Each session is customized to each
            client. Depending on where you are along the spectrum of treatment &
            training. Book a treatment or a training session.
          </p>
          <div className="  inline-flex text-center items-start">
            <ul className="text-2xl">
              <h3 className="text-3xl pb-4">TREATMENT</h3>
              <li>Massage Therapy</li>
              <li>Assisted Stretching</li>
              <li>Cupping</li>
              <li>Muscle Scraping</li>
              <li>Lymphatic Drainage</li>
              <li>Deep Tissue</li>
            </ul>
            <ul className="text-2xl">
              <h3 className="text-3xl pb-4">TRAINING</h3>
              <li>Strength Training</li>
              <li>FRC Training</li>
              <li>Corrective Exercise</li>
            </ul>
          </div>
        </section>
        <section className="flex items-center justify-center bg-zinc-900">
          <AboutAloraComponent bioParagraph={homePageBio} />
        </section>
        <Instagram />
      </main>
    </>
  );
}

const homePageBio = `B.S. Exercise Science, LMT, CSCS
Alora Bonner is the owner of Middle Ground - Treatment & Training. She is a Licensed Massage Therapist & Personal Trainer. She earned her Bachelor's Degree in Exercise Science from SUU, where she also worked as an Athletic Trainer.  Her passions range from team sports, to river guiding, to hot yoga, and to helping people feel confident in their moving bodies. Currently, she is seeing clients for bodywork, mobility & strength training. She is also teaching classes at Myotherapy College of Massage, and is very involved in advancing the field of massage therapy.  "My goal is to help people find their middle ground, whatever that looks like for them."
`;
