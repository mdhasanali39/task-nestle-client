import { Link } from "react-router-dom";
import BannerAbout from "./BannerAbout/BannerAbout";

const About = () => {
  return (
    <div >
      <div
        className="flex min-h-[50vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/t3jhjCz/close-up-keyboard-glasses-with-executives-background.jpg",
        }}
      >
        <div className="flex text-center w-full justify-center items-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold">Welcome to About page</h1>
            <div className="text-center py-4">
              <Link to="/manage-tasks/your-tasks">
              <button
                type="submit"
                className="text-lg text-white font-semibold px-7 py-2 rounded-lg bg-action-bg border hover:bg-white hover:text-black hover:border-action-text transition ease-linear duration-300"
              >
                Create Task
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-6 md:flex-row-reverse my-20 px-20">
        <div className="flex-1 hidden md:block">
          <BannerAbout />
        </div>
        <div className="about-container flex-1">
          <h1 className="text-xl font-bold">About Our Task Management App</h1>
          <p>
            Welcome to our task management website! We are passionate about
            helping you stay organized and productive. Our user-friendly
            interface and powerful features make managing your tasks a breeze.
          </p>
          <p>
            At TaskNestle, we believe in simplicity and efficiency. Our
            goal is to provide you with a seamless experience to enhance your
            productivity and achieve your goals.
          </p>
          <h2 className="text-xl font-bold">Key Features</h2>
          <ul>
            <li>Intuitive task creation and management</li>
            <li>Color-coded categories for easy organization</li>
            <li>Collaborate with team members on shared tasks</li>
            <li>Customizable settings to suit your workflow</li>
          </ul>
          <h2 className="text-xl font-bold">Our Mission</h2>
          <p>
            Our mission is to empower individuals and teams to accomplish more.
            We understand the challenges of modern life, and we strive to
            provide tools that simplify task management, reduce stress, and
            promote overall well-being.
          </p>
          <div className="contact-info">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>
              Have questions or feedback? We'd love to hear from you! Reach out
              to us at{" "}
              <a href="mailto:example@tasknestle.com">example@tasknestle.com</a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
