import axios from "axios";

const getMyProfile = async () => {
    const config = {
      withCredentials: true,
    };
  
    const { data } = await axios.get(
      `http://localhost:8000/api/user/me`,
      
      config
    );
    return data;
  };
  
  const getUsers = async () => {
    const config = {
      withCredentials: true,
    };
  
    const { data } = await axios.get(
      `http://localhost:8000/api/user/users`,
      
      config
    );
    return data;
  };



  export const userApi= {
    getMyProfile,
    getUsers
  }