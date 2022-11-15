/* eslint-disable */
import store from "../redux/store";

console.log(store.getState());

function getCategories (state) {
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

export const getCategoryOptions = (categories) => {
  return categories.map((item) => ({ value: item, label: item, color: '#00B8D9' }));
};

export const item2DArray = (state) => {
  const list  = state.itemList;
  const categories = getCategories(state);
  let twoDimensionArr = [];
  for (let i = 0; i < categories.length; i++) {
   const newArr = list.filter((item) => item.category === categories[i]);
   twoDimensionArr = [...twoDimensionArr, newArr];
  }
  return twoDimensionArr;
}

export default getCategories;