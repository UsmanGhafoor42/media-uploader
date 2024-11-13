import { useReducer } from 'react';

interface Caption {
  id: number;
  text: string;
  timeOrRegion: number;
}

type Action =
  | { type: 'add'; payload: Caption }
  | { type: 'update'; payload: Caption }
  | { type: 'delete'; payload: number };

const captionsReducer = (state: Caption[], action: Action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'update':
      return state.map((caption) =>
        caption.id === action.payload.id ? action.payload : caption
      );
    case 'delete':
      return state.filter((caption) => caption.id !== action.payload);
    default:
      return state;
  }
};

export const useCaptions = () => {
  const [captions, dispatch] = useReducer(captionsReducer, []);

  const addCaption = (caption: Caption) => dispatch({ type: 'add', payload: caption });
  const updateCaption = (caption: Caption) => dispatch({ type: 'update', payload: caption });
  const deleteCaption = (id: number) => dispatch({ type: 'delete', payload: id });

  return { captions, addCaption, updateCaption, deleteCaption };
};
