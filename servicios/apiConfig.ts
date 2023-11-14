// const SERVER_URL = 'https://dj5pipyyfj.execute-api.us-east-1.amazonaws.com/prod/';
const SERVER_URL = 'https://dj5pipyyfj.execute-api.us-east-1.amazonaws.com/prod/';
const API_ROUTES ={  
  // User: ' ${SERVER_URL}/users ',  
 users: `${SERVER_URL}/users`,
}
// const API_ROUTES ={  
//   // User: ' ${SERVER_URL}/users ',  
//  users: `${SERVER_URL}/users`,
// }
// const SERVER_URL ='/api'

// const API_ROUTES ={  
//   // User: ' ${SERVER_URL}/users ',  
//  users: `${SERVER_URL}/user`,
// }
//  console.log( API_ROUTES)
// console.log(SERVER_URL)

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const fetcher = (url: string) => fetch(url).then((res) => res.json());
// console.log(fetcher)
export {SERVER_URL , API_ROUTES  ,fetcher };