import React, { useEffect, useState } from "react";
import { Posttask } from "../HandleApi/Crud";

type IsmodelProps = {
  handleismodel: (open: boolean) => void;
 
};

export default function Ismodel({ handleismodel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(""); // extra field example

  // const handleAdd = () => {
  //   const task={ title,
  //       description,
  //       category 
  //       }
         
  //   handletask(task)
  //   handleismodel(false);
  // };

  const handleadde=async()=>{
     const result=await Posttask(title,description,category)
     handleismodel(false);
    }
    
    //  const handledelete=async(id : any)=>{
    //   console.log("the id",id)
    //  const result=await Deleteall(id)
      
    //  alert(result.messege)
    // }
  useEffect(()=>{
    console.log(title)
  })

  return (
    <div className="fixed inset-0  bg-opacity-40 flex justify-center items-center z-50">
      {/* Modal box */}
      <div className="bg-white w-full max-w-sm rounded-lg shadow-lg p-5 relative">
        {/* Close button */}
        <button
          onClick={() => handleismodel(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg font-bold"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New</h2>

        {/* Inputs */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm resize-none"
            rows={3}
          />
          {/* Example of extra field */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          >
            <option value="">Select Category</option>
            <option value="task">Task</option>
            <option value="note">Note</option>
            <option value="reminder">Reminder</option>
          </select>
        </div>

        {/* Add button */}
        <button
          onClick={handleadde}
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition text-sm"
        >
          Add
        </button>
      </div>
      <div>
      
      </div>
    </div>
  );
}
