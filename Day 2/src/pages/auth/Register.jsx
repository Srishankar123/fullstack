import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); // Initializing navigate function from useNavigate hook

  // State variables for each input field
  const [adminUser, setAdminUser] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleRegistration = () => {
    // Check if any field is empty
    if (!adminUser || !email || !username || !mobileNumber || !password || !confirmPassword) {
      console.log("alert");
      alert('Please fill in all fields.');
      return;
    }
  
    // Additional validation checks can be added here
  
    // Proceed with registration if all fields are filled
    // For demonstration purposes, navigate to the login page
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex bg-white">
      <div className="w-35% h-full">
        <img className="w-full h-full bg-contain" src='https://img.freepik.com/free-photo/group-screaming-friends-celebrating-birthday_23-2147720368.jpg?size=626&ext=jpg&ga=GA1.1.69025442.1710477098&semt=ais' alt="Sample image" />
      </div>
      <div className="w-1/2 h-full ">
        <div className="font-serif text-black mt-5 ml-16">
          <h1 className="font-bold text-5xl">Register</h1>
          <p className="font-medium">Register to do your bookings seamlessly...</p>
        </div>
        <div className="flex flex-col h-1/3 justify-around items-center text-black padding ">
          <div className="mt-80"></div>
          <input 
            placeholder="Admin/User" 
            className="mt-20 pr-28 pb-5 bg-transparent border-b border-black outline-none focus:outline-none " 
            type='text'
            value={adminUser}
            onChange={(e) => setAdminUser(e.target.value)}
          />
          <div className="mt-37"></div>
          <input 
            placeholder="Email" 
            className="pr- 36 mt-9 pr-28 pb-5 bg-transparent border-b border-black outline-none focus:outline-none " 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-37"></div>
          <input 
            placeholder="Username" 
            className="pr- 36 mt-9 pr-28 pb-5 bg-transparent border-b border-black outline-none focus:outline-none " 
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="mt-37"></div>
          <input 
            placeholder="Mobile number" 
            className="pr- 36 mt-9 pr-28 pb-5 bg-transparent border-b border-black outline-none focus:outline-none " 
            type='number'
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <input 
            placeholder="Password" 
            className="bg-transparent border-b border-black outline-none focus:outline-none mt-10 pr-28 pb-5  " 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            placeholder="Confirm Password" 
            className="bg-transparent border-b border-black outline-none focus:outline-none mt-10 pr-28 pb-5  " 
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="pl-32 pt-3">
            <a href="/" className="text-black">Already have an account ?</a>
          </p>
          <button onClick={handleRegistration} className=" text-white mt-5 w-44 bg-black rounded-full px-4 py-2" disabled={!adminUser || !email || !username || !mobileNumber || !password || !confirmPassword}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
