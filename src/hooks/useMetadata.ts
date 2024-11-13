import { useState, useEffect } from 'react';
import axios from 'axios';

export const useMetadata = (fileName: string | undefined, fileType: string | undefined) => {
  const [metadata, setMetadata] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!fileName || !fileType) return;

    const fetchMetadata = async () => {
      setLoading(true);
      try {
        const url = fileType.startsWith('image')
          ? `https://api.unsplash.com/search/photos`
          : `https://api.pexels.com/videos/search`;

        console.log(`Fetching from: ${url} with query: ${fileName}`);   

        const response = fileType.startsWith('image')
          ? await axios.get(url, {
              headers: {
                Authorization: `Client-ID kPN9L6e2k1-Tr9DUHdTf_sGMYghvTLJSc5gwO1ryzv4`,
              },
              params: { query: fileName },
            })
          : await axios.get(url, {
              headers: {
                Authorization: `Bearer 3INZElO6EnihTSENAWrebcHK5L1PqJHCvfEd6E6L2vUSUKMze7Xlbnkv`,
              },
              params: { query: fileName },
            });

        setMetadata(response.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();
  }, [fileName, fileType]);

  return { metadata, loading, error };
};
