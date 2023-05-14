import ApiInstance from "./ApiInstance";

export const githubInstance = new ApiInstance(process.env.NEXT_PUBLIC_GITHUB_ENDPOINT);

export const mainApiInstance = new ApiInstance(process.env.NEXT_PUBLIC_MAIN_ENDPOINT)
