import "dotenv/config";
import { GetObjectCommand, PutBucketCorsCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const REGION = "us-east-1"


export class AWSUtil {
  private static readonly s3Client = (() => {

    // AWS

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

  private static readonly corsConfig = (() => {
    return { // PutBucketCorsRequest
      Bucket: "STRING_VALUE", // required
      CORSConfiguration: {
        CORSRules: [
          { // CORSRules
            AllowedHeaders: ["*"],
            AllowedMethods: [
                "PUT",
                "POST",
                "DELETE"
            ],
            AllowedOrigins: [
                "http://localhost:3000/create/vid"
            ],
            ExposeHeaders: ["x-amz-server-side-encryption"],
            // MaxAgeSeconds: Number("int"),
          },
        ],
      }
    };
  })

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
      
      const config = new PutBucketCorsCommand(this.corsConfig());
      const response = await this.s3Client.send(config);
      console.log("Response:",response);

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