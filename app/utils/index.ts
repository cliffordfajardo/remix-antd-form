export const removeEmptyValuesFromObject = (object: Record<string, any>) => {
  Object.keys(object).forEach((key) => {
    const isEmptyEntry = Boolean(object[key]) === false;
    if (isEmptyEntry) {
      delete object[key];
    }
  });
  return object;
};
