import pathToRegexp from 'path-to-regexp';

export const getLocalKey = (key, defaultValue) => {
  const item = window.localStorage.getItem(key);
  if (item === undefined && defaultValue !=undefined) {
    return defaultValue;
  }
  return item;
};
