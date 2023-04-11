import { useState } from "react";
import Image from "next/image";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const Carousel = () => {
  const [count, setCount] = useState(1);
  let [ref, { width }] = useMeasure();

  let prev = usePrevious(count);

  let direction = count > prev ? 1 : -1;

  return (
    <div className=" h-[25rem] w-[25rem] md:w-[40rem] md:h-[40rem]  bg-zinc-200 flex items-center justify-center  m-6 ">
      <button
        className="hover:cursor-pointer"
        onClick={() => setCount(count - 1)}
      >
        <ChevronDoubleLeftIcon className="h-10 w-10 text-black" />
      </button>

      <div
        ref={ref}
        className="  flex  w-full h-full bg-gray-900 border-2 border-zinc-900 rounded-md text-white items-center justify-center overflow-hidden relative"
      >
        <AnimatePresence custom={{ direction, width }}>
          <motion.div
            key={count}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={{ direction, width }}
            className={` absolute w-full h-full flex items-center justify-center`}
          >
            <Image
              src={images[Math.abs(count % 3)]}
              fill={true}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="object-cover"
              alt="logo"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={() => setCount(count + 1)}>
        <ChevronDoubleRightIcon className="h-10 w-10 text-black" />
      </button>
    </div>
  );
};

export default Carousel;

const variants = {
  enter: ({ direction, width }) => ({ x: direction * width }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({ x: direction * -width }),
};

const images = [
  "/images/Header2.PNG",
  "/images/welcome-page-overlap2.jpg",
  "/images/welcome-page-overlap1.jpg",
];

function usePrevious(state) {
  const [tuple, setTuple] = useState([null, state]); //  [prev, current]

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
