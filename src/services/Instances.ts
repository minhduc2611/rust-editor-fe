import ApiInstance from "./ApiInstance";

export const githubInstance = new ApiInstance(process.env.NEXT_PUBLIC_GITHUB_ENDPOINT);
console.log('NEXT_PUBLIC_GITHUB_ENDPOINT',process.env.NEXT_PUBLIC_GITHUB_ENDPOINT);
console.log('NEXT_PUBLIC_MAIN_ENDPOINT', process.env.NEXT_PUBLIC_MAIN_ENDPOINT);

export const mainApiInstance = new ApiInstance(process.env.NEXT_PUBLIC_MAIN_ENDPOINT)
