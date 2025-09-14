import axios from 'axios';


export const Getall=async()=>{
    const url="http://localhost:3000/api/task"
    const get=await axios.get(url)
    const result=get.data
    console.log("the result",result)
    return result
}
export const Getspeciftask=async(id:any)=>{
    const url=`http://localhost:3000/api/task/${id}`
    const get=await axios.get(url)
    const result=get.data
    console.log("the result",result)
    return result
}
export const Deleteall=async(id:any)=>{
     const url = `http://localhost:3000/api/task/${id}`;
    const deletetask=await axios.delete(url,{
        headers:{
            Accept:"application/json",
        }
    })
    const result=deletetask.data
    console.log("the result",result)
    return result
}


export const Posttask=async(title : any,description : any,category : any)=>{
     const url = `http://localhost:3000/api/task`;
    
    const Post=await axios.post(url,
          {title,description,category}
        ,
        {
     headers:{
        Accept:"application/json",
        }
    })
    const result=Post.data
    console.log("the result",result)
    return result
}
export const Updatespeciftask=async(title : any,description : any,category : any,id:any)=>{
     const url = `http://localhost:3000/api/task/${id}`;
    
    const Upadte=await axios.patch(url,
          {title,description,category}
        ,
        {
     headers:{
        Accept:"application/json",
        }
    })
    const result=Upadte.data
    console.log("the result",result)
    return result
}

