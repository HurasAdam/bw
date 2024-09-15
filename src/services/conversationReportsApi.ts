import axios from "axios";

// const getAllTopics= async()=>{
//     const config={
//         withCredentials:true
//     }
//     const {data}= await axios.get("http://localhost:8000/api/conversation-topics"
//     ,config);
//     return data;
// };

const addConversationReport= async({formData})=>{
    const {topic,note} = formData;

    const config={
        withCredentials:true
    }
    const {data}= await axios.post("http://localhost:8000/api/conversation-report/add",{topicId:topic.value, note},config);
    return data;
};

// const updateConversationTopic= async({formData})=>{

//     const {tagId,name,shortname} = formData;
  
//     const config={
//         withCredentials:true
//     }
//     const {data}= await axios.put(`http://localhost:8000/api/tags/edit/${tagId}`,{name,shortname},config);
//     return data;
// };

export const conversationsReportsApi={
   
    addConversationReport,
   
}