const addToList = function (value) {
  let list = localStorage.getItem("contacts");
  if (!list) list = [];
  localStorage.setItem("contacts", JSON.stringify(value));
};

const getFromList = function () {
  const list = JSON.parse(localStorage.getItem("contacts"));
  return list ? list : [];
};
const apiLS = { addToList, getFromList };
export default apiLS;
