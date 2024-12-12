// Async function that will return the  Menu response
export async function getPizzaMenu(query) {
  const url = `https://pizza-and-desserts.p.rapidapi.com/${query}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "aafbbd8675msh2c4af3dc4935c00p1c27eejsnf2c8a7f91e94",
      "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Response Invalid!!");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return `${error}`;
  }
}
