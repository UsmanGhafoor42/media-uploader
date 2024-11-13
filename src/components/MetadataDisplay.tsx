import React from 'react';

interface MetadataDisplayProps {
  metadata: any;
}

export const MetadataDisplay: React.FC<MetadataDisplayProps> = ({ metadata }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Metadata</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm text-gray-700">
        {JSON.stringify(metadata, null, 2)}
      </pre>
    </div>
  );
};
