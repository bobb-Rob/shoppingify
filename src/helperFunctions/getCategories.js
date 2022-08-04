/* eslint-disable */
import store from "../redux/store";

console.log(store.getState());

export default function (state) {
  const list  = state.itemList;
  let category = [];
  for (let i = 0; i < list.length; i++) {
    const categoryName = list[i].category;
    category = [...category, categoryName];
  }
  let unique = category.filter((item, i, ar) => ar.indexOf(item) === i);
  return unique;
};

let obj = {
  value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true,
};

export const categoryOptions = (categories) => {
  return categories.map((item) => ({ value: item, label: item, color: '#00B8D9' }));
}
