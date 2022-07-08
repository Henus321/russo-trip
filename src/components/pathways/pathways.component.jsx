import PathwayItem from '../pathway-item/pathway-item.component';

import './pathways.styles.scss';

const cities = [
  {
    id: 1,
    title: 'Moscow',
    imageUrl:
      'https://images.unsplash.com/photo-1576413326475-ea6c788332fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
    route: 'city/moscow',
  },
  {
    id: 2,
    title: 'Saint Petersburg',
    imageUrl:
      'https://images.unsplash.com/photo-1603732547557-b8f216d50442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    route: 'city/saint-petersburg',
  },
  {
    id: 3,
    title: 'Vladivostok',
    imageUrl:
      'https://images.unsplash.com/photo-1643281237869-90f896c8fd6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    route: 'city/vladivostok',
  },
  {
    id: 4,
    title: 'Altai Republic',
    imageUrl:
      'https://images.unsplash.com/photo-1615364989603-7c575b346199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    route: 'city/altai-republic',
  },
  {
    id: 5,
    title: 'Kazan',
    imageUrl:
      'https://images.unsplash.com/photo-1504615458222-979e04d69a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    route: 'city/kazan',
  },
];

const Pathways = () => {
  return (
    <div className="pathways">
      <div className="pathways__title-container">
        <h2 className="pathways__title">Pathways</h2>
      </div>
      <div className="pathways__hashtags-container">
        <span className="pathways__span">Filter:</span>
        <ul className="pathways__hastags-list">
          <li className="pathways__hastags-item">#All</li>
          <li className="pathways__hastags-item">#Moscow</li>
          <li className="pathways__hastags-item">#Vladivostok</li>
          <li className="pathways__hastags-item">#Saint-Petersburg</li>
          <li className="pathways__hastags-item">#Mythishi</li>
        </ul>
      </div>

      <div className="pathways__list">
        {cities.map((city) => (
          <PathwayItem key={city.id} city={city} />
        ))}
      </div>

      <div className="pathways__pagination-btns">
        <button className="btn pathways__btn">Show More</button>
      </div>
    </div>
  );
};

export default Pathways;

//   return (
//     <div className="pathways">
//       <div className="pathways__title-container">
//         <h2 className="pathways__title">Pathways</h2>
//       </div>
//       <div className="pathways__hashtags-container">
//         <span className="pathways__span">Filter:</span>
//         <ul className="pathways__hastags-list">
//           <li className="pathways__hastags-item">#All</li>
//           <li className="pathways__hastags-item">#Moscow</li>
//           <li className="pathways__hastags-item">#Vladivostok</li>
//           <li className="pathways__hastags-item">#Saint-Petersburg</li>
//           <li className="pathways__hastags-item">#Mythishi</li>
//         </ul>
//       </div>

//       <div className="pathways__list">
//         {ready &&
//           pathwaysInfo.moscow.map((path) => (
//             <PathwayItem
//               key={path.id}
//               imageUrl={path.imageUrl}
//               name={path.name}
//             />
//           ))}
//       </div>

//       <div className="pathways__pagination-btns">
//         <button className="btn pathways__btn">Previous Page</button>
//         <button className="btn pathways__btn">Next Page</button>
//       </div>
//     </div>
//   );
// };

// export default Pathways;
