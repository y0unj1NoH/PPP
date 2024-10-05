const createOptions = (length, step = 1) => {
  return Array.from({ length }, (_, i) => {
    const value = (i * step).toString().padStart(2, "0");
    return { label: value, value: value };
  });
};

export default createOptions;
