// "use client";

// import { UploadDropzone } from "@/lib/uploadthing";

// import "@uploadthing/react/styles.css"

// interface FileUploadProps {
//     onChange: (url?: string) => void;
//     value: string;
//     endpoint:  "messageFile" | "serverImage"
// }

// export const FileUpload = ({
//     onChange,
//     value,
//     endpoint
// }: FileUploadProps) => {
//     return (
//        <UploadDropzone 
//        endpoint = {endpoint}
//        onClientUploadComplete = {(res) => {
//         onChange(res?.[0]?.url);
//        }}
//        onUploadError={(error: Error) => {
//         console.log(error);
//        }}
//        />

//     )
// }

'use client';
import { FC } from 'react';
import { FileIcon, X } from 'lucide-react';
import Image from 'next/image';

import '@uploadthing/react/styles.css';
import { UploadDropzone } from '@/lib/uploadthing';

interface fileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: 'messageFile' | 'serverImage';
}

const FileUpload: FC<fileUploadProps> = ({ onChange, value, endpoint }) => {
  const fileType = value?.split('.').pop();

  if (value && fileType !== 'pdf') {
    return (
      <div className="relative h-20 w-20">
        <Image 
        fill src={value} 
        alt="Upload" 
        className="rounded-full" />
        <button
          onClick={() => onChange('')}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4"></X>
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => console.log(error.cause)}
    />
  );
};

export default FileUpload;