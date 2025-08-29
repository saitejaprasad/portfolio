import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

export default function Home() {
  const images = [photo1, photo2];

  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 text-center">
      <div className="flow-bg"></div>
      <div className="overflow-hidden">
        <div className="floating-shape top-10 left-10"></div>
        <div className="floating-shape top-40 right-20"></div>

        <h1 className="text-5xl font-extrabold mb-4">Hi, I'm SaiTeja</h1>
        <p className="text-xl mb-6 max-w-xl">
          Web Developer | Node.js Enthusiast | React Craftsman
        </p>
        <div className="floating-shape top-15 left-15"></div>
        <div className="floating-shape top-50 right-40"></div>
        <div className="w-full max-w-md mb-6">
          <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl overflow-hidden shadow-2xl border border-blue-600"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={src}
                    alt={`SaiTeja ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-sm">
                    {`Hi there👋`}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="justify-items-center py-4">
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            View My Work
          </a>
        </div>

        <div className="justify-items-center flex py-7 px-22 flex-row items-center gap-10 mt-8">
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1kEWppf10oJcYttblNq8Y4iGRGkvRGUyJ/view?usp=sharing" // Replace with your actual resume path
            className="flex items-center gap-2 bg-white hover:bg-green-700 text-black font-semibold py-2 px-4 rounded"
          >
            <FaDownload /> Resume
          </a>

          {/* Gmail Button */}
          <a
            href="mailto:hello@saitejaprasadsunkara.com"
            className="flex items-center gap-2 bg-white hover:bg-red-700 text-black font-semibold py-2 px-4 rounded"
          >
            <FaEnvelope /> Gmail Me
          </a>
        </div>
      </div>
      <div className="relative py-7 w-full text-center bg-black  ">
        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
        <div className="flex justify-center gap-6 text-2xl text-white">
          <a
            href="https://www.linkedin.com/in/sai-teja-prasad-sunkara-557268164/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com/@SaiTejaPrasadSunkara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaYoutube />
          </a>
          <a
            href="https://discord.com/saiteja044034"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaInstagram />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </section>
  );
}

// export default function Home() {
//   return (
//     <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 text-center">
//       <h1 className="text-5xl font-bold mb-4">Hi, I'm SaiTeja</h1>
//       <p className="text-xl mb-6 max-w-xl">
//         A passionate web developer focused on building fast, scalable, and
//         elegant web apps using Node.js, Express, and React.
//       </p>
//       <a
//         href="/projects"
//         className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//       >
//         View My Projects
//       </a>
//     </section>
//   );
// }
