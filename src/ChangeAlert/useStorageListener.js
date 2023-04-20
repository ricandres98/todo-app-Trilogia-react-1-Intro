import React from "react";

function useStorageListener(sincronizeTodos) {
  const [storageChange, setStorageChange] = React.useState(false);

  React.useEffect(() => {
    const onChange = (change) => {
      if (change.key === "TODOS_V1") {
        console.log("Hubo cambios");
        setStorageChange(true);
      }
    };
    window.addEventListener("storage", onChange);
    return () => window.removeEventListener("storage", onChange);
  }, []);

  const toggleShow = () => {
    sincronizeTodos();
    setStorageChange(false);
  };

  return { show: storageChange, toggleShow };
}

export { useStorageListener };
