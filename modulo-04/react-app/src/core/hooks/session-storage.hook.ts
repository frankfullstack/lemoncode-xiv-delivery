import { useState } from "react";

export const useSessionStorage = (key: string) => {
  const readSessionItem = () => {
    if (!window) return;
    try {
      const result = window.sessionStorage.getItem(key);
      return result ? JSON.parse(result) : undefined;
    } catch (error) {
      console.error(`Error retrieving session value for ${key}: ${error}`);
      return undefined;
    }
  };

  const [sessionItem, setSessionItem] = useState(readSessionItem);

  const storeSessionItem = (value: string) => {
    setSessionItem(value);
    window.sessionStorage.setItem(key, JSON.stringify(value));
  };

  const removeSessionItem = () => {
    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing the session value for ${key}: ${error}`);
    }
  };

  return {
    sessionItem,
    storeSessionItem,
    removeSessionItem,
  };
};
