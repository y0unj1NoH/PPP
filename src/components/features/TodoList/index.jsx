import styled from "@emotion/styled";
import Text from "../../common/Text";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ebe7fd;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 74px;
  border: 1px solid var(#fff);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 74px;
  border: 30px solid rgba(255, 255, 255, 0.1);
  background: var(--color-gray-10, #fff);
`;

const TodoList = () => {
  return (
    <Background>
      <Wrapper>
        <TodoListContainer>
          <Text>ToDoList</Text>
          <TaskInput />
          <TaskList />
        </TodoListContainer>
      </Wrapper>
    </Background>
  );
};

export default TodoList;

