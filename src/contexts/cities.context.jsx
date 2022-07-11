import { createContext, useState, useEffect } from 'react';

const citiesList = [
  {
    id: 1,
    title: 'Moscow',
    imageUrl:
      'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    route: 'city/moscow',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet numquam a reiciendis natus harum, quod sed? Repudiandae cumque impedit ducimus sint. Nam, quia voluptas maiores nemo soluta repellendus quaerat.',
  },
  {
    id: 2,
    title: 'Saint Petersburg',
    imageUrl:
      'https://images.unsplash.com/photo-1503485841041-739cca570294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    route: 'city/saint-petersburg',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet numquam a reiciendis natus harum, quod sed? Repudiandae cumque impedit ducimus sint. Nam, quia voluptas maiores nemo soluta repellendus quaerat.',
  },
  {
    id: 3,
    title: 'Altai Krai',
    imageUrl:
      'https://images.unsplash.com/photo-1593948360735-4ddb6f0dde7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    route: 'city/altai-krai',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet numquam a reiciendis natus harum, quod sed? Repudiandae cumque impedit ducimus sint. Nam, quia voluptas maiores nemo soluta repellendus quaerat.',
  },
  {
    id: 4,
    title: 'Kazan',
    imageUrl:
      'https://images.unsplash.com/photo-1570720285196-7d31a750b34c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    route: 'city/kazan',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet numquam a reiciendis natus harum, quod sed? Repudiandae cumque impedit ducimus sint. Nam, quia voluptas maiores nemo soluta repellendus quaerat.',
  },
  {
    id: 5,
    title: 'Vladivostok',
    imageUrl:
      'https://images.unsplash.com/photo-1588931251997-e77c99036a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    route: 'city/vladivostok',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet numquam a reiciendis natus harum, quod sed? Repudiandae cumque impedit ducimus sint. Nam, quia voluptas maiores nemo soluta repellendus quaerat.',
  },
];

export const CitiesContext = createContext({
  cities: [],
});

// Temporary solution
export const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setCities(citiesList);
  }, []);

  const value = {
    cities,
  };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
};
