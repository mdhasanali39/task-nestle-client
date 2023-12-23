import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-6 px-4">
      {/* footer top  */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 border-b border-t py-6">
        {/* logo box */}
        <div>
          {/* logo  */}
        <div>
          <Link to={"/"}>
            <img
              className=""
              src="https://i.ibb.co/9chccqw/1.png"
              alt="task nestle logo"
            />
          </Link>
          <h3 className="mt-3">Elevate your productivity with TaskNestle. Effortless task management for streamlined success. Simplify, organize, and achieve more. Start today!</h3>
        </div>
        </div>
        {/* terms */}
        <div>
          <h2 className="text-lg text-gray-600 font-bold">Terms</h2>
          <ul className="space-y-2 mt-2">
            <li className="text-lg font-medium text-gray-600">
              <a href="#" className="hover:underline hover:text-action-text">
                Privacy Policy
              </a>
            </li>
            <li className="text-lg font-medium text-gray-600">
              <a href="#" className="hover:underline hover:text-action-text">
                Terms and Conditions
              </a>
            </li>
            <li className="text-lg font-medium text-gray-600">
              <a href="#" className="hover:underline hover:text-action-text">
                Copyright Policy
              </a>
            </li>
            <li className="text-lg font-medium text-gray-600">
              <a href="#" className="hover:underline hover:text-action-text">
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>
        {/* contact info */}
        <div className="text-gray-600">
          <h2 className="text-lg  font-bold">Contact Info</h2>
          <div className="space-y-2 mt-2">
            <address className="text-lg">1571 Weekley Street . USA</address>
            <p className="flex items-center gap-2 text-lg">
              <span>
                <FaEnvelope className="text-action-text" />
              </span>
              contact@fitpulsehub.com
            </p>
            <p className="flex items-center gap-2 text-lg">
              <span>
                <FaPhone className="text-action-text" />
              </span>
              +1 123-123-1234
            </p>
          </div>
        </div>
        {/* social links */}
        <div>
          <h2 className="text-lg text-gray-600 font-bold">Social Links</h2>
          <div className="flex gap-2 mt-2 text-gray-600">
            <span className="text-2xl border rounded-full p-2 hover:bg-action-bg transition ease-linear duration-300 hover:text-white">
              <FaFacebookF />
            </span>
            <span className="text-2xl border rounded-full p-2 hover:bg-action-bg transition ease-linear duration-300 hover:text-white">
              <FaTwitter />
            </span>
            <span className="text-2xl border rounded-full p-2 hover:bg-action-bg transition ease-linear duration-300 hover:text-white">
              <FaYoutube />
            </span>
            <span className="text-2xl border rounded-full p-2 hover:bg-action-bg transition ease-linear duration-300 hover:text-white">
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
      {/* footer bottom  */}
      <div className="flex gap-6 flex-wrap items-center justify-center text-lg pt-8 ">
        
        {/* Copyright text  */}
        <p>
          &copy;
          <a
            href="#"
            className="hover:underline text-lg mr-[2apx] font-medium text-gray-600"
          >
            TaskNestle.com
          </a>
          | 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
