// const SERVER_URL = 'https://dj5pipyyfj.execute-api.us-east-1.amazonaws.com/prod/';
const SERVER_URL = 'https://nukvjtrvscefsultfstt.supabase.co/rest/v1/';
const API_ROUTES = {
  // User: ' ${SERVER_URL}/users ',
  users: `${SERVER_URL}/users`,
  roles: `${SERVER_URL}/roles`,
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());
// console.log(fetcher)
export {SERVER_URL , API_ROUTES  ,fetcher };
