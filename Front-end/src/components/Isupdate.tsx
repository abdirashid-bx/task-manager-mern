import React, { useRef, useState } from "react";
import { Updatespeciftask } from "../HandleApi/Crud";

type Task = {
  _id: string;
  cate: string;
  desc: string;
  titt: string;
};

type IsupdateProps = {
  handleismodel: (open: boolean) => void;
  task: Task; // single task, not array
  onUpdateComplete: () => void;
};

export default function Isupdate({
  handleismodel,
  task,
  onUpdateComplete,
}: IsupdateProps) {
  const [title, setTitle] = useState(task?.titt || "");
  const [description, setDescription] = useState(task?.desc || "");
  const [category, setCategory] = useState(task?.cate || "");
  const ref = useRef(0);

  const handleUpdate = async () => {
    await Updatespeciftask(title, description, category, task._id);
    handleismodel(false);
    onUpdateComplete();
  };




  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-sm rounded-lg shadow-lg p-5 relative">
        <button
          onClick={() => handleismodel(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg font-bold"
        >
          ×
        </button>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Update</h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
            rows={3}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="">Select Category</option>
            <option value="task">Task</option>
            <option value="note">Note</option>
            <option value="reminder">Reminder</option>
          </select>
        </div>

        <button
          onClick={handleUpdate}
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition text-sm"
        >
          Update
        </button>
      </div>
    </div>
  );
}
