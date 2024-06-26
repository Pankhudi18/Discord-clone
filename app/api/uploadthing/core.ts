
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const handelAuth = () => {
    const {userId} = auth();
    console.log(userId);
    if(!userId)  throw new Error("Unauthorized");
    return {userId};
}
 

export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: '4MB', maxFileCount: 1} })
  .middleware(() => handelAuth())
  .onUploadComplete(() => {}),
  messageFile: f(["image", "pdf"])
  .middleware(() => handelAuth())
  .onUploadComplete(() => {}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;