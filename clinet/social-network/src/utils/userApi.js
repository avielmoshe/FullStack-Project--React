import axios from "axios"

export const signUp = async(userInput , emailInput)=>{
    const api_url = `http://locallhost:3000/api/user/signup`
    try {
        const response= await axios.post(api_url,{
            user:`${userInput}`,
            email:`${emailInput}`,
        });
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}
export const signIn = async(userInput , emailInput)=>{
    const api_url = `http://locallhost:3000/api/user/signIn`
    try {
        const response= await axios.post(api_url,{
            user:`${userInput}`,
            email:`${emailInput}`,
        });
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}