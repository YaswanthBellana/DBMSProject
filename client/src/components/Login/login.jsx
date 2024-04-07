import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const Navigate = useNavigate("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      const d = await response.json();
      const data = d.token;
      console.log(data);
      if (!isNaN(d.status === 200)) {
        localStorage.setItem("jwt_token", data)
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error submitting login data:", error);
    }
  };

  if(localStorage.getItem("jwt_token") == undefined){
    return <Navigate to="/"/>
  }
  
  return (
    <div className="custom-login-container">
      <div className="custom-login-form">
        <h2>Welcome to PlanYourTrip</h2>
        <p>Explore the beauty of the earth with us!</p>
        <form onSubmit={handleSubmit}>
          <div className="custom-inputField">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="custom-inputField">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="custom-inputField">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="custom-loginBtn">
            Login
          </button>
          <div className="custom-links">
            <Link to="/signup">Sign up</Link>
            <Link to="/forget_password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
