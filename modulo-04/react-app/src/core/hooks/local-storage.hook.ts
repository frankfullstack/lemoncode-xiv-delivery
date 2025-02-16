import { useState } from "react";

export const useLocalStorage = (key: string) => {
  const readLocalStorageItem = () => {
    if (!window) return;
    try {
      const result = window.localStorage.getItem(key);
      return result ? JSON.parse(result) : undefined;
    } catch (error) {
      console.error(`Error retrieving local storage value for ${key}: ${error}`);
      return undefined;
    }
  };

  const [localStorageItem, setLocalStorageItem] = useState(readLocalStorageItem);

  const storeLocalStorageItem = (value: string) => {
    setLocalStorageItem(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const removeLocalStorageItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing the local storage value for ${key}: ${error}`);
    }
  };

  return {
    localStorageItem,
    storeLocalStorageItem,
    removeLocalStorageItem,
  };
};
