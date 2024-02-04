"use client";
import Normal from "@/components/Normal";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main className="max-w-5xl font-black mx-auto py-24 flex flex-col space-y-24 px-2">
      <Normal />
      <motion.section className="min-h-[50vh] flex item justify-center text-5xl">
        <motion.div
          whileInView={{
            transition: {
              staggerChildren: 0.4,
            },
          }}
        >
          <motion.p initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
            Quisque dapibus rutrum sapien. Sed vulputate est malesuada pharetra sodales.
          </motion.p>
          <motion.p initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
            In porta ornare eros, volutpat vehicula nisi.
          </motion.p>
          <motion.p initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
            Maecenas ligula dolor, lacinia a aliquet vitae, lacinia vel ex.
          </motion.p>
          <motion.p initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
            Quisque dapibus rutrum sapien. Sed vulputate est malesuada pharetra sodales.
          </motion.p>
          <motion.p initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
            In porta ornare eros, volutpat vehicula nisi.
          </motion.p>
          <motion.p initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
            Maecenas ligula dolor, lacinia a aliquet vitae, lacinia vel ex.
          </motion.p>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
