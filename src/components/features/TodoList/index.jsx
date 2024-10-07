import styled from "@emotion/styled";
import Text from "../../common/Text";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Modal from "../../common/Modal";
import TaskConfirm from "./TaskConfirm";
import DeadlineModal from "./DeadlineModal";
import useTodoList from "../../../hooks/useTodoList";

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
  justify-content: center;
  align-items: center;

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

  return (
    <Background>
      <Wrapper>
        <TodoListContainer>
          <TitleWrapper>
            <Text size={4} strong>
              ToDoList
            </Text>
          </TitleWrapper>
          <TaskInput />
          {/* <TaskList /> */}
        </TodoListContainer>
      </Wrapper>
      <Modal
        width={modalContent.width}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        {modalContent.type === "deadline" && visible ? (
          <DeadlineModal setVisible={setVisible} />
        ) : modalContent.type === "confirm" && visible ? (
          <TaskConfirm setVisible={setVisible} />
        ) : null}
      </Modal>
    </Background>
  );
};

export default TodoList;

