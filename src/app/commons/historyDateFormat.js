const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  const options = {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

export default formatDate;
