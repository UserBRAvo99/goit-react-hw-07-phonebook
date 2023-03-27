import axios from 'axios';

axios.defaults.baseURL = 'https://6421a8b034d6cd4ebd78e8ca.mockapi.io';

const fetchTasks = () => async dispatch => {
  try {
    const response = await axios.get('/tasks');
  } catch (e) {}
};
