import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const uploadRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(() =>
    console.log("✅ File uploaded")
  ),
};
