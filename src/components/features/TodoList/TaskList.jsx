import styled from "@emotion/styled";
import TaskItem from "./TaskItem";

const TaskListContainer = styled.div``;

const TaskList = ({ tasks }) => {
  return (
    <TaskListContainer>
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          task={item}
          //   removeTask={removeTask}
          //   toggleTaskDone={toggleTaskDone}
        />
      ))}
    </TaskListContainer>
  );
};

export default TaskList;

