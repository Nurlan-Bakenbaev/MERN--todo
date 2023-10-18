import { Link } from "react-router-dom";

const Home = ({ isLogin }) => {
  return (
    <div>
      {isLogin ? (
        <h1 className="text-4xl text-black mt-10">Hello Home Page</h1>
      ) : (
        <h1 className="text-2xl text-black mt-10">
          Please <Link className="" to="/login">Log In</Link>
        </h1>
      )}
    </div>
  );
};

export default Home;
