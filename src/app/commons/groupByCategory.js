const groupByCategory = (records) => {
  const grouped = records.reduce((acc, record) => {
    const { categoryName } = record.item;

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }

    acc[categoryName].push(record);
    return acc;
  }, {});

  return Object.entries(grouped).map(([key, values]) => ({
    categoryName: key,
    items: values,
  }));
};

export default groupByCategory;
