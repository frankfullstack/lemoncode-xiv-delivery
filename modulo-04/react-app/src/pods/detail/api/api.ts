import { MemberDetailDto } from "./api.model"

export const getMember = (id: string): Promise<MemberDetailDto> => {
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  const config = githubToken ? {headers: {
    Authorization: `Bearer ${githubToken}`,
  }} : {};

  return fetch(`https://api.github.com/users/${id}`, config)
  .then((resp) => resp.json())
}