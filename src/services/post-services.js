export const getCodeWarsByUser = async (user) => {
  console.log("user->", user);
  if (user !== "") {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${user}`
    );
    if (!response.ok) {
      console.log("Error");
      throw new Error("Couldn't find the search term");
    }
    const data = response.json();
    console.log("data", data);
    return data;
  }else{
    return;
}
};
