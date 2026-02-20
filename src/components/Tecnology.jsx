import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVue } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";


export default function () {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Tecnologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-blue-500" />
        </div>


        <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaBootstrap className="text-7xl text-purple-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoVue  className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact  className="text-7xl text-blue-500" />
        </div>
      </div>
    </div>
  );
}
// import React from "react";
// import { motion } from "framer-motion";
// import { FaHtml5 } from "react-icons/fa6";
// import { SiCss3, SiJavascript } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { IoLogoVue } from "react-icons/io5";
// import { FaReact, FaBootstrap } from "react-icons/fa";

// export default function Technologies() {
//   const icons = [
//     { component: <FaHtml5 className="text-7xl text-orange-500" />, id: 1 },
//     { component: <SiCss3 className="text-7xl text-blue-500" />, id: 2 },
//     { component: <SiJavascript className="text-7xl text-yellow-500" />, id: 3 },
//     { component: <RiTailwindCssFill className="text-7xl text-blue-500" />, id: 4 },
//     { component: <FaBootstrap className="text-7xl text-purple-500" />, id: 5 },
//     { component: <IoLogoVue className="text-7xl text-green-500" />, id: 6 },
//     { component: <FaReact className="text-7xl text-blue-500" />, id: 7 },
//   ];

//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <h1 className="my-20 text-center text-4xl">Technologies</h1>
//       <div className="flex flex-wrap items-center justify-center gap-8">
//         {icons.map((icon, i) => (
//           <motion.div
//             key={icon.id}
//             className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//             initial={{ opacity: 0, y: 50, rotate: -15 }}
//             whileInView={{ opacity: 1, y: 0, rotate: 0 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", stiffness: 120, damping: 12, delay: i * 0.15 }}
//             whileHover={{
//               scale: 1.3,
//               rotate: [0, 10, -10, 5, 0], // wiggle on hover
//               transition: { duration: 0.6, ease: "easeInOut" },
//             }}
//             animate={{
//               y: [0, -10, 0], // floating effect
//               rotate: [0, 5, 0], // slow rotate wiggle
//             }}
//             transition={{
//               y: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
//               rotate: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
//             }}
//           >
//             {icon.component}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { motion } from "framer-motion";
// import { FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
// import { SiCss3, SiJavascript } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { IoLogoVue } from "react-icons/io5";

// export default function Technologies() {
//   const icons = [
//     { component: <FaHtml5 className="text-7xl text-orange-500" />, id: 1 },
//     { component: <SiCss3 className="text-7xl text-blue-500" />, id: 2 },
//     { component: <SiJavascript className="text-7xl text-yellow-500" />, id: 3 },
//     { component: <RiTailwindCssFill className="text-7xl text-blue-500" />, id: 4 },
//     { component: <FaBootstrap className="text-7xl text-purple-500" />, id: 5 },
//     { component: <IoLogoVue className="text-7xl text-green-500" />, id: 6 },
//     { component: <FaReact className="text-7xl text-blue-500" />, id: 7 },
//   ];

//   return (
//     <div className="border-b border-neutral-800 pb-24">
//       <h1 className="my-20 text-center text-4xl font-bold">Technologies</h1>
//       <div className="flex flex-wrap items-center justify-center gap-8">
//         {icons.map((icon, i) => (
//           <motion.div
//             key={icon.id}
//             className="rounded-2xl border-4 border-neutral-800 p-6 cursor-pointer"
//             initial={{ opacity: 0, y: 50, rotate: -15 }}
//             whileInView={{ opacity: 1, y: 0, rotate: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               type: "spring",
//               stiffness: 120,
//               damping: 12,
//               delay: i * 0.15,
//             }}
//             whileHover={{
//               scale: 1.3,
//               rotate: [0, 10, -10, 5, 0], // wiggle on hover
//               transition: { duration: 0.6, ease: "easeInOut" },
//             }}
//             animate={{
//               y: [0, -10, 0], // floating effect
//               rotate: [0, 5, 0], // slow rotate wiggle
//             }}
//             transition={{
//               y: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
//               rotate: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
//             }}
//           >
//             {icon.component}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

