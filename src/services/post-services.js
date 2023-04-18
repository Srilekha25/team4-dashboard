export const getCodeWarsByUser = async (user) => {
    console.log("user->",user);
  const response = await fetch(
    `https://www.codewars.com/api/v1/users/${user}`
  );
  
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = response.json();
  console.log("data",data);
  return data;
};