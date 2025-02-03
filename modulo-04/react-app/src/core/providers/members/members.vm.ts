export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export interface MembersContextModel {
  members: MemberEntity[];
}