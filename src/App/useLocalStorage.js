import React from "react";

export function useLocalStorage (itemName, initialValue) {
    const [syncronizedItem, setSyncronizedItem] = React.useState(true);
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
          setLoading(false);
          setSyncronizedItem(true);
        } catch(error) {
          setError(error)
        }
      }, 1000)
    },[itemName, syncronizedItem]);
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    };

    const sincronize = () => {
      setLoading(true);
      setSyncronizedItem(false);
    }
  
    return { item, saveItem, loading, error, sincronize, syncronizedItem };
  }