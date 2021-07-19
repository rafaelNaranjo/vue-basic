import axios from 'axios';

export async function findAllUsers(page,size){
    const response = await axios.get("http://localhost:8080/users",{
        params:{
            page: page,
            items: size
        }
    });
    return response.data;
}

