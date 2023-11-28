import axios from "axios";
const api_uri="http://localhost:3002";

  export const UserCart= async(data)=>
{
     try{
        const {data : Existingdata } = await axios.get(`${api_uri}/Cart`);
        const newid= (Math.max(...Existingdata.map(user => user.id)) +1,0);
        const newData=
        {
            ...data,
            id: newid
        }
        console.log(data);
        await axios.post(`${api_uri}/Cart`,newData)
     }
     catch(e){
        console.error(e);
     }
}