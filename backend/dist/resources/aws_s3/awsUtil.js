"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSUtil = void 0;
require("dotenv/config");
const client_s3_1 = require("@aws-sdk/client-s3");
class AWSUtil {
    static async services(type, file, key) {
        const bucket = type === "image" ? process.env.AWS_S3_IMAGE_BUCKET_NAME : process.env.AWS_S3_VIDEO_BUCKET_NAME;
        if (key) {
            const results = await this.uploadToS3(file, bucket);
            console.log(results);
            return results;
        }
        else {
            const results = await this.fetchFromS3(key, bucket);
            console.log(results);
            return results;
        }
    }
    static async uploadToS3(file, bucket) {
        try {
            const { originalname, mimetype } = file;
            return await this.s3Client.send(new client_s3_1.PutObjectCommand({
                Bucket: bucket,
                Key: String(originalname),
                Body: file.buffer,
                ContentType: mimetype
            }));
        }
        catch (e) {
            console.log(e);
        }
    }
    static async fetchFromS3(key, bucket) {
        try {
            return await this.s3Client.send(new client_s3_1.GetObjectCommand({
                Bucket: bucket,
                Key: key,
            }));
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.AWSUtil = AWSUtil;
AWSUtil.s3Client = new client_s3_1.S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});
//# sourceMappingURL=awsUtil.js.map