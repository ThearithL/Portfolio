// import React from "react";
// import { PROJECTS } from "../Constants";


// export default function Project() {
//   return (
//     <div>
//       <div className="border-b border-neutral-900 pb-4">
//         <h1 className="my-20 text-center text-4xl">Project</h1>
//         <div>
//           {PROJECTS.map((project, index) => (
//             <diV key={index} className="mb-8 flex flex-wrap lg:justify-center">
//               <div className="w-full  lg:w-1/4">
//                 <img
//                   src="project.image|project.title"
//                   alt=""
//                   width={150}
//                   height={150}
//                   className="mb-6 rounded"
//                 />
//               </div>
//               <div className="w-full max-w-xl lg:w-1/4">
//                 <h6 className="mb-2 font-semibold" key={project.title}></h6>
//                 <p className="mb-4 text-neutral-400 font-light" key={project.description}></p>
//                 {PROJECTS.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </diV>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import { PROJECTS } from "../Constants";

// export default function Project() {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <h1 className="my-20 text-center text-4xl">Projects</h1>
//       <div>
//         {PROJECTS.map((project, index) => (
//           // Fixed: changed 'diV' to 'div'
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <div className="w-full lg:w-1/4">
//               <img
//                 // Fixed: Corrected template literal syntax for the src
//                 src={project.image}
//                 alt={project.title}
//                 width={150}
//                 height={150}
//                 className="mb-6 rounded"
//               />
//             </div>
//             <div className="w-full max-w-xl lg:w-3/4">
//               {/* Fixed: Added the content inside the tags */}
//               <h6 className="mb-2 font-semibold">{project.title}</h6>
//               <p className="mb-4 text-neutral-400 font-light">
//                 {project.description}
//               </p>
              
//               {/* Fixed: map over 'project.technologies', not 'PROJECTS.technologies' */}
//               <div className="flex flex-wrap">
//                 {project.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React from "react";
import { PROJECTS } from "../Constants";
import "../public/images/Project1.png";
import "../public/images/Project2.png";
import "../public/images/Project3.png";
import "../public/images/Project4.png";
export default function Project() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

            {/* Image */}
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>

            {/* Content */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {project.title}
              </h6>

              <p className="mb-4 text-neutral-400 font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}