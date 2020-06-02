export const getLoginAPIURL = (userName: string)
: string => `https://swapi.dev/api/people?search=${userName}`;
