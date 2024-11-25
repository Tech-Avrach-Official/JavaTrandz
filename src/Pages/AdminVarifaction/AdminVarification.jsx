import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminVarification = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'javatrandz@123' && password === 'javatrandz@123') {
      
      localStorage.setItem('tempData', true); 
      console.log('Login successful!');
      navigate('/');
    } else {
      alert("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('tempData');
    navigate('/');
  }

  return (
    <div>
      <div className='sm:px-[5%] inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808035_1px,transparent_1px),linear-gradient(to_bottom,#80808035_1px,transparent_1px)] bg-[size:25px_25px] shadow-custom-inset'>
        <div className='h-screen w-full flex items-center justify-center flex-col'>
          <div className='flex flex-col items-center w-[30%]'>
            <Input
              className='mt-5'
              placeholder='Enter Username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              className='mt-5'
              placeholder='Enter Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className='mt-5 bg-white text-black w-48 text-base' onClick={handleLogin}>
              Login
            </Button>
            <Button className='mt-5 bg-white text-black w-48 text-base' onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminVarification;