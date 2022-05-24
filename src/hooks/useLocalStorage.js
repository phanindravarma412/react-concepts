const useLocalStorage = () => {
  const getStorageItemValue = (key) => {
    const item = window.localStorage.getItem(key);

    return item;
  };

  const updateStorageItemValue = (key, value) => {
    window.localStorage.setItem(key, value);
  };

  const removeStorageItem = (key) => {
    window.localStorage.removeItem(key);
  };

  return { getStorageItemValue, updateStorageItemValue, removeStorageItem };
};

export default useLocalStorage;
