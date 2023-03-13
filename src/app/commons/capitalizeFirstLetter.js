const capitalizeFirstLetter = (str) => {
  // Check if str is a string
  if (typeof str !== 'string') {
    return '';
  }
  return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase();
};
export default capitalizeFirstLetter;
