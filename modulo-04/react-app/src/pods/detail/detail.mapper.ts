import { MemberDetail } from "./detail.vm";
import { MemberDetailDto } from "./api/api.model";

export const mapMemberDetailDtoToMemberDetail = ({
  id,
  login,
  name,
  company,
  bio,
  avatar_url,
}: MemberDetailDto): MemberDetail => {
  return {
    id,
    login,
    name,
    company,
    bio,
    avatarUrl: avatar_url,
  };
};
