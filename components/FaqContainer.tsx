import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
const FaqContainer = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" w-full h-80 sm:basis-1/2 md:basis-1/3 flex-grow flex gap-4 items-center justify-center flex-col bg-zinc-200 m-6 rounded-2xl">
      <motion.div
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div
          className="flex items-center justify-center cursor-pointer text-2xl bg-zinc-900 text-zinc-200 h-10 px-4 uppercase"
          onClick={() => setToggle(!toggle)}
        >
          {question}
        </div>
        <div className="text-center pt-4">filler</div>
      </motion.div>
      <AnimatePresence initial={false}>
        {toggle && (
          <>
            <motion.div
              key={toggle ? "open" : "closed"}
              className="text-center max-w-xl leading-5"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: toggle ? 1 : 0,
                height: toggle ? "auto" : 0,
              }}
              exit={{
                opacity: 0,
                height: toggle ? 0 : "auto",
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
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
