import Image from "next/image";
import AboutImage from "~/public/images/welcome-page-tiny 2.jpg";
import HeaderTitle from "~/public/images/HeaderTitle.png";

const AboutAloraComponent = () => {
  return (
    <>
      <div className="flex w-96 h-40  items-center justify-center overflow-hidden relative">
        <Image
          src={HeaderTitle}
          fill={true}
          alt="middle Ground"
          className="object-cover"
        />
      </div>

      <div className=" bg-zinc-200 md:bg-zinc-900 rounded-md gap-6 flex flex-col md:flex-row p-10 max-w-5xl items-center justify-start">
        <Image
          src={AboutImage}
          alt="Alora Bonner"
          className="shadow-2xl rounded-md w-4/5 md:w-1/2 "
        />
        <div className="flex flex-col items-center justify-evenly">
          <h2 className=" text-zinc-900 md:text-zinc-200  text-5xl md:pb-10">
            Meet Alora
          </h2>

          <p className=" text-zinc-900 md:text-zinc-200 text-center leading-7 text-md md:text-xl max-h-96 md:max-w-3xl  overflow-auto ">
            My origin story dates back to my own athletic experience. I grew up
            in Mesquite, NV, attended a small high school where I played
            multiple sports including volleyball, basketball, and softball.
            During my high school & college athletic career I struggled with
            sprained ankles, knee pain, and nagging shoulder injuries.
            Initially, my love for sports & team community fueled my desire to
            pursue Athletic Training. I hoped to blend my passions of sports &
            repairing my body. After a short time playing collegiate volleyball
            in Missouri; I transferred to Southern Utah University in Cedar
            CIty, Utah. I entered the Athletic Training program. I had the
            opportunity to work with the athletes for the Track & Cross Country
            team, Football team, and Gymnastics program. In Winter 2017, I
            graduated with my Bachelor's Degree in Exercise Science. I found
            that Athletic Trainers are vastly under-paid & overworked.
            Frustrated by that system, I postponed my Master's degree to pursue
            my hobby job at the time; river guiding in Moab & Grand Canyon. I
            joined an amazing community & I chased this dream for 6 years. I
            easily fell into a pattern of working on the river during the warm
            months & then earning continuing education certifications during the
            cold months. I became a Certified Strength and Conditioning Coach in
            2017. I also completed basic training as an EMT in 2018. In 2019, I
            enrolled in Myotherapy Massage Therapy School. Massage school was
            the widest door that swung open for me. My path through Massage
            Therapy school was wild as we entered the COVID pandemic in March of
            2020. Everything was postponed, except for life on the river. I was
            able to work my final season, which left me to finish my LMT in
            summer of 2021. So, that brings us up to date. My first job out of
            school was at The Cliff Spa at Snowbird. One of the perks is free
            skiing! I also worked at the StretchLab in Fort Union, which I
            loved! These 2 jobs made me realize that I could operate my own
            small, private practice here in the valley. In November 2021 I
            started renting a shared office at the Yugen Wellness Center in
            Millcreek and started my first business ever, "Bee Better Massage”.
            This was a great first year! The following year, I was able to move
            into my dream office, within an amazing community of health &
            wellness practitioners at the Trolley Healing Hub. This allowed me
            to re-brand & create MIDDLE GROUND - Treatment & Training. Now I see
            clients for bodywork & personal training part-time & I also teach
            class at Myotherapy College of Massage part-time.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutAloraComponent;
