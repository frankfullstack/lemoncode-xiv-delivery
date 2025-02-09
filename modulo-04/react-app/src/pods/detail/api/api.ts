import { MemberDetailDto } from "./api.model"

export const getMember = (id: string): Promise<MemberDetailDto> => {
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

  return fetch(`https://api.github.com/users/${id}`, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
    }
  })
  .then((resp) => resp.json())
}