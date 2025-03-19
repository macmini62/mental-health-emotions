import "dotenv/config";
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

// AWS configuration and uploading image to s3

export class AWSUtil {
  private static readonly s3Client = new S3Client({
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  });

  public static async services(type: string, file: Express.Multer.File, key?: string){
    const bucket = type === "image" ? process.env.AWS_S3_IMAGE_BUCKET_NAME : process.env.AWS_S3_VIDEO_BUCKET_NAME;
    if(key){
      const results = await this.uploadToS3(file, bucket);
      console.log(results);
      return results;
    }
    else{
      const results = await this.fetchFromS3(key, bucket)
      console.log(results);
      return results;
    }
  }

  private static async uploadToS3(
      file: Express.Multer.File,
      bucket: string
  ){
    try{
      const { originalname, mimetype } = file;

      return await this.s3Client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: String(originalname),
          Body: file.buffer,
          ContentType: mimetype
        }),
      );
    }
    catch(e){
      console.log(e);
    }
  }

  private static async fetchFromS3(
    key: string,
    bucket: string
  ){
    return await this.s3Client.send(
      new GetObjectCommand({
        Bucket: bucket,
        Key: key,
      })
    );
  }
}