import React, { useState } from "react";
import { useUpload } from "../hooks/useUpload";
import { useMetadata } from "../hooks/useMetadata";
import { CaptionEditor } from "./CaptionEditor";
import { MetadataDisplay } from "./MetadataDisplay";

export const MediaUpload: React.FC = () => {
  const { file, progress, handleFileSelect, uploadComplete } = useUpload();
  const { metadata, loading, error } = useMetadata(file?.name, file?.type);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(event);
    if (event.target.files && event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="p-6 w-screen overflow-x-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <input type="file" onChange={handleFileChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-200 ease-in-out"/>
      {progress > 0 && <p className="mt-2 text-gray-600">Upload Progress: {progress}%</p>}
      {file && <p className="mt-2 text-gray-800 font-semibold">Preview: {file.name}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Preview"
          className="mt-4 rounded-lg shadow-md"
          style={{ maxWidth: "100%", maxHeight: "400px" }}
        />
      )}
      {uploadComplete && !loading && <CaptionEditor fileType={file?.type} />}
      {metadata && <MetadataDisplay metadata={metadata} />}
      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
};
