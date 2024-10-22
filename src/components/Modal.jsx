import { createContext, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../hooks/useClickOutside";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ renderButton, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return renderButton(() => {
    open(opensWindowName);
  });
}

function Window({ renderWindowChildren, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();
  useClickOutside(ref, close);

  if (name !== openName) return null;

  return createPortal(
    <div>
      <div ref={ref}>
        <button onClick={close}>X</button>
        <div>{renderWindowChildren(close)}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
