import React from "react";
import { ABOUT_TEXT, HERO_CONTENT } from "../Constants";

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl  text-white">
              THEARITH
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ml-4">
              Frontend Developer
            </span>
            <p className="my-4 ml-6 max-w-2xl py-2 font-light tracking-tight text-white">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src="../public/image/Profile.png"
              alt=""
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../Constants";


export default function Hero() {
  const roles = ["Frontend Developer","React Developer","Web Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
      } else {
        setText(current.substring(0, text.length - 1));
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, roles]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 animate={{x: 100}} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white">
              THEARITH
            </motion.h1>

            {/* Typing Text */}
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ml-4">
              {text}
              <span className="cursor">|</span>
            </span>

            <p className="my-4 ml-6 max-w-2xl py-2 font-light tracking-tight text-white">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src="/image/Profile.png"
              alt="Profile"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { HERO_CONTENT } from "../Constants";

// export default function Hero() {
//   const roles = ["Frontend Developer", "React Developer", "Web Developer"];

//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const current = roles[index];
//     const typingSpeed = isDeleting ? 50 : 100;

//     const timer = setTimeout(() => {
//       if (isDeleting) {
//         setText(current.substring(0, text.length - 1));
//       } else {
//         setText(current.substring(0, text.length + 1));
//       }

//       // When word is fully typed
//       if (!isDeleting && text === current) {
//         setTimeout(() => setIsDeleting(true), 1000);
//       }

//       // When word is fully deleted
//       if (isDeleting && text === "") {
//         setIsDeleting(false);
//         setIndex((prev) => (prev + 1) % roles.length);
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timer);
//   }, [text, isDeleting, index]);

//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap">
        
//         {/* Left Section */}
//         <div className="w-full lg:w-1/2">
//           <div className="flex flex-col items-center lg:items-start">

//             {/* Animated Name */}
//             <motion.h1
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white"
//             >
//               THEARITH
//             </motion.h1>

//             {/* Typing Text */}
//             <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ml-4">
//               {text}
//               <span className="animate-pulse">|</span>
//             </span>

//             {/* Description */}
//             <p className="my-4 ml-6 max-w-2xl py-2 font-light tracking-tight text-white">
//               {HERO_CONTENT}
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-1/2 lg:p-8">
//           <div className="flex justify-center">
//             <motion.img
//               src="/image/Profile.png"
//               alt="Profile"
//               className="rounded-2xl object-cover"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1 }}
//             />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

