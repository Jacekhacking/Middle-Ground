import AboutAloraComponent from '../../components/about/AboutAloraComponent';
import Image from 'next/image';
import HeaderTitle from '/public/images/HeaderTitle.png';

const AboutFounderComponent = () => {
  return (
    <div className="min-h-screen bg-zinc-200 flex flex-col items-center justify-center  md:py-20 ">
      <div className="flex w-96 h-40  items-center justify-center overflow-hidden relative">
        <Image
          src={HeaderTitle}
          fill={true}
          alt="middle Ground"
          className="object-cover"
        />
      </div>
      <AboutAloraComponent bioParagraph={aboutPageBio} />
    </div>
  );
};

export default AboutFounderComponent;

const aboutPageBio = `My origin story dates back to my own athletic experience. I grew up
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
class at Myotherapy College of Massage part-time.`;
