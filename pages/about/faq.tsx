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
    question: 'Question 1',
    answer:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis dignissimos tempore, consectetur autem provident officiavoluptatum reprehenderit ut explicabo, perferendis error rem sequi?Sed porro adipisci ab quas et?',
  },
  {
    question: 'Question2',
    answer:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis dignissimos tempore, consectetur autem provident officiavoluptatum reprehenderit ut explicabo, perferendis error rem sequi?Sed porro adipisci ab quas et?',
  },
  {
    question: 'Question3',
    answer:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis dignissimos tempore, consectetur autem provident officiavoluptatum reprehenderit ut explicabo, perferendis error rem sequi?Sed porro adipisci ab quas et?',
  },
  {
    question: 'Question3',
    answer:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis dignissimos tempore, consectetur autem provident officiavoluptatum reprehenderit ut explicabo, perferendis error rem sequi?Sed porro adipisci ab quas et?',
  },
  {
    question: 'Question3',
    answer:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis dignissimos tempore, consectetur autem provident officiavoluptatum reprehenderit ut explicabo, perferendis error rem sequi?Sed porro adipisci ab quas et?',
  },
  {
    question: 'Question3',
    answer:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis dignissimos tempore, consectetur autem provident officiavoluptatum reprehenderit ut explicabo, perferendis error rem sequi?Sed porro adipisci ab quas et?',
  },
  {
    question: 'Question3',
    answer:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis dignissimos tempore, consectetur autem provident officiavoluptatum reprehenderit ut explicabo, perferendis error rem sequi?Sed porro adipisci ab quas et?',
  },
  {
    question: 'Question3',
    answer:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis dignissimos tempore, consectetur autem provident officiavoluptatum reprehenderit ut explicabo, perferendis error rem sequi?Sed porro adipisci ab quas et?',
  },
  {
    question: 'Question3',
    answer:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis dignissimos tempore, consectetur autem provident officiavoluptatum reprehenderit ut explicabo, perferendis error rem sequi?Sed porro adipisci ab quas et?',
  },
];
