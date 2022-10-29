const setJwtToken = (response, tokenType) => {
  if (response.ok) {
    const token = response.headers.get('Authorization');
    localStorage.setItem(tokenType, token);
  }
};

export const getLoginToken = () => localStorage.getItem('loginToken');

export default setJwtToken;
