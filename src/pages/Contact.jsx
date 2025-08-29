// Contact.jsx
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
export default function Contact() {
  return (
    <section className="p-8 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <div className="max-w-xl mx-auto py-5 px-6 gap-5 text-center">
        <p className="mb-4 text-lg">
          I'm always open to collaboration, feedback, or just a friendly chat
          about code. Reach out through any of the platforms below!
        </p>
        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:sunkarasaitejaprasad@gmail.com"
            className="text-blue-400 hover:underline"
          >
            📧sunkarasaitejaprasad@gmail.com
          </a>
          <a
            href="https://github.com/saitejaprasad"
            className="text-blue-400 hover:underline"
          >
            🐙 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sai-teja-prasad-sunkara-557268164/"
            className="text-blue-400 hover:underline"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
      <div className=" py-30 w-full bg-white  ">
        <h3 className="text-xl justify-center text-center text-blue-500 bg-white font-semibold mb-4">
          Get in Touch
        </h3>
        <div className="flex justify-center gap-6 text-2xl text-black">
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
            href="https://www.instagram.com/tej_sunkaraa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://discord.com/saiteja044034/"
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
