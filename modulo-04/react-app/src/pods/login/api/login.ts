export const login = (
  username: string,
  password: string
): Promise<{ username: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        username === "admin" && password === "test"
          ? { username: "Administrador" }
          : undefined
      );
    }, 500);
  });
};
