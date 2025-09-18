/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Отключаем ESLint во время сборки
  },
};

export default nextConfig;
