module.exports = {
  // Use the same port as the original server.js
  port: process.env.PORT || 8080,
  // Use the same API route as the original server.js
  async rewrites() {
    return [
      {
        source: "/signatures",
        destination: "/api/signatures",
      },
    ];
  },
};
