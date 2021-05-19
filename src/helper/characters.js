const charactersURL = `https://swapi.dev/api/people/`;

export const getCharacters = async (currentPage) => {
  try {
    const url = `${charactersURL}?page=${currentPage}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    console.log(`data`, data);
    return data;
  } catch (error) {
    return error;
  }
};

export const searchCharacter = async (searchTerm) => {
  try {
    const url = `${charactersURL}?search=${searchTerm}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    console.log(`data`, data);
    return data;
  } catch (error) {
    return error;
  }
};
