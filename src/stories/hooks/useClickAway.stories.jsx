import styled from "@emotion/styled";
import { useState } from "react";
import useClickAway from "../../hooks/useClickAway";

export default {
  title: "Hook/useClickAway"
};

const Popover = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background-color: #eee;
`;

export const Default = () => {
  const [show, setShow] = useState(false);
  const ref = useClickAway((e) => {
    if (e.target.tagName !== "BUTTON") {
      setShow(false);
    }
  });

  return (
    <div>
      <button onClick={() => setShow(true)}>Show</button>
      <Popover ref={ref} style={{ display: show ? "block" : "none" }}>
        Popover
      </Popover>
    </div>
  );
};

