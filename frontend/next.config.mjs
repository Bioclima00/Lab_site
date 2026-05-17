/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          // 只要前端收到任何以 /api 开头的请求，都在后台悄悄转发给 FastAPI 后端
          source: '/api/:path*',
          destination: 'http://localhost:8000/api/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;