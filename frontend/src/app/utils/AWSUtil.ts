import "dotenv/config";
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

// AWS configuration and uploading image to s3
// AWS

export class AWSUtil {
  private static readonly s3Client = (() => {
    // const region = process.env.REGION;
    // const accessKeyId = process.env.AWS_ACCESS_KEY;
    // const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

    const region = REGION;
    const accessKeyId = AWS_ACCESS_KEY;
    const secretAccessKey = AWS_SECRET_ACCESS_KEY;

    if (!region || !accessKeyId || !secretAccessKey) {
      throw new Error("Missing AWS configuration");
    }

    return new S3Client({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey
      }
    });
  })();

  public async services(type: string, file: File, key?: string){
    const bucket = type === "image" ? AWS_S3_IMAGE_BUCKET_NAME : AWS_S3_VIDEO_BUCKET_NAME;
    if (!bucket) {
      throw new Error("Bucket name is undefined");
    }

    const results = await AWSUtil.uploadToS3(file, bucket);
    console.log(results);
    return results;

    // if (key) {
    //   const results = await AWSUtil.uploadToS3(file, bucket);
    //   console.log(results);
    //   return results;
    // } 
    // else if (key !== undefined) {
    //   const results = await AWSUtil.fetchFromS3(key, bucket);
    //   console.log(results);
    //   return results;
    // } 
    // else {
    //   throw new Error("Key is undefined");
    // }
  }

  private static async uploadToS3(
      file: File,
      bucket: string
  ){
    try{
      const { name, type } = file;

      return await this.s3Client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: String(name),
          Body: new Uint8Array(await file.arrayBuffer()),
          ContentType: type
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
    try{
      return await this.s3Client.send(
        new GetObjectCommand({
          Bucket: bucket,
          Key: key,
        })
      );
    }
    catch(e){
      console.log(e)
    }
  }
}