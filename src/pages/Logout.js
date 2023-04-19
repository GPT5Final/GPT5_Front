// Logout.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("login");
    navigate("/");
  }, [navigate]);

  return null;
}

export default Logout;
