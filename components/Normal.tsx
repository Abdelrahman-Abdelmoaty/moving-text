import { motion } from "framer-motion";

const MovingParagraph = ({
  children,
  className,
  variants,
}: {
  children: string;
  className: string;
  variants: any;
}) => {
  const paragraphVariants = {
    hidden: {
      transition: {
        when: "beforeChildren",
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.1,
        when: "afterChildren",
      },
    },
  };
  return (
    <motion.section className="min-h-[50vh] flex item justify-center">
      <motion.p
        variants={paragraphVariants}
        initial="hidden"
        whileInView="visible"
        className={className}
      >
        {children.split(" ").map((word) => (
          <>
            <motion.span key={crypto.randomUUID()} className="inline-block">
              {word.split("").map((letter) => (
                <motion.span key={crypto.randomUUID()} variants={variants} className="inline-block">
                  {letter}
                </motion.span>
              ))}
            </motion.span>{" "}
          </>
        ))}
      </motion.p>
    </motion.section>
  );
};

const variants_1 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const variants_2 = {
  hidden: {
    opacity: 0.2,
  },
  visible: {
    opacity: 1,
  },
};
const variants_3 = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 0,
    },
  },
};
const variants_4 = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      stiffness: 0,
    },
  },
};

export default function Normal() {
  return (
    <>
      <MovingParagraph variants={variants_1} className="text-6xl">
        Mauris in lacus posuere, dictum enim sed, cursus metus. Duis id ex sit amet tellus volutpat
        maximus vitae eu urna.
      </MovingParagraph>
      <MovingParagraph variants={variants_2} className="text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero totam obcaecati dolor
        laudantium. Nemo non deleniti eos quis quae consectetur, sunt enim tempore nam reiciendis.
        Officiis corrupti numquam odio repellendus fugit, mollitia libero eum nemo, ducimus iusto
        excepturi quam esse error qui ex dolorum deserunt suscipit? Dicta ratione repudiandae aut.
      </MovingParagraph>
      <MovingParagraph variants={variants_3} className="text-4xl">
        Pellentesque eu odio in erat auctor consectetur non et sapien. Morbi sit amet augue sit amet
        orci posuere faucibus ac ut metus. Nam viverra blandit dapibus.
      </MovingParagraph>
      <MovingParagraph variants={variants_4} className="text-6xl">
        Pellentesque massa arcu, ornare vel nibh non, iaculis rhoncus nisl. Vestibulum porta lectus
        vitae nibh eleifend, non scelerisque sapien suscipit.
      </MovingParagraph>
    </>
  );
}
