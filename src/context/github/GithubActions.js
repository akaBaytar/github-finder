const URL = 'https://api.github.com';
const TOKEN = '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';

// get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  const { items } = await response.json();

  return items;
};

// get single user
export const getUser = async (login) => {
  const response = await fetch(`${URL}/users/${login}`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  const data = await response.json();

  return data;
};

// get user repos
export const getRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });

  const response = await fetch(`${URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });

  const data = await response.json();

  return data;
};
