export const login = (
  username: string,
  password: string
): Promise<{ username: string } | undefined> => {
  return new Promise<{ username: string } | undefined >((resolve) => {
    setTimeout(() => {
      resolve(
        username === "admin" && password === "LomVxk9CRKKt5iuCi32mXEiv"
          ? { username: "Administrador" }
          : undefined
      );
    }, 500);
  });
};
