/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "*" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
