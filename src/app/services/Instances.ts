import ApiInstance from "./ApiInstance";

export const githubInstance = new ApiInstance("https://api.github.com");

export const mainApiInstance = new ApiInstance(process.env.NEXT_PUBLIC_TEM_BASE_URL)
