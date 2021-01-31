const apiKey = 'ff05cd3977a2493a809452f333bdf4f6';
function fetchArticles(searchQuery) {
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en`;

  const options = {
    headers: {
      Authorization: apiKey,
    },
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => data.articles)
    .catch(error => console.log(error));
}

export default fetchArticles;
