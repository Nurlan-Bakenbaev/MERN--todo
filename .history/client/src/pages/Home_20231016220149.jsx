import { Link } from "react-router-dom";

const Home = (isLogin) => {
  return (
    <div>
      <h1 className="text-4xl text-black mt-10">
      Please <Link to={'/login'}>LogIn</Link> to 
      </h1>
    </div>
  );
};

export default Home;
