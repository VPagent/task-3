const set = (key: string, data: any) => {
  const stringData = JSON.stringify(data);
  localStorage.setItem(key, stringData);
};

const get = (key: string) => {
  const result = JSON.parse(localStorage.getItem(key) as string);

  return result;
};

export const storage = {
  get,
  set,
};
