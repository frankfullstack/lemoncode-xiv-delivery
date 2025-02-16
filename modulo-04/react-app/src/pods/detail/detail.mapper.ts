import { MemberDetail } from "./detail.vm";
import { MemberDetailDto } from "./api/api.model";

export const mapMemberDetailDtoToMemberDetail = ({
  id,
  login,
  name,
  company,
  bio,
  avatar_url,
  created_at,
  updated_at,
  following,
  followers,
  public_repos,
  public_gists,
  html_url,
  email,
  url,
  blog,
}: MemberDetailDto): MemberDetail => {
  return {
    id,
    login,
    name,
    company,
    bio,
    avatarUrl: avatar_url,
    createdAt: created_at,
    lastUpdated: updated_at,
    publicRepos: public_repos,
    publicGists: public_gists,
    htmlUrl: html_url,
    followers,
    following,
    email,
    url,
    blog
  };
};
