import { useState, useEffect } from 'react';

export const useUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploadComplete, setUploadComplete] = useState<boolean>(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
    setProgress(0);
    setUploadComplete(false);
  };

  const startUpload = () => {
    if (!file) return;

    const uploadInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(uploadInterval);
          setUploadComplete(true);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);
  };

  useEffect(() => {
    if (file) startUpload();
  }, [file]);

  return { file, progress, handleFileSelect, uploadComplete };
};
