import { FaHtml5, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiOpenai,
  SiReactrouter,
} from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

export const skills = [
  {
    name: "JavaScript",
    description:
      "Proficient in JavaScript, with a strong understanding of ES6+ features, asynchronous programming, and DOM manipulation. Knowledgeable in MongoDB for NoSQL database management, including schema design and CRUD operations.",
    icon: <SiJavascript className="text-6xl text-[#F0DB4F]" />,
  },
  {
    name: "ReactJS",
    description:
      "Experienced in building dynamic web applications using ReactJS, including component-based architecture, state management with hooks, and integration with RESTful APIs.",
    icon: <IoLogoReact className="text-6xl text-[#61DBFB]" />,
  },
  {
    name: "AI Integration",
    description:
      "Experience integrating AI solutions using APIs like OpenAI to create intelligent, responsive applications that enhance user experiences.",
    icon: <SiOpenai className="text-6xl text-purple-600" />,
  },
  {
    name: "HTML/CSS & Tailwind CSS",
    description:
      "Skilled in HTML5 and CSS3, including responsive design principles, Flexbox, Grid, and frameworks like Tailwind CSS for modern UI development.",
    icon: <SiTailwindcss className="text-6xl text-[#38B2AC]" />,
  },
  {
    name: "Node.js",
    description:
      "Proficient in Node.js for building scalable backend applications and RESTful APIs, integrating with databases like MongoDB and handling server-side logic.",
    icon: <FaNodeJs className="text-6xl text-green-600" />,
  },
  {
    name: "React Native",
    description:
      "Skilled in building cross-platform mobile applications using React Native, with responsive layouts, navigation, and integration with native modules.",
    icon: <TbBrandReactNative className="text-6xl text-[#61DBFB]" />,
  },
];
