import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Home = ({ isLogin }) => {
  return (
    <div className="w-[70%] mx-auto ">
      {isLogin ? (
        <div>
          <h1 className="pb-5 text-2xl text-center text-black mt-10">
            Gotta do
          </h1>
          <div>
            <form className="">
              <div className="flex flex-row">
                <TextField
                  sx={{ width: "100%" }}
                  name="input"
                  label="tasks"
                  variant="filled"
                /> <Button sx={{padding:"20px 20px 20px 20px"}} variant="contained">Add</Button>
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
