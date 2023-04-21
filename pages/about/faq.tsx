import FaqContainer from '../../components/FaqContainer';

const faq = () => {
  return (
    <div className="min-h-screen text-zinc-900 bg-zinc-200 md:py-52  gap-10 flex flex-col items-center justify-between ">
      <h2 className="text-5xl font-bold underline text-center">
        Frequently asked questions!
      </h2>
      <div className="flex h-auto flex-wrap items-center justify-between  bg-zinc-900 container max-w-6xl md:rounded-md">
        {faqQuestions.map(({ question, answer }) => (
          <FaqContainer key={question} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default faq;

const faqQuestions = [
  {
    question: 'What should I wear? Or what should I not wear for Treatment?',
    answer:
      'You can come as you are. Most likely you will undress to be on the massage table, so clothing is not applicable. When we are doing Assissted Stretching I suggest wearing comfortable clothes you can stretch in ie. sweats, t-shirt, leggings, shorts.',
  },
  {
    question: 'What should I wear? Or what should I not wear for Training?',
    answer: 'Always come prepared with athletic clothing & proper footwear',
  },
  {
    question: 'What does “dress down to your comfort level” mean?',
    answer:
      'The #1 most important thing is that you are comfortable on the table. Most people remove all clothing. Some keep their underwear on. Some remain fully clothed. It’s up to you to make yourself comfortable.',
  },
  {
    question: 'Is it weird if I get completely naked for a massage?',
    answer:
      'No, its not weird. Most people remove all clothing. I was trained to do bodywork on bare skin & know that I will be draping you very modestly with the sheets.',
  },
  {
    question: 'Should I get a deep-tissue massage?',
    answer:
      'Depends on your goals for your body & your session. Usually when people ask for "deep tissue" they really just want a productive session. ',
  },
  {
    question: 'Should massage hurt?',
    answer:
      'Short answer no. Your massage does not need to invoke pain to be effective. At some point you are damaging tissue beyond what your body can adapt to. There are times when massage can feel intense and you will feel discomfort. But discomfort is different from pain.',
  },
  {
    question: "What is 'assisted stretching'?",
    answer:
      'The style of stretching I assist clients with is PNF (Proprioceptive Neuromuscular Facilitation). That’s a fancy way to say that I will hold a stretch for you & you will contract/relax the affected muscle group to encourage relaxation & increase flexibility. ',
  },
  {
    question: 'How long will it take for me to notice progress?',
    answer:
      "You will feel so good during your session & that is progress. You might feel amazing for 2 days, 1 week, 3 months, a whole year & that is progress. My goal is to help you be specific with 'what progress' you would like to achieve. The time it takes to change depends on so many variables; genetics, lifestyle, injuries, etc. ",
  },
  {
    question: 'Should I always leave a tip?',
    answer:
      'I want gratuity to truly be gratuitous. I have my prices set so that I feel satisfied with our financial exchange.',
  },
  {
    question: 'Where do I park?',
    answer:
      'Our office address is 515 S 700 E Suite 2D. There is a parking garage on 500 S, behind Trolley Corners, that is free parking. Across the street from Whole Foods, NOT Matrix Massage.',
  },
  {
    question: 'What are my payment options?',
    answer:
      ' Cash will always be king however I can accept all major credit cards & that is the easiest option. Sorry, no Venmo.',
  },
  {
    question:
      "What's better for my body…massage, stretching, Chiropractor, Physical Therapy?",
    answer:
      'All of it. Learn what your body needs & then add-in whatever modalities work best for you.',
  },
];
