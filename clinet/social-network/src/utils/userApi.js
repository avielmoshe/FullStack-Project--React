import axios from "axios";

const base_url = `http://localhost:3000`;
export const signUp = async (user) => {
  try {
    const response = await axios.post(`${base_url}/api/user/signup`, user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return {
      success: false,
      error: error.response?.data || error.message,
    };
  }
};

export const signIn = async (user) => {
  try {
    const response = await axios.post(`${base_url}/api/user/signIn`, user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return {
      success: false,
      error: error.response?.data || error.message,
    };
  }
};
