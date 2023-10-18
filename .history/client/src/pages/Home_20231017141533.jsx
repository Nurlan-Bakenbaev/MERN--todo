import { Link } from "react-router-dom";

const Home = ({ isLogi }) => {
  return (
    <div>
      {isLogi ? (
        <h1 className="text-2xl text-center text-black mt-10">The Todo list</h1>
      ) : (
        <h1 className="text-2xl p-1 text-center text-black mt-10">
          Please
          <Link className="text-blue-500" to="/login">
            Log In
          </Link>
        </h1>
      )}
    </div>
  );
};

export default Home;
