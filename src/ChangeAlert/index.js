import React from "react";
import { withStorageListener } from "./withStorageListener";
import { Modal } from "../Modal";
import { ReloadIcon } from "./ReloadIcon";
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
