const getUsers = async () => {
  const api = {
    baseUrl: 'https://jsonplaceholder.typicode.com/users'
  }

  try {
    let response = await fetch(api.baseUrl);
    let result = await response.json();
    return result;
  } catch (err) {
    throw new Error('Something wrong. Try again.')
  }
}


export { getUsers };