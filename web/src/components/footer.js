import { Link } from "gatsby";
import React from "react";

const Footer = ({ siteTitle }) => (
  <footer className="bg-white">
    <div className="container mx-auto  px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6">
          <a
            className="text-blue-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            {siteTitle}
          </a>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Social</p>
          <ul className="list-reset mb-6">
          <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.facebook.com/Erin-Jerri-Pangilinan-858938651110777"
                className="no-underline hover:underline text-gray-800 hover:text-blue-500"
              >
                Facebook
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com/erinjerri"
                className="no-underline hover:underline text-gray-800 hover:text-blue-500"
              >
                Twitter
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.linkedin.com/in/erinjerri/"
                className="no-underline hover:underline text-gray-800 hover:text-blue-500"
              >
                Linkedin
              </a>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.github.com/erinjerri/"
                className="no-underline hover:underline text-gray-800 hover:text-blue-500"
              >
                GitHub
              </a>
            </li>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Watch</p>
          <ul className="list-reset mb-6">
          <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="http://twitch.tv/erinjerri"
                className="no-underline hover:underline text-gray-800 hover:text-blue-500"
              >
                Twitch
              </a>
            </li>
            </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Read</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/blog"
                className="no-underline hover:underline text-gray-800 hover:text-blue-500"
              >
                Blog
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="mailto:erin@erinjerri.com"
                className="no-underline hover:underline text-gray-800 hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
