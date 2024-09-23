import axios from "axios";

const getAllTags= async()=>{
    const config={
        withCredentials:true
    }
    const {data}= await axios.get("http://localhost:8000/api/tags"
    ,config);
    return data;
};

const createTag= async({formData})=>{
    const config={
        withCredentials:true
    }
    const {data}= await axios.post("http://localhost:8000/api/tags/create",formData,config);
    return data;
};

const updateTag= async({formData})=>{

    const {tagId,name,shortname} = formData;
  
    const config={
        withCredentials:true
    }
    const {data}= await axios.put(`http://localhost:8000/api/tags/edit/${tagId}`,{name,shortname},config);
    return data;
};

const deleteTag= async({formData})=>{
    const config={
        withCredentials:true
    }



    const {data}= await axios.delete(`http://localhost:8000/api/tags/delete/${formData}`,config);
    return data;
};

export const tagsApi={
    getAllTags,
    createTag,
    updateTag,
    deleteTag
}