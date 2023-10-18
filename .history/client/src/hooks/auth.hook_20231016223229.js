import { useState, useEffect } from "react";
export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const login = (jwtToken, id) => {
    setToken(jwtToken);
    setToken(id);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
  };
  const logOut = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if(data && data.token){
        login.
    }
  });
};
