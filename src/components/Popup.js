import React, { useState } from 'react';

function Popup({ isOpen, onClose, onSubmit }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    if (inputText.trim()) {
      onSubmit(inputText);
      setInputText("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full"
          placeholder="Enter task..."
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          autoFocus
        />
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 border-2 border-black rounded-lg hover:bg-gray-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 border-2 border-black rounded-lg hover:bg-gray-200"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
