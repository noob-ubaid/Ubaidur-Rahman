import React from "react";

const KeyboardModal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setShowModal(false)}
      className="flex items-center fixed z-50 justify-center w-full min-h-screen bg-black/40 "
    >
      <div className="max-w-3xl h-96">fs</div>
    </div>
  );
};

export default KeyboardModal;
