export const userSearchURL = (query: string) => `https://api.github.com/search/users?q=${query}`;
export const userURL = (user: string) => `https://api.github.com/users/${user}`;
export const userRepos = (user: string) => `https://api.github.com/users/${user}/repos`;