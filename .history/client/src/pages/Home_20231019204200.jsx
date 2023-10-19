import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
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
      const response = await axios.get(
        "https://todo-server-api.onrender.com/api/todo",
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: { userId },
        }
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  const createTodo = useCallback(async () => {
    try {
      await axios
        .post(
          "https://todo-server-api.onrender.com/api/todo/add",
          { text, userId },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          setTodos((prevTodos) => [...prevTodos, response.data]);
          getTodo();
          setText("");
        });
    } catch (error) {
      console.log(error);
    }
  }, [text, userId, getTodo]);

  const deleteOne = useCallback(
    async (id) => {
      try {
        await axios
          .delete(
            `https://todo-server-api.onrender.com/api/todo/delete/${id}`,
            { id },
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then(() => getTodo());
      } catch (error) {
        console.log(error);
      }
    },
    [getTodo]
  );
  const completedTodo = useCallback(
    async (id) => {
      try {
        await axios
          .put(
            `https://todo-server-api.onrender.com/api/todo/completed/${id}`,
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((response) => {
            setTodos((prevTodos) => [...prevTodos, response.data]);
            getTodo();
          });
      } catch (error) {
        console.log(error);
      }
    },
    [getTodo]
  );
  const importantTodo = useCallback(
    async (id) => {
      try {
        await axios
          .put(
            `https://todo-server-api.onrender.com/api/todo/important/${id}`,
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((response) => {
            setTodos((prevTodos) => [...prevTodos, response.data]);
            getTodo();
          });
      } catch (error) {
        console.log(error);
      }
    },
    [getTodo]
  );
  useEffect(() => {
    getTodo();
  }, [todos, getTodo]);
  return (
    <div className="w-[80%] mx-auto ">
      {isLogin ? (
        <div>
          <h1 className="pb-5 text-2xl text-center text-black mt-10">
            Wanna do something ?
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
                    type="submit"
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
                    className={` ${todo.important && "bg-blue-100"} ${
                      todo.completed && "bg-red-200 opacity-[0.7] relative "
                    } rounded-lg flex flex-col lg:flex-row justify-between
                 hover:bg-blue-200 px-5 border-l-[2px] border-blue-600 items-baseline `}
                  >
                    {todo.completed && (
                      <span className="absolute z-10 top-[30%] left-[10%] text-red-500 text-3xl">
                        Completed
                      </span>
                    )}
                    <span className="relative flex gap-2 items-baseline">
                      {index + 1}.<TodosLIst task={todo.text} />
                    </span>
                    <Buttons
                      itemId={todo._id}
                      completed={completedTodo}
                      onClick={deleteOne}
                      important={importantTodo}
                    />
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
