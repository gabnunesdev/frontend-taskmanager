import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import { toast } from "react-hot-toast";

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

import "./AddTask.scss";

const AddTask = () => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (!task.trim()) {
        toast.error("Digite uma tarefa antes de adicionar", { duration: 3000 });
        return;
      }
    } catch (error) {
      toast.error("Erro ao adicionar tarefa");
      console.log(error);
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa..."
        value={task}
        onChange={onChange}
      />

      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#ffffff" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
