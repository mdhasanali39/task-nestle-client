import { Outlet } from "react-router-dom";
import Sidebar from "../components/TaskManagement/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const TaskManagementLayout = () => {
  const [isMedium, setIsMedium] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfMedium = () => {
      if (window.innerWidth <= 768) {
        setIsMedium(true);
      } else {
        setIsMedium(false);
      }
    };

    // initial call
    checkIfMedium();
    // call if window is resized
    window.addEventListener("resize", checkIfMedium);
    // console.log(window.innerWidth);
    return () => {
      window.removeEventListener("resize", checkIfMedium);
    };
  }, [setIsMedium]);

  return (
    <div className="flex">
      {/* sidebar  */}
      <>
        <div
          className={`flex-1 fixed z-[500] w-1/2 ${
            isMenuOpen ? "w-1/2 opacity-100" : "w-[40px] opacity-0"
          } md:opacity-100 md:w-1/4 transition ease-in duration-300`}
        >
          {<Sidebar />}
        </div>
        {isMedium && (
          <div className={`absolute z-[600] top-1 ${isMenuOpen ? "right-3":"left-3"}`}>
            {isMenuOpen ? (
              <IoClose onClick={() => setIsMenuOpen(false)} size={26} />
            ) : (
              <GiHamburgerMenu onClick={() => setIsMenuOpen(true)} size={24} />
            )}
          </div>
        )}
      </>
      <div className="flex-[3] p-5 md:ml-[27%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default TaskManagementLayout;
