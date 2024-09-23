import axios from "axios";

const getAllTopics= async()=>{
    const config={
        withCredentials:true
    }
    const {data}= await axios.get("http://localhost:8000/api/conversation-topics"
    ,config);
    return data;
};

const createConversationTopic= async({formData})=>{
    const config={
        withCredentials:true
    }
    const {data}= await axios.post("http://localhost:8000/api/conversation-topics/create",formData,config);
    return data;
};

const updateConversationTopic= async({formData})=>{

    const {tagId,name,shortname} = formData;
  
    const config={
        withCredentials:true
    }
    const {data}= await axios.put(`http://localhost:8000/api/tags/edit/${tagId}`,{name,shortname},config);
    return data;
};

const deleteConversationTopic= async({formData})=>{


  
    const config={
        withCredentials:true
    }
    const {data}= await axios.delete(`http://localhost:8000/api/conversation-topics/delete/${formData}`,config);
    return data;
};

export const conversationsTopicsApi={
    getAllTopics,
    createConversationTopic,
    updateConversationTopic,
    deleteConversationTopic
}