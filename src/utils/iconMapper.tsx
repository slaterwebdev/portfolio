import "devicon/devicon.min.css";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const iconMapper: { [key: string]: JSX.Element } = {
  github: <i className="devicon-github-original colored"></i>,
  linkedin: <FaLinkedin size={24} />,
  default: <HiOutlineQuestionMarkCircle size={24} className="text-gray-500" />,
};

export const getIcon = (key: string): JSX.Element => iconMapper[key] || iconMapper.default;
