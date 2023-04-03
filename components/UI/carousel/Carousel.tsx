import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const Carousel = () => {
  const [count, setCount] = useState(1);
  let [ref, { width }] = useMeasure();

  let prev = usePrevious(count);

  let direction = count > prev ? 1 : -1;

  return (
    <div className="mt-8 flex justify-center w-screen px-8 py-10 ">
      <button
        className="hover:cursor-pointer"
        onClick={() => setCount(count - 1)}
      >
        <ChevronDoubleLeftIcon className="h-8 w-8 text-black" />
      </button>

      <div
        ref={ref}
        className="flex w-96 h-96 bg-gray-700 text-white items-center justify-center overflow-hidden relative"
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
              className="object-cover"
              alt="logo"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={() => setCount(count + 1)}>
        <ChevronRightIcon className="h-8 w-8 text-black" />
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
