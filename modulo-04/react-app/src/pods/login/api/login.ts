export const login = (
  username: string,
  password: string
): Promise<{ username: string } | undefined> => {
  return new Promise<{ username: string } | undefined >((resolve) => {
    setTimeout(() => {
      resolve(
        username === "admin" && password === import.meta.env.VITE_USER_PASSWORD
          ? { username: "Administrador" }
          : undefined
      );
    }, 500);
  });
};
