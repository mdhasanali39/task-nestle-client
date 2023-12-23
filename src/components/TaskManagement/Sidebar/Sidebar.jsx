import { Link } from "react-router-dom";
import MenuItem from "../MenuItem";
import { FaTasks,FaUser,FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div
        className={`flex flex-col items-center bg-action-bg min-h-screen relative py-4 max-[767px]:pt-8`}
      >
        {/* logo  */}
        <div className={` bg-black-text w-full flex justify-center py-3 mb-8`}>
          <Link to={"/"}>
          <img
          className=""
          src="https://i.ibb.co/r6sCpNx/2.png"
          alt="task nestle logo"
        />
          </Link>
        </div>
        {/* all menus here  */}
        <div className={`w-3/4 mx-auto flex flex-col gap-3 `}>
          <MenuItem label="Your Tasks" address="your-tasks" icon={FaTasks} />
          <MenuItem label="Your Profile" address="user-profile" icon={FaUser} />
          <MenuItem label="Home Page" address="/" icon={FaHome} />
        </div>
        
      </div>
      
    </>
  );
};

export default Sidebar;
