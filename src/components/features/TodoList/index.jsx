import styled from "@emotion/styled";
import Text from "../../common/Text";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Modal from "../../common/Modal";
import TaskConfirm from "./TaskConfirm";
import DeadlineModal from "./DeadlineModal";
import useTodoList from "../../../hooks/useTodoList";
import { useRecoilState } from "recoil";
import { todoTasksAtom } from "../../../recoil/todoTasksAtom";
import { nanoid } from "nanoid";
import Toast from "../../common/Toast";
import { useEffect } from "react";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ebe7fd;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  min-width: 350px;
  max-width: 800px;
  height: 80%;
  max-height: 1000px;

  border-radius: 74px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  padding: 20px;
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 100%;

  padding: 32px;

  border-radius: 60px;
  background: #fff;
`;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;

  text-align: center;
`;

const TodoList = () => {
  const { visible, modalContent, setVisible, setModalContent } = useTodoList();
  const [todoTasks, setTodoTasks] = useRecoilState(todoTasksAtom);

  useEffect(() => {
    setTodoTasks(JSON.parse(localStorage.getItem("todo")) || []);
  }, []);

  const handleAdd = task => {
    if (task === "") return;

    const newTask = {
      id: nanoid(),
      task: task,
      deadline: undefined,
      done: false,
    };

    const newTasks = [...todoTasks, newTask];
    setTodoTasks(newTasks);
    localStorage.setItem("todo", JSON.stringify(newTasks));
  };

  const toggleTaskDone = id => {
    const newTasks = todoTasks.map(item => {
      if (item.id === id) {
        const newDoneState = !item.done;
        Toast.show(
          newDoneState,
          newDoneState ? "할 일을 완료하였어요!" : "완료된 할 일을 취소하였어요!"
        );
        return { ...item, done: newDoneState };
      }
      return item;
    });

    setTodoTasks(newTasks);
    localStorage.setItem("todo", JSON.stringify(newTasks));
  };

  return (
    <Background>
      <Wrapper>
        <TodoListContainer>
          <TitleWrapper>
            <Text size={4} strong>
              ToDoList
            </Text>
          </TitleWrapper>
          <TaskInput
            setVisible={setVisible}
            setModalContent={setModalContent}
            onAdd={handleAdd}
          />
          <TaskList tasks={todoTasks} toggleTaskDone={toggleTaskDone} />
        </TodoListContainer>
      </Wrapper>
      <Modal
        width={modalContent.width}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        {visible &&
          {
            deadline: <DeadlineModal setVisible={setVisible} />,
            confirm: <TaskConfirm setVisible={setVisible} />,
          }[modalContent.type]}
      </Modal>
    </Background>
  );
};

export default TodoList;
