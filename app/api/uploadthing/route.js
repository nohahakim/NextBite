// import { createUploadthing, type } from "uploadthing/next";

// const f = createUploadthing();

// export const uploadRouter = {
//   imageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(() =>
//     console.log("✅ File uploaded")
//   ),
// };
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
