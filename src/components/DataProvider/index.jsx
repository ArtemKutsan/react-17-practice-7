// src/componets/DataProvider/index.jsx
import { useState, useEffect } from 'react';
import DataContext from '../../context/data-context';
import axios from 'axios';

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  return <DataContext.Provider value={{ data, fetchData }}>{children}</DataContext.Provider>;
};

export default DataProvider;
