import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import TodosLIst from "../components/TodosLIst";
import Buttons from "../components/Buttons";

const Home = () => {
  const { isLogin } = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const getTodo = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/todo", {
        headers: {
          "Content-Type": "application/json",
        },
        params: { userId },
      });
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  const createTodo = useCallback(async () => {
    try {
      await axios
        .post(
          "http://localhost:4000/api/todo/add",
          { text, userId },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          setTodos([...todos], response.data);
          setText("");
          getTodo();
        });
    } catch (error) {
      console.log(error);
    }
  }, [text, userId, todos, getTodo]);

  return (
    <div className="w-[80%] mx-auto ">
      {isLogin ? (
        <div>
          <h1 className="pb-5 text-2xl text-center text-black mt-10">
            Gotta do
          </h1>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-row">
                <TextField
                  onChange={(e) => setText(e.target.value)}
                  sx={{ width: "100%" }}
                  name="input"
                  label="task"
                  variant="filled"
                  value={text}
                />
                {text.length < 5 ? (
                  <Button
                    color="secondary"
                    sx={{ padding: "0px 35px 0px 35px" }}
                    variant="contained"
                    onClick={() =>
                      alert("The task has to be at least 5 digits")
                    }
                  >
                    Type
                  </Button>
                ) : (
                  <Button
                    onClick={createTodo}
                    color="success"
                    sx={{ padding: "0px 35px 0px 35px" }}
                    variant="contained"
                  >
                    Add
                  </Button>
                )}
              </div>
            </form>

            <h3 className="py-3">Active tasks:</h3>
            {todos.map((todo, index) => {
              return (
                <div key={index} className="my-4">
                  <div
                    className=" flex flex-col lg:flex-row justify-between
                   hover:bg-slate-100 px-5 border-l-[1px] border-red-500 items-baseline"
                  >
                    <span className="flex items-baseline">
                      {index + 1}.<TodosLIst task={todo.text} />
                    </span>
                    <Buttons />
                  </div>
                </div>
              );
            })}
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
