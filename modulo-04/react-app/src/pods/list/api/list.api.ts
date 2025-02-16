import { MembersResponse } from "../list.vm";

export const getMembers = async (
  organization: string,
  page: number
): Promise<MembersResponse> => {
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  const url = `https://api.github.com/orgs/${organization}/members?page=${page}`;

  const config = githubToken
    ? {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      }
    : {};

  try {
    const resp = await fetch(url, config);
    if (!resp.ok) {
      throw new Error(`Error retriving Github members for ${organization}`);
    }

    const members = await resp.json();

    const linkHeader = resp.headers.get("Link");
    const match = linkHeader
      ? linkHeader.match(/page=(\d+)>; rel="last"/)
      : null;
    const totalPages = match ? parseInt(match[1]) : page;

    return {
      members,
      totalPages,
    };
  } catch (err) {
    console.error(err);
    return { members: [], totalPages: 0 };
  }
};
