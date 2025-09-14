import React, { useEffect, useRef, useState } from "react";
import Ismodel from "../components/Ismodel";
import Isupdate from "../components/Isupdate";
import { Deleteall, Getall, Getspeciftask } from "../HandleApi/Crud";


type Task = { id: number; cate: string; desc: string; titt: string };

export default function Home() {
  const [model, setmodel] = useState(false);
  const [update, setupdate] = useState(false);
  const [updatingtask,setupdatetask]=useState()
  const [deletes,setdlet]=useState(false)
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
 const [updateTrigger, setUpdateTrigger] = useState(0);
  
  const [task, settask] = useState<Task[]>([]);

  // const handletask = (tasks: {
  //   category: string;
  //   description: string;
  //   title: string;
  // }) => {
  //   const newTask: Task = {
  //     cate: tasks.category,
  //     desc: tasks.description,
  //     titt: tasks.title,
  //     id: ++ref.current,
  //   };
  //   settask((prev) => [newTask, ...prev]);
  // };

  // const handleUpdateTask = (
  //   id: number,
  //   data: { title: string; description: string; category: string }
  // ) => {
  //   settask((prev) =>
  //     prev.map((t) =>
  //       t.id === id
  //         ? { ...t, titt: data.title, desc: data.description, cate: data.category }
  //         : t
  //     )
  //   );
  // };

  // const handleOpenUpdate = (id: number) => {
  //   setSelectedTaskId(id);
  //   setupdate(true);
  // };
 
  useEffect(()=>{
  const handleget=async()=>{
  const result=await Getall()
  console.log("the result",result)
  settask(result)
  }
  handleget()
  },[model,deletes,updateTrigger])
  
 const handleUpdateComplete = () => {
    setupdate(false);  
    setUpdateTrigger(prev => prev + 1); 
  };
  
  const handledelete=async(id : string)=>{
    const result=await Deleteall(id)
    setdlet(!deletes)
    alert(result.messege)
  }

  const handleupdate=async(id:any)=>{
    const result=await Getspeciftask(id)
    setupdatetask(result)
    console.log("theupdate result",updatingtask)
    setupdate(true)

  }

   

  return (
    <div className="flex-1 h-screen">
      {/* Top Add Button */}
      <div className="flex justify-end px-4 py-4">
        <button
          onClick={() => setmodel(true)}
          className="bg-white text-black px-6 py-2 rounded-md shadow hover:bg-gray-100 transition"
        >
          Add New
        </button>
      </div>

      {/* Modals */}
      {model && <Ismodel handleismodel={setmodel}   />}
      {update && 
        <Isupdate
        tasks={updatingtask}
          handleismodel={setupdate}
          onUpdateComplete={handleUpdateComplete}
        />
      }

      {/* Task Grid */}
      {task.length > 0 ? (
        <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {task.map((t, index) => (
            <div
              key={t._id}
              
              onClick={() => handleupdate(t._id)}
              className="cursor-pointer relative bg-white rounded-2xl shadow-md p-6 border border-gray-100 
                         hover:shadow-xl hover:-translate-y-1 transition transform"
            >
              {/* Delete Button */}
              <button
                onClick={(e) => {
      e.stopPropagation(); // Stop the click from reaching the parent div
      handledelete(t?._id); // Then, call your delete function
    }}
              
                className="absolute top-3 right-3 text-red-500 hover:text-red-700 cursor-pointer 
                           bg-red-50 hover:bg-red-100 rounded-full p-2 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h8"
                  />
                </svg>
              </button>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800">{t?.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{t?.description}</p>
              <span
                className="inline-block mt-4 px-3 py-1 text-xs font-medium 
                              bg-gradient-to-r from-indigo-100 to-indigo-200 
                              text-indigo-700 rounded-full"
              >
                {t?.category}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-60 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mb-3 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <p>No tasks yet. Add one!</p>
        </div>
      )}
    </div>
  );
}
