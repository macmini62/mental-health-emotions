import "dotenv/config";
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

// AWS Configurations.
const AWS_REGION = process.env.AWS_REGION;
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_S3_IMAGE_BUCKET_NAME = process.env.AWS_S3_IMAGE_BUCKET_NAME;
const AWS_S3_VIDEO_BUCKET_NAME = process.env.AWS_S3_VIDEO_BUCKET_NAME;

export class AWSUtil {
  private static readonly s3Client = (() => {
    if (!AWS_REGION || !AWS_ACCESS_KEY || !AWS_SECRET_ACCESS_KEY) {
      throw new Error("Missing AWS configuration");
    }

    return new S3Client({
      region: AWS_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
      }
    });
  })();

  public async services(type: string, file: File | null, key?: string): Promise<string | any>{
    try{
      const bucket = type === "image" ? AWS_S3_IMAGE_BUCKET_NAME : AWS_S3_VIDEO_BUCKET_NAME;
      console.log(bucket)
      if (!bucket) {
        throw new Error("Bucket name is undefined");
      }

      if(key){
        console.log("Fetching...");
        return await AWSUtil.fetchFromS3(key, bucket);
      }
      else if(file){
        console.log("Uploading...");
        return await AWSUtil.uploadToS3(type, file, bucket);
      }
      else{
        throw new Error("Cannot upload or fetch your data. Please check your service parameters..");
      }
    }
    catch(e){
      console.log(e);
    }
  }
  
  private static async uploadToS3(
    fileType: string,
    file: File,
    bucket: string
  ): Promise<string | any>{
    try{
      const { name, type } = file;

      const res = await this.s3Client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: name,
          Body: new Uint8Array(await file.arrayBuffer()),
          ContentType: type
        })
      );

      if(fileType === "image"){
        return `${process.env.AWS_IMAGES_URL}/${name}`;
      }
      else{
        return `${process.env.AWS_VIDEOS_URL}/${name}`;
      }
    }
    catch(e){
      return e;
    }
  }

  private static async fetchFromS3(
    key: string,
    bucket: string
  ): Promise<string | any>{
    try{
      return await this.s3Client.send(
        new GetObjectCommand({
          Bucket: bucket,
          Key: key,
        })
      );
    }
    catch(e){
      return e;
    }
  }
}