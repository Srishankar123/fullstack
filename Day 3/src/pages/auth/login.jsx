import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/images/logo.png'

const Login = () => {
  const navigate = useNavigate(); // Initializing navigate function from useNavigate hook

  // State to track user authentication status
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login
  const handleLogin = () => {
    // Hardcoded username and password
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      setAuthenticated(true);
      navigate("/user/home"); // Navigate to the home page upon successful authentication
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  if (authenticated) {
    return (
      <div className="w-screen h-screen flex bg-white">
        <p>User is already authenticated. You can render your main application content here.</p>
      </div>
    );
  }

  // If user is not authenticated, render login form
  return (
    <div className="w-screen h-screen flex bg-white">
      <div className="w-35% h-full">
        <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/portrait-young-girls-party-with-balloons_23-2148905133.jpg?w=740&t=st=1710479523~exp=1710480123~hmac=ea5aa52fbc8e92a4238b8c9d475a91414717feba3084bfb6cfc5760ea9002f48" alt="Sample image" />
      </div>
      <div className="w-1/2 h-full flex flex-col  items-center">
        <img src={Logo} alt="Logo" className="mt-9 " />
        <div className="font-serif text-black  ml-16 justify-center items-center  ">
          <h1 className="font-bold text-5xl mr-96 ">LOGIN</h1>
          <p className="font-medium mb-9">Login to do your booking seamlessly...</p>
        </div>
        <div className="flex flex-col justify-around items-center text-black padding">
          <input  
            placeholder="Username" 
            className="mt-9 pr-28 pb-5 bg-transparent border-b border-black outline-none focus:outline-none" 
            type='text' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input  
            placeholder="Password" 
            className="bg-transparent border-b border-black outline-none focus:outline-none mt-10 pr-28 pb-5" 
            type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="pl-32 pt-3"><a href="/forgotpass" className="text-black">Forgot Your password ?</a></p>
          <button onClick={handleLogin} className="text-white mt-5 w-44 bg-black rounded-full px-4 py-2 ">Sign In</button>
          <p className="pl-22 pt-3"><a href="/reg" className="text-black">Don't have an account ? Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
