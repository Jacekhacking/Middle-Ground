import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

const FaqContainer = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" h-80 sm:basis-1/2 md:basis-1/3 flex-grow flex gap-4 items-center justify-center flex-col bg-zinc-200 m-6 rounded-2xl">
      <motion.div
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <div
          className="flex items-center justify-center cursor-pointer sm:text-xl md:text-2xl bg-zinc-900 text-zinc-200 h-15 px-4 mx-4 py-2 uppercase text-center"
          onClick={() => setToggle(!toggle)}
        >
          {question}
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {toggle && (
          <>
            <motion.div
              key={toggle ? 'open' : 'closed'}
              className="text-center max-w-xl leading-5"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: toggle ? 1 : 0,
                height: toggle ? 'auto' : 0,
              }}
              exit={{
                opacity: 0,
                height: toggle ? 0 : 'auto',
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              {answer}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqContainer;
