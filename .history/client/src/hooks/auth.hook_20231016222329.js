import { useState, useEffect } from "react";
export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const login = (jwtToken, id) => {
    setToken(jwtToken);
    setToken(id)
    localStorage.setItem("userdata"JSON.stringify({
        user
    }))
  };
};
