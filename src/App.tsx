import React from 'react';
import { MediaUpload } from './components/MediaUpload';


const App: React.FC = () => {
  return (
    <div>
      <h1>Media Uploader with Captions and Metadata Fetcher</h1>
      <MediaUpload />
    </div>
  );
};

export default App;
