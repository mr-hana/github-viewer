const fetchRepository = async keyword => {
  const sendQuery = `https://api.github.com/search/repositories?q=${keyword}+in:name`;
  try {
    const res = await fetch(sendQuery);
    const result = await res.json();
    return result.items;
  } catch (error) {
    // todo エラーを別途通知したい
    return [];
  }
}

const GithubSearch = () => {
  return {
    fetchRepository: function (keyword) {
      return fetchRepository(keyword);
    }
  };
};

export default GithubSearch;