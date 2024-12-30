import styled from "@emotion/styled";
import Icon from "../../../common/Icon";
import Text from "../../../common/Text";

const TaskItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 8px 16px;

  background-color: ${props => (props.done ? "#E6FAEA" : "white")};

  border-radius: 16px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;

const TaskContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DeadlineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledIcon = styled.div`
  cursor: pointer;
  display: inline-block;
  padding: 6px 4px;

  & > * {
    display: block;
  }
`;

const TaskItem = ({ task, deadline, done, toggleTaskDone }) => {
  return (
    <TaskItemContainer onClick={toggleTaskDone} done={done}>
      <TaskContentContainer>
        <Text size={1.5} strong>
          {task}
        </Text>
        {deadline &&
          <DeadlineContainer>
            <Text size={1} color="#C5B4FB">
              {deadline}
            </Text>
          </DeadlineContainer>}
      </TaskContentContainer>

      <StyledIcon
        onClick={() => {
          console.log(task);
        }}
      >
        <Icon.Kebab size={5} />
      </StyledIcon>
    </TaskItemContainer>
  );
};

export default TaskItem;
