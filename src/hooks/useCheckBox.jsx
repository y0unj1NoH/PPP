import { useState, useCallback } from "react";

const useCheckBox = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const checkBox = useCallback(() => setState((state) => !state), []);

  return [state, checkBox];
};

export default useCheckBox;

