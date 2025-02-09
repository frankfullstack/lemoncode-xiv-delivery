export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

export interface MembersContextModel {
  members: MemberEntity[];
  updateMembers: (members: MemberEntity[]) => void;
}