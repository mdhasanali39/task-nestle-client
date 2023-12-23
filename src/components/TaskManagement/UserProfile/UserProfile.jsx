import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="flex gap-4 justify-center items-center min-h-[90vh]">

        <div className="w-[80px] h-[80px]">
          <img
            className="w-full rounded-full"
            src={user?.photoURL}
            alt="my photo"
          />
        </div>
        <div className="border-r-4 border-r-action-text pr-4">
          <h3 className="text-lg font-semibold ">
            Name: <span className="font-normal">{user?.displayName}</span>
          </h3>
          <h5 className="text-lg font-semibold ">
            Email: <span className="font-normal">{user?.email}</span>
          </h5>
          <p className="font-semibold">Account creation date: </p>
        </div>
    </div>
  );
};

export default UserProfile;
