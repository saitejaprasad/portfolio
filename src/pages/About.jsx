// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// export default function About() {
//   const images = [
//     "/assets/photo1.jpg",
//     "/assets/photo2.jpg",
//     "/assets/photo3.jpg",
//   ];

//   return (
//     <section className="p-8 bg-gray-900 text-white min-h-screen">
//       <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
//       <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//         <div>
//           <div className="hover-glow">
//             <Swiper
//               modules={[Navigation]}
//               navigation
//               spaceBetween={20}
//               slidesPerView={1}
//               className="rounded-lg overflow-hidden"
//             >
//               {images.map((src, index) => (
//                 <SwiperSlide key={index}>
//                   <img
//                     src={src}
//                     alt={`SaiTeja ${index + 1}`}
//                     className="w-full h-auto object-cover"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//         <div className="text-lg leading-relaxed">
//           <p className="mb-4">
//             I'm SaiTeja Prasad Sunkara — a web developer who thrives on building
//             elegant, scalable apps with React, Node.js, and Express.
//           </p>
//           <p className="mb-4">
//             I love debugging, mapping logic, and turning ideas into clean code.
//             I’m currently focused on mastering full-stack development and
//             building a portfolio that reflects my passion and precision.
//           </p>
//           <p>
//             Outside of coding, I enjoy learning through mentorship, exploring
//             new frameworks, and refining my personal brand.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// About.jsx
export default function About() {
  return (
    <section className="p-8 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed">
        <p className="mb-4">
          I'm SaiTeja Prasad Sunkara, a hands-on learner and web developer who
          thrives on building real-world applications. I specialize in Node.js,
          Express, and React, and I'm constantly exploring new tools like
          Tailwind and React Router to level up my skills.
        </p>
        <p className="mb-4">
          I love debugging, mapping logic, and turning ideas into functional,
          elegant code. My goal is to create impactful digital experiences and
          build a portfolio that reflects both my technical ability and creative
          mindset.
        </p>
        <p>
          When I'm not coding, I enjoy learning through mentorship,
          experimenting with new frameworks, and refining my personal brand.
        </p>
      </div>
    </section>
  );
}
