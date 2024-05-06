import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.escuelajs.co/api/v1/users`;
      const response = await fetch(url);
      const resJson = await response.json();
      setUser(resJson);
    };
    fetchApi();
  }, []);

  



  return (
    <div className="App">
      <Navbar user={user}/>
    </div>
  );
}

export default App;
