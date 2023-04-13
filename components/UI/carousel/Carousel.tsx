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
    <div className="  h-[20rem] w-screen  sm:h-[25rem] sm:w-[25rem] md:w-[40rem] md:h-[40rem] relative bg-zinc-200 md:flex items-center justify-center  m-6 ">
      <button onClick={() => setCount(count - 1)}>
        <ChevronDoubleLeftIcon className="absolute z-10 left-2 sm:-left-12 bottom-0 sm:bottom-1/2  bg-zinc-200 border border-black sm:border-none sm:bg-transparent rounded-lg hover:cursor-pointer h-8 w-12 sm:h-10 sm:w-10 text-zinc-900 hover:bg-zinc-900 hover:text-white sm:hover:bg-transparent sm:hover:text-zinc-900  " />
      </button>

      <div
        ref={ref}
        className="  flex w-full h-full bg-gray-900 border-2 border-zinc-900 sm:rounded-md text-white items-center justify-center overflow-hidden relative"
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
        <ChevronDoubleRightIcon className=" absolute z-10 bottom-0 sm:bottom-1/2 right-2 sm:-right-12 bg-zinc-200  border border-zinc-900 rounded-lg sm:border-none sm:bg-transparent h-8 w-12 sm:h-10 sm:w-10 text-zinc-900 hover:bg-zinc-900 hover:text-white sm:hover:bg-transparent sm:hover:text-zinc-900" />
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
