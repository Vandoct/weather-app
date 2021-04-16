export const createBody = (params) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(params)) {
    formData.append(key, value);
  }
  return formData;
};

export const getImageFromFile = (file) => {
  if (file.length === 0) return null;
  return file.files[0];
};

export const isEmptyArray = (arr) => arr === null || arr.length === 0;

export const isObject = (obj) => typeof obj === 'object';

export const isEmptyObject = (obj) => {
  if (obj == null) return true;
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const isObjectPropertyEmtpy = (obj) => {
  const blacklist = ['', 0, false];

  for (const [, value] of Object.entries(obj)) {
    if (Array.isArray(value) && !isEmptyArray(value)) return false;
    if (!Array.isArray(value) && isObject(value) && !isEmptyObject(value))
      return false;
    if (!Array.isArray(value) && !isObject(value) && !blacklist.includes(value))
      return false;
  }

  return true;
};

export const generateToken = () => {
  return (
    Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
  );
};
