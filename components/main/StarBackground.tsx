// "use client";

// import React, { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// // @ts-ignore
// import * as random from "maath/random/dist/maath-random.esm";

// const StarBackground = (props: any) => {
//   const ref: any = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5000), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta/10;
//     ref.current.rotation.y -= delta/15;
//   })


//   return (
//     <group rotation={[0,0, Math.PI / 4]}>
//         <Points
//         ref={ref}
//         positions={sphere}
//         stride={3}
//         frustumCulled
//         {...props}
//         >
//             <PointMaterial
//                 transparent
//                 color="$fff"
//                 size={0.002}
//                 sizeAttenuation={true}
//                 dethWrite={false}
//             />
//         </Points>
//     </group>
//   )
// };

// const StarsCanvas = () => (
//     <div className="w-full h-auto fixed inset-0 z-[20]">
//         <Canvas camera={{position: [0, 0, 1]}}>
//         <Suspense fallback={null}>
//             <StarBackground />
//         </Suspense>
//         </Canvas>
//     </div>
// )

// export default StarsCanvas;





"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Think better with Next js 13
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
