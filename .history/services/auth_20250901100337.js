import api from "./axios";

const rEgister = async (username, password,currentPassword) => {
  try {
    const response = await api.post("auth/register", { username, password });
    return { response };
  } catch (error) {
    return { error };
  }
};

const loginn = async (username, password) => {
  try {
    const response = await api.post("auth/login", { username, password });
    return {response}
  } catch (error) {
    return { error };
  }
};

export { rEgister , loginn };
