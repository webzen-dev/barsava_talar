"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface faqItem {
  id: number;
  question: string;
  answer: string;
}

interface faqProps {
  faqs: faqItem[];
}
function FaqItem({ faq }: { faq: faqItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const measuredHeight = answerRef.current?.scrollHeight
    ? answerRef.current.scrollHeight
    : 0;

  return (
    <div
      className={clsx(
        "flex flex-col rounded-2xl border-2 gap-4 opacity-90 cursor-pointer px-4",
        isOpen ? "border-black/50" : "border-black"
      )}
      onClick={() => setIsOpen(!isOpen)}
      tabIndex={0}
    >
      <div className="relative flex items-center justify-between w-full pt-4">
        <motion.b
          className="m-0 text-sm md:text-base"
          transition={{ duration: 0.2 }}
          animate={{ color: isOpen ? "var(--gold)" : "var(--brown)" }}
        >
          <span className="text-lg">{faq.id.toLocaleString("fa-IR")}.</span>
          {faq.question}
        </motion.b>

        <motion.span
          transition={{ duration: 0.2 }}
          animate={{
            rotate: isOpen ? -180 : 0,
            color: isOpen ? "var(--gold)" : "var(--brown)",
          }}
        >
          <IoIosArrowDown />
        </motion.span>
      </div>

      <motion.div
        animate={{
          height: isOpen ? measuredHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        initial={false}
        transition={{
          duration: 0.32,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
        style={{ overflow: "hidden" }}
      >
        <div ref={answerRef}>
          <p className="text-sm md:text-base text-black/50 pb-4">
            {faq.answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function FaqsSection({ faqs }: faqProps) {
  return (
    <div className="flex flex-col gap-5 flex-1/2">
      <b className="text-lg md:text-2xl font-bold mb-5">سوالات متداول</b>
      {faqs.map((data, index) => {
        return <FaqItem faq={data} key={index} />;
      })}
      </div>
  );
}
