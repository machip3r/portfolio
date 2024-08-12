/** @type {import("next").NextConfig} */
const nextConfig = {
    basePath: "/portfolio",
    assetPrefix: "/portfolio/",
    output: "export",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
