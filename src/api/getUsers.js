const getUsers = async (url) => {
  try {
    let response = await fetch(url);
    let result = await response.json();
    return result;
  } catch (err) {
    throw new Error('Something wrong. Try again.')
  }
}


export { getUsers };