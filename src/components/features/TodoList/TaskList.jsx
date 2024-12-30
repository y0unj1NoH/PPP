import styled from "@emotion/styled";
import TaskItem from "./TaskItem";

const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

const TaskList = ({ tasks, toggleTaskDone }) => {
  return (
    <TaskListContainer>
      {tasks.map((item, index) =>
        <TaskItem
          key={index}
          task={item.task}
          deadline={item.deadline}
          //   removeTask={removeTask}
          toggleTaskDone={() => toggleTaskDone(item.id)}
          done={item.done}
        />
      )}
    </TaskListContainer>
  );
};

export default TaskList;
