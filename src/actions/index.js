export const getNewss = (category,country,query) => ({
  type: 'GET_NEWS',
  category: category,
  country:country,
  query:query
});

