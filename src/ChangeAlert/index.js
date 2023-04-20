import React from "react";
import { useStorageListener } from "./useStorageListener";
import { Modal } from "../Modal";
import { ReloadIcon } from "./ReloadIcon";
import './ChangeAlert.css';

function ChangeAlert({ sincronizeTodos }) {
  const { show, toggleShow } = useStorageListener(sincronizeTodos);

  if (show) {
    return (
      <Modal>
        <div className="ChangeAlert">
          <p>Parece que hubo algunos cambios</p>
          <ReloadIcon />
          <button onClick={() => toggleShow(false)}>
            Recargar
          </button>
        </div>
      </Modal>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
