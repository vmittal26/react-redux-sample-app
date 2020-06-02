export const getSearchApiUrl = (searchQuery: string)
: string => `http://swapi.dev/api/planets/?search=${searchQuery}`;
