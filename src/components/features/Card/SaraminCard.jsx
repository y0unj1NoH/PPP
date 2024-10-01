import styled from "@emotion/styled";
import Text from "../../common/Text";
import Icon from "../../common/Icon";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  max-width: 500px;
  padding: 32px;

  border-radius: 24px;
  border: 1px solid #e8e8ea;

  & * {
    line-height: 20px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #909cb0;
`;

const DaysOfWeek = Object.freeze({
  0: "일",
  1: "월",
  2: "화",
  3: "수",
  4: "목",
  5: "금",
  6: "토"
});

const dateToDeadline = (dateStr) => {
  const dateObj = new Date(dateStr);

  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const date = dateObj.getDate().toString().padStart(2, "0");
  const day = `${DaysOfWeek[dateObj.getDay()]}`;

  const deadline = `~${month}.${date}(${day})`;

  return deadline;
};

const SaraminCard = ({ job }) => {
  const position = job.position;

  const url = job.url;
  const title = position.title;
  const company = job.company.name;

  const location = position.location.name;
  const experienceLevel = position["experience-level"].name;
  const educationLevel = position["required-education-level"].name.replace(
    "이상",
    "↑"
  );

  const deadline = dateToDeadline(job["expiration-date"]);

  // TODO: 데이터를 여기서 가공하는 게 아니라 가공한 데이터를 넘기는 게 맞는 것 같다.
  return (
    <CardContainer onClick={() => window.open(url)}>
      <Icon.Saramin block />
      <Text size="large" strong color="#292E40">
        {title}
      </Text>
      <Text size="large" color="#475067">
        {company}
      </Text>
      <InfoContainer>
        <Icon.Default name="map-pin" size={14} color="#909CB0" />
        <Text size="medium">{`${location} | ${experienceLevel} · ${educationLevel}`}</Text>
      </InfoContainer>
      <Text size="medium" color="#6D73AA">
        {deadline}
      </Text>
    </CardContainer>
  );
};

export default SaraminCard;

