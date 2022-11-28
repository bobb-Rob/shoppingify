import myAxios from './myAxios';

const fetchItemsUrl = '/categories';
const createCategoryUrl = '/categories';
const createItemUrl = '/items';

export async function fetchItemsWithAccessToken(accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return myAxios
    .get(fetchItemsUrl, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}

export async function createCategoryWithNameAndAccessToken(category, accessToken) {
  console.log(category);
  const config = {
    headers: {      
      Authorization: `Bearer ${accessToken}`,
    }    
  };

  const data = {
    name: category.name,
    user_id: category.user_id,
  };

  return myAxios
    .post(createCategoryUrl, data, config)
    .then((response) => response.data)
    .catch((error) => {
      // console.log(error.response);
      if (error.response) {
        console.log(error.response);
      } else if (error.request) {
        console.log(error.request);
      } else if (error.message) {
        console.log(error.message);
      }      
    });
}

export async function createNewCategoryAndItemWithAccessToken(data, accessToken) {
  // use promise.all to create category and item
  // if category is created, then create item
  // if item is created, then return item
  // if item is not created, then return error
  // if category is not created, then return error
  const config = {
    headers: {      
      Authorization: `Bearer ${accessToken}`,
    }    
  };

  return myAxios
  .post(createCategoryUrl, data.newCategory, config)
  .then((response) => {
    if (response.status === 201) {
      data.item.category_id = response.data.id;
      return myAxios
      .post(createItemUrl, data.item, config)
      .then((response) => {
        if (response.status === 201) {
          return response.data;
        }
      })
      .catch((error) => error.response);
    }
  })
  .catch((error) => error.response);
}

export async function createItemWithCategoryAndAccessToken(item, accessToken) {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return myAxios
    .post(createItemUrl, item, config)
    .then((response) => response.data)
    .catch((error) => error.response.data);
}


// const makeModuleAndBatteryPromises = async() => {

//   const promises = arrayOfObjects.map(async obj => {
//       const firstResponse = await createModules(obj.first);
//       const secondResponse = await createModules(firstResponse, obj.second);
//       return assignAssets(secondResponse);
//   });

//   const res = await Promise.all(promises);
//   const finalValue = res.at(-1); // or res[res.length-1];
//   // do things with finalValue
// }
// makeModuleAndBatteryPromises()
