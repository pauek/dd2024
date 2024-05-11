export const loadUsers = async () => {
  const response = await fetch("https://randomuser.me/api/?results=20&seed=dd2024");
  const { results } = await response.json();
  return results;
};

export const loadUser = async (index: number) => {
  const response = await fetch("https://randomuser.me/api/?results=20&seed=dd2024");
  const { results } = await response.json();
  return results[index];
}