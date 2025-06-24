import { createUploadthing, createNextRouteHandler } from "uploadthing/next";

const f = createUploadthing();

const uploadRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(() =>
    console.log("✅ File uploaded")
  ),
};

export const { GET, POST } = createNextRouteHandler({
  router: uploadRouter,
});
