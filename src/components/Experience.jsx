// import{EXPERIENCES} from "../Constants";

// import React from "react";

// const Experience = () => {
//   return (
//     <div>
//       <div className="border-b border-neutral-800 pb-24">
//         <div className="my-20 text-center text-4xl">Experience</div>
//         <div>
//             {EXPERIENCES.map((experience, index) => (
//                 <diV key={index} className="mb-8 flex flex-wrap lg:justify-center">
//                     <div className="w-full lg:w-1/4">
//                     <p className="mb-2 text-sm text-neutral-400 " key={experience.year}></p>
//                     </div>
//                     <div className="w-full max-w-xl  lg:w-3/4">
//                         <h6 className="mb-2 font-semibold" key={experience.role}>-{""}
//                           <span className="text-sm bg-purple-100"key={experience.company}></span>
//                         </h6>
//                         <p className="font-light" key={experience.description}></p>
//                     </div>
//                 </diV>
//             ))}
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Experience;
import { EXPERIENCES } from "../Constants";
import React from "react";

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          /* Fixed: changed <diV> to <div> */
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            
            {/* Left Side: Year/Timeline */}
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </div>

            {/* Right Side: Role & Description */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              
              <p className="mb-4 text-neutral-400 font-light">
                {experience.description}
              </p>

              {/* Mapping technologies if they exist in your Constants file */}
              {experience.technologies?.map((tech, index) => (
                <span 
                  key={index} 
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;