import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const useGithubPagesPath = isGithubActions || process.env.GH_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? process.env.GH_PAGES_REPO ?? "Hexora";
const isUserOrOrgSite = repoName?.toLowerCase().endsWith(".github.io");
const basePath = useGithubPagesPath && repoName && !isUserOrOrgSite ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
