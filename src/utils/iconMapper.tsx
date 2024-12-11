import "devicon/devicon.min.css";
import { FaLaptop, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { HiDocumentText, HiOutlineQuestionMarkCircle } from "react-icons/hi";

const iconMapper: { [key: string]: JSX.Element } = {
  github: <i className="devicon-github-original colored"></i>,

  laptop: <FaLaptop size={24} />,
  phone: <FaPhone className="text-primary" />,
  email: <FaMailBulk className="text-primary" />,
  cv: <HiDocumentText size={20} />,
  linkedin: <FaLinkedin size={24} />,
  default: <HiOutlineQuestionMarkCircle size={24} className="text-gray-500" />,
};

export const getIcon = (key: string): JSX.Element => iconMapper[key] || iconMapper.default;
