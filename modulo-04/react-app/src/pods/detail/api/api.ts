import { MemberDetailDto } from "./api.model"

export const getMember = (id: string): Promise<MemberDetailDto> => {
  return fetch(`https://api.github.com/users/${id}`, {
    headers: {
      Authorization: 'Bearer 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',
    }
  })
  .then((resp) => resp.json())
}