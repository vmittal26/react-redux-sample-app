export const getSearchApiUrl = (searchQuery: string)
: string => `https://swapi.dev/api/planets/?search=${searchQuery}`;
