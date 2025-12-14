// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import QuoteSvg from "@/components/svgs/QuoteSvg";

// const Quote = () => {
//   const text = `"The harder the struggle, the more glorious the triumph."`;
//   const writer = "— Thomas Paine";
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="px-4 py-10 border-2 rounded-md mt-10"
//     >
//       <QuoteSvg />
//       <p className="italic font-medium ">{text}</p>
//       <div className="flex justify-end mt-2">
//         <p className="italic font-medium text-text-color">{writer}</p>
//       </div>
//     </motion.div>
//   );
// };

// export default Quote;

"use client";
import React from "react";
import { motion } from "framer-motion";
import QuoteSvg from "@/components/svgs/QuoteSvg";

const Quote = () => {
  const text = `"The harder the struggle, the more glorious the triumph."`;
  const writer = "— Thomas Paine";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{once:true}}
      className="relative px-4 py-10 border-2 rounded-md mt-10"
    >
      <QuoteSvg />

      <p className="italic font-medium text-text-color z-10">{text}</p>

      <div className="flex justify-end mt-2">
        <p className="italic font-medium ">{writer}</p>
      </div>
    </motion.div>
  );
};

export default Quote;
