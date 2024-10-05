const formatYYMMDDToYYYYMMDD = date => {
  const [year, month, day] = date.split(".");

  return `20${year}-${month}-${day}`;
};

const formatDateRangeToYYYYMMDD = dateRange => {
  return {
    start: formatYYMMDDToYYYYMMDD(dateRange.start),
    end: formatYYMMDDToYYYYMMDD(dateRange.end)
  };
};

export default formatDateRangeToYYYYMMDD;
