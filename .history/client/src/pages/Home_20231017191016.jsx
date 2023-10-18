import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GradeIcon from "@mui/icons-material/Grade";
import DeleteIcon from "@mui/icons-material/Delete";

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
                />
                <Button
                  color="success"
                  sx={{ padding: "0px 35px 0px 35px" }}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </form>

            <h3 className="py-3">Active tasks:</h3>
            <div className="flex justify-spacebetween items-center">
              <p>1 </p>
              <div>tasks</div>
              <div>
                <Button>
                  <CheckCircleOutlineIcon />
                </Button>
                <Button>
                  <GradeIcon />
                </Button>
                <Button>
                  <DeleteIcon />
                </Button>
              </div>
            </div>
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
