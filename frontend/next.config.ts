import type { NextConfig } from "next";
import "dotenv/config";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_S3_IMAGE_BUCKET_NAME: process.env.AWS_S3_IMAGE_BUCKET_NAME,
    AWS_S3_VIDEO_BUCKET_NAME: process.env.AWS_S3_VIDEO_BUCKET_NAME,
    AWS_IMAGES_URL: process.env.AWS_IMAGES_URL,
    AWS_VIDEOS_URL: process.env.AWS_VIDEOS_URL
  }
};

export default nextConfig;
