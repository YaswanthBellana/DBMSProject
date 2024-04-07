import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useNavigate();
  
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
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        history.push("/home");
      }
    } catch (error) {
      console.error("Error submitting login data:", error);
    }
  };
  
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
