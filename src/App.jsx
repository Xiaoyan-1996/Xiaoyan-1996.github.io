import { useState } from "react";
import { publications, projects } from "./data";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import {
  FaUser,
  FaBook,
  FaProjectDiagram,
  FaAddressBook,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import "./App.css";

function SectionTitle({ icon: Icon, children }) {
  return (
    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
      <Icon className="w-6 h-6 text-gray-600" />
      {children}
    </h2>
  );
}

function DropDownMenu({ sections }) {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {sections.map((section) => (
          <li>
            <a href={`/#${section}`}>{section}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavBarMidSection({ sections }) {
  return (
    <ul className="menu menu-horizontal px-1">
      {sections.map((section) => (
        <li>
          <a href={`/#${section}`}>{section}</a>
        </li>
      ))}
    </ul>
  );
}

function NavBar() {
  const sections = ["About", "Projects", "Publications", "Contact"];
  const name = "Xiaoyan Chen";

  return (
    <div className="navbar bg-base-100 text-base-content shadow-sm sticky top-0 z-30">
      <div className="navbar-start">
        <DropDownMenu sections={sections} />
        <a className="btn btn-ghost text-xl">{name}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavBarMidSection sections={sections} />
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

function About() {
  return (
    <section id="About" className="bg-base-100 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left: Profile image */}
        <div className="flex-shrink-0 w-full md:w-1/4">
          <img
            src="/xiaoyan.jpg"
            alt="Profile picture"
            className="mask mask-circle w-64 h-64 object-cover shadow-xl"
          />
        </div>

        {/* Right: Title + intro text */}
        <div className="flex flex-col justify-start w-full md:w-3/4">
          <SectionTitle icon={FaUser}>About</SectionTitle>
          <p className="text-lg leading-relaxed mb-4">
            Hi, I am Xiaoyan Chen, a PhD in Big Data Oceanography. Skilled in
            machine learning, data analysis, and large-scale data processing,
            with extensive research experience in AI applications for ocean
            remote sensing.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://scholar.google.com/citations?hl=en&user=81Q34zIAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600">
              <SiGooglescholar className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/xiaoyan-chen-4942ba387/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Xiaoyan-1996"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="Projects" className="bg-base-200 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle icon={FaProjectDiagram}>Research Projects</SectionTitle>

        <ul className="space-y-6">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectItem({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </div>
      <p className="text-gray-700 mt-1">{project.summary}</p>
      {expanded && <p className="text-gray-600 mt-2">{project.details}</p>}
    </li>
  );
}

function Publications() {
  return (
    <section id="Publications" className="bg-base-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle icon={FaBook}>Publications</SectionTitle>
        <ul className="space-y-6">
          {publications.map((pub, i) => (
            <li key={i} className="leading-relaxed">
              <a
                href={pub.link}
                target="_blank"
                className="text-lg font-medium hover:underline">
                {pub.title}
              </a>
              <div className="text-sm text-gray-600">{pub.authors}</div>
              <div className="text-sm text-gray-500 italic">{pub.venue}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="Contact" className="bg-base-200 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle icon={FaAddressBook}>Contact</SectionTitle>
        <ul className="space-y-6">
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-600 w-5 h-5" />
            <span className="text-lg">Wollaston Road, Cambridge CB1 2EW</span>
          </li>
          <li className="flex items-center gap-3">
            <FaPhone className="text-green-600 w-5 h-5" />
            <a href="tel:+447938414845" className="text-lg hover:underline">
              +44 7938414845
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-red-600 w-5 h-5" />
            <a
              href="mailto:xiaoyanc096@gmail.com"
              className="text-lg hover:underline break-all">
              xiaoyanc096@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Projects />
      <Publications />
      <Contact />
    </>
  );
}

export default App;
