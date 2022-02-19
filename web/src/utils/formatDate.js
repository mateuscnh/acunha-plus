// 2018-04-25 ---> 25/04/2018
export const formatDate = (date) => {
  const [year, month, day] = date?.split("-");
  return `${day}/${month}/${year}`;
};
