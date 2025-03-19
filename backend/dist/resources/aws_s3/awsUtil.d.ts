import "dotenv/config";
export declare class AWSUtil {
    private static readonly s3Client;
    static services(type: string, file: Express.Multer.File, key?: string): Promise<import("@aws-sdk/client-s3").GetObjectCommandOutput | import("@aws-sdk/client-s3").PutObjectCommandOutput>;
    private static uploadToS3;
    private static fetchFromS3;
}
