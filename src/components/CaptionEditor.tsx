import React from "react";
import { useCaptions } from "../hooks/useCaptions";

interface CaptionEditorProps {
  fileType: string | undefined;
}

export const CaptionEditor: React.FC<CaptionEditorProps> = ({ fileType }) => {
  const { captions, addCaption, updateCaption, deleteCaption } = useCaptions();
  const [captionChange, setCaptionChange] = React.useState<
    { id: number; text: string }[]
  >([]);

  const handleAddCaption = () => {
    const newCaption = { id: Date.now(), text: "New Caption", timeOrRegion: 0 };
    addCaption(newCaption);
  };

  const handleSaveCaption = (id: number, newText: string) => {
    const existingCaption = captions.find((caption) => caption.id === id);
    if (existingCaption) {
      updateCaption({
        id,
        text: newText,
        timeOrRegion: existingCaption.timeOrRegion,
      });
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <button 
        onClick={handleAddCaption} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Add Caption
      </button>
      {captions.map((caption) => (
        <div key={caption.id} className="mb-4 p-2 bg-white rounded shadow">
          <input
            type="text"
            defaultValue={caption.text}
            onChange={(e) =>
              setCaptionChange((prev) => [
                ...prev.filter((c) => c.id !== caption.id),
                { id: caption.id, text: e.target.value },
              ])
            }
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="mt-2 text-gray-700">{caption.text}</p>
          <div className="mt-2 flex space-x-2">
            <button
              onClick={() =>
                handleSaveCaption(
                  caption.id,
                  captionChange.find((c) => c.id === caption.id)?.text || ""
                )
              }
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
            >
              Save
            </button>
            <button 
              onClick={() => deleteCaption(caption.id)} 
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
