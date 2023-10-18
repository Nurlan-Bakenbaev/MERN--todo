import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Home = ({ isLogin }) => {
  return (
    <div className="w-">
      {isLogin ? (
        <div>
          <h1 className="text-2xl text-center text-black mt-10">Gotta do</h1>
          <div >
            <form className="">
              <div className="flex flex-row">
                <TextField sx={{width:"100%"}} id="filled-basic" label="tasks" variant="filled" />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl text-center text-black mt-10">
          Please
          <Link className="text-blue-500 px-1" to="/login">
            Log In
          </Link>
        </h1>
      )}
    </div>
  );
};

export default Home;
