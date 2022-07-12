import { createContext, useState, useEffect } from 'react';

const citiesList = [
  {
    id: 1,
    title: 'Moscow',
    imageUrl:
      'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    route: 'city/moscow',
    description:
      "The northernmost and coldest megacity in the world, with a history that spans eight centuries, Moscow is governed as a federal city that serves as the political, economic, cultural, and scientific center of Russia and Eastern Europe. The city is one of the fastest-growing tourist destinations in the world, and is one of Europe's most visited cities. Moscow is home to the seventh-highest number of billionaires of any city in the world",
  },
  {
    id: 2,
    title: 'Saint Petersburg',
    imageUrl:
      'https://images.unsplash.com/photo-1503485841041-739cca570294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    route: 'city/saint-petersburg',
    description:
      "Russia's cultural center, it is considered an important economic, scientific, and tourism centre of Russia and Europe. In modern times, the city has the nickname of being 'the Northern Capital of Russia'. It is also the home to the headquarters of the Russian Navy, and the Western Military District of the Russian Armed Forces. Saint Petersburg is home to the Hermitage, one of the largest art museums in the world.",
  },
  {
    id: 3,
    title: 'Altai Krai',
    imageUrl:
      'https://images.unsplash.com/photo-1593948360735-4ddb6f0dde7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    route: 'city/altai-krai',
    description:
      'Altai Krai has rolling foothills, grasslands, lakes, rivers, and mountains. The climate is severe with long cold dry winters and hot, usually dry summers. Altai Krai has rich natural resources, including lumber, as well as significant mineral reserves. This region of Siberia is extremely important due to its biodiversity, an area is recognised by Unesco as a World Heritage Site. The area is home to animals considered rare, including the endangered snow leopard.',
  },
  {
    id: 4,
    title: 'Kazan',
    imageUrl:
      'https://images.unsplash.com/photo-1570720285196-7d31a750b34c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    route: 'city/kazan',
    description:
      'Kazan is renowned for its vibrant mix of Tatar and Russian cultures. One of the largest economic, scientific, educational, religious, cultural and sports centers in Russia. Kazan is located on the left bank of the Volga River, east of Moscow. Due to its favorable geographical location, Kazan has long been a trade intermediary between East and West. The Kazan Kremlin is one of the Unesco World Heritage Sites. The city of Labor valor.',
  },
  {
    id: 5,
    title: 'Vladivostok',
    imageUrl:
      'https://images.unsplash.com/photo-1588931251997-e77c99036a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    route: 'city/vladivostok',
    description:
      "Vladivostok is the largest Russian port on the Pacific Ocean, and the chief economic, scientific and cultural center of the Russian Far East, as well as an important tourism centre in Russia.  For its unique geographical location, and its Russian culture, the city has been called 'Europe in the Orient'. Many foreign consulates and businesses have offices in Vladivostok.",
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
