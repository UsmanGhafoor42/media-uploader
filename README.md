Here’s a comprehensive `README.md` file for your GitHub repository, tailored to your project. It includes setup instructions, a summary of the application, technology stack details, and usage instructions.

---

# Media Uploader with Caption and Metadata Fetcher

This project is a TypeScript React application that allows users to upload media files (images or videos), add captions, and fetch metadata from external APIs based on the media type. It demonstrates skills in React state management, hooks, file handling with progress tracking, API integration, and conditional rendering.

## Features

- **File Upload with Progress Tracking**: Upload image or video files with a dynamic progress bar.
- **Caption Editor**: 
  - For videos: Add captions at specific timestamps.
  - For images: Add captions at specific regions.
- **Metadata Fetcher**: Fetch and display related metadata from external APIs (e.g., Unsplash for images, Pexels for videos).
- **Save and Reset**: Save captions and metadata in the local state and reset media preview as needed.

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Optional Backend**: An Express server can be set up for file handling (not required for this project).

## Components and Custom Hooks

### Components

1. **MediaUpload**: Handles file selection, upload progress, and API calls.
2. **CaptionEditor**: Manages adding, editing, and deleting captions.
3. **MetadataDisplay**: Shows fetched metadata in a structured format.

### Custom Hooks

1. **useUpload**: Manages file upload state and progress tracking.
2. **useCaptions**: Handles caption operations (add, update, delete).
3. **useMetadata**: Manages metadata fetching and stores API response data.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   https://github.com/UsmanGhafoor42/media-uploader.git
   cd media-uploader-with-captions
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Tailwind CSS**
   If Tailwind CSS is not already installed, follow these commands:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   Add the following to `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. **Configure Tailwind in `index.css`**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **API Keys**
   For full functionality, you'll need API keys from:
   - **Unsplash API** (for image metadata): [Sign up here](https://unsplash.com/developers)
   - **Pexels Video API** (for video metadata): [Sign up here](https://www.pexels.com/api/)
   
   Create a `.env` file in the root directory and add:
   ```plaintext
   REACT_APP_UNSPLASH_API_KEY=your_unsplash_api_key
   REACT_APP_PEXELS_API_KEY=your_pexels_api_key
   ```

6. **Run the Application**
   ```bash
   npm start
   ```

## Usage Instructions

1. **Upload Media**: Click on the upload input and select an image or video file. A progress bar will display the upload progress.
2. **Add Captions**:
   - For **Videos**: Add captions based on timestamps.
   - For **Images**: Click on specific regions to add captions.
3. **Fetch Metadata**: The application fetches metadata after the upload completes, displaying it below the media preview.
4. **Save and Reset**: Use the Save button to save current captions and metadata, and Reset to clear all inputs and start fresh.

## Folder Structure

```plaintext
src/
├── components/
│   ├── CaptionEditor.tsx
│   ├── MediaUpload.tsx
│   └── MetadataDisplay.tsx
├── hooks/
│   ├── useCaptions.ts
│   ├── useMetadata.ts
│   └── useUpload.ts
└── App.tsx
```

## Known Limitations

- **Backend Upload**: This app simulates file upload. You may set up a simple Express server for real uploads if needed.
- **Error Handling**: The app displays API errors but may need further refinement for specific error cases.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to customize the placeholders for links, your GitHub URL, and any other details. Let me know if you'd like additional sections!
