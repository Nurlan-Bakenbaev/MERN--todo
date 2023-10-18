import { Link } from "react-router-dom";

const Home = (is) => {
  return (
    <div>
      <h1 className="text-4xl text-black mt-10">
        Please <Link to={"/login"}>LogIn</Link>
      </h1>
    </div>
  );
};

export default Home;
