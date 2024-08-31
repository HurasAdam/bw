import axios from "axios";

const getAllTags= async()=>{
    const config={
        withCredentials:true
    }
    const {data}= await axios.get("http://localhost:8000/api/tags/"
    ,config);
    return data;
};

export const tagsApi={
    getAllTags
}