import styled from "@emotion/styled";
import Text from "../../common/Text";
import Icon from "../../common/Icon";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
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

// TODO: date 처리 함수들 정리 필요
const dateToDeadline = (dateStr) => {
  const dateObj = new Date(dateStr);

  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const date = dateObj.getDate().toString().padStart(2, "0");
  const day = `${DaysOfWeek[dateObj.getDay()]}`;

  const deadline = `~${month}.${date}(${day})`;

  return deadline;
};

// TODO: 리팩토링 필요
const parseSaraminData = (data) => {
  const { url, position, company } = data;

  const educationLevel = position["required-education-level"].name.replace(
    "이상",
    "↑"
  );
  const deadline = dateToDeadline(data["expiration-date"]);

  return {
    url,
    title: position.title,
    companyName: company.name,
    location: position.location.name,
    experienceLevel: position["experience-level"].name,
    educationLevel,
    deadline
  };
};

const SaraminCard = ({ data }) => {
  // TODO: 데이터 가공 부분은 api 가져오는 파일로 이동시키기
  const {
    url,
    title,
    companyName,
    location,
    experienceLevel,
    educationLevel,
    deadline
  } = parseSaraminData(data);

  // TODO: 컨테이너가 너무 많아서 컴포넌트 분리해야 할 듯
  return (
    <CardContainer onClick={() => window.open(url)}>
      <Icon.Saramin size={120} block />
      <Text size={16} strong color="#292E40">
        {title}
      </Text>
      <Text size="medium" color="#475067">
        {companyName}
      </Text>
      <InfoContainer>
        <Icon.Default name="map-pin" size={14} color="#909CB0" />
        <Text size="small">{`${location} | ${experienceLevel} · ${educationLevel}`}</Text>
      </InfoContainer>
      <Text size="small" color="#6D73AA">
        {deadline}
      </Text>
    </CardContainer>
  );
};

export default SaraminCard;
