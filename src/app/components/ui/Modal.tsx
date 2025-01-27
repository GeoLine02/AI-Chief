"use client";

type ModalPropsType = {
  children: React.ReactNode;
  isOpen: boolean;
};

const Modal = ({ children, isOpen }: ModalPropsType) => {
  return (
    <div
      className={`${
        !isOpen
          ? ""
          : "fixed top-0 left-0 bg-opacity-65 bg-black z-50 flex items-center justify-center min-w-full min-h-full"
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
