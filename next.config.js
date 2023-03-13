/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    DB_URL:
      "mongodb+srv://haseeb:<password>@cluster0.uzcwrw0.mongodb.net/?retryWrites=true&w=majority",
  },
};
