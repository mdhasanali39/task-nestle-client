import { FcBusinessman } from "react-icons/fc";
import { MdBusinessCenter } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { GiGrowth } from "react-icons/gi";

const WhoUsingBenefited = () => {
  return (
    <>
      <div>
        <div>
          <h2 className="text-3xl font-semibold text-center mb-1">
            Who Are Using
          </h2>
          <h2 className="text-4xl font-semibold text-center">
            Who Using <span className="text-action-text">Get Benefited</span>
          </h2>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-20 px-4">
        {/* card 1 */}
        <div className="text-center border px-4 py-8">
          <div className="flex justify-center items-center w-[75px] h-[75px] mx-auto border p-3 rounded-full">
            <FcBusinessman size={70} />
          </div>
          <h2 className="text-xl my-3 font-semibold text-action-text">
            Individual Freelancers
          </h2>
          <p>
            Users: Freelancers who manage various projects and tasks
            independently. Benefits: Helps in organizing and prioritizing tasks,
            setting deadlines, and tracking project progress. A centralized
            platform enhances efficiency and time management.
          </p>
        </div>
        {/* card 2 */}
        <div className="text-center border px-4 py-8">
          <div className="flex justify-center items-center w-[75px] h-[75px] mx-auto border p-3 rounded-full">
            <MdBusinessCenter size={70} />
          </div>
          <h2 className="text-xl my-3 font-semibold text-action-text">
            Individual Freelancers
          </h2>
          <p>
            Users: Freelancers who manage various projects and tasks
            independently. Benefits: Helps in organizing and prioritizing tasks,
            setting deadlines, and tracking project progress. A centralized
            platform enhances efficiency and time management.
          </p>
        </div>
        {/* card 3 */}
        <div className="text-center border px-4 py-8">
          <div className="flex justify-center items-center w-[75px] h-[75px] mx-auto border p-3 rounded-full">
            <MdCastForEducation size={70} />
          </div>
          <h2 className="text-xl my-3 font-semibold text-action-text">
            Students and Educators
          </h2>
          <p>
            Users: Students managing assignments, projects, and study schedules;
            educators organizing course materials and lesson plans. Benefits:
            Aids in time management, assignment tracking, and collaborative
            projects. Keeps students organized and educators on top of their
            teaching responsibilities.
          </p>
        </div>
        {/* card 4 */}
        <div className="text-center border px-4 py-8">
          <div className="flex justify-center items-center w-[75px] h-[75px] mx-auto border p-3 rounded-full">
            <GiGrowth size={70} />
          </div>
          <h2 className="text-xl my-3 font-semibold text-action-text">
            Personal Productivity Enthusiasts
          </h2>
          <p>
            Users: Individuals seeking tools to enhance their personal
            productivity. Benefits: Offers a structured approach to personal
            task management, goal setting, and habit tracking. Encourages a more
            organized and efficient lifestyle.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhoUsingBenefited;
