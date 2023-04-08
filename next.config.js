/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    DB_URL:
      "mongodb+srv://haseeb:haseeb@cluster0.qffdzqz.mongodb.net/?retryWrites=true&w=majority",

    CLOUDINARY_CLOUD_NAME: "ddqlqccsu",
    CLOUDINARY_API_KEY: "531827288198442",
    CLOUDINARY_SECRET_KEY: "7ciLHRo4NSdm1xrSUfyNO4112PM",
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};
