import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GradeIcon from "@mui/icons-material/Grade";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
const Home = () => {
  const { isLogin } = useContext(AuthContext);

  const [text,setText]= useState('')
  

  const createTodo = useCallback(async()=>{
    try {
      await axios.post("api/todo/add")
    } catch (error) {
      
    }
  })
  return (
    <div className="w-[70%] mx-auto ">
      {isLogin ? (
        <div>
          <h1 className="pb-5 text-2xl text-center text-black mt-10">
            Gotta do
          </h1>
          <div>
            <form onSubmit={e=>e.preventDefault()} className="">
              <div className="flex flex-row">
                <TextField
                onChange={(e)=> setText(e.target.value)}
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
            <div className="flex justify-between items-center">
              <p className=" font-bold ">1.</p>
              <div className=" font-cursive text-xl ">tasks</div>
              <div className="flex gap-2">
                <Button sx={{ backgroundColor: "lightgray" }}>
                  <CheckCircleOutlineIcon />
                </Button>
                <Button sx={{ backgroundColor: "#ffebb5", color: "orange" }}>
                  <GradeIcon />
                </Button>
                <Button sx={{ backgroundColor: "#ffe5e7", color: "red" }}>
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
