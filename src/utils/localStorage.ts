export const obtenerLocalStorage = () => {
  const userData = localStorage.getItem('user');
  if (!userData) {
    return undefined;
  }
  return JSON.parse(userData);
};

export const guardarLocalStorage = (state: any) => {
  const userData = JSON.stringify(state);
  localStorage.setItem('user', userData);
};
