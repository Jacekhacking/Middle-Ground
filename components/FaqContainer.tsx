import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
const FaqContainer = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" w-full h-80 sm:basis-1/3 md:basis-1/4 flex-grow flex gap-4 items-center justify-center flex-col bg-zinc-200 m-2 md:rounded-md">
      <motion.div
        className="flex items-center cursor-pointer"
        onClick={() => setToggle(!toggle)}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <ChevronDoubleRightIcon className="h-6 w-6" /> {question}
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
