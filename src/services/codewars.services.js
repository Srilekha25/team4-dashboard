export const getCodeWarsByUser = async (user) => {
    const response = await fetch(
        `https://www.codewars.com/api/v1/users/${user}`
    );
    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    const data = await response.json();

    return data;
};
