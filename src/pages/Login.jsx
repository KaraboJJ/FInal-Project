import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded">
        <h1 className="text-2xl mb-4">Login to Streamflix</h1>
        <input type="email" placeholder="Email" className="w-full p-2 mb-2" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4" onChange={e => setPassword(e.target.value)} />
        <button className="bg-red-600 w-full py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
