import { useContext } from 'react';
import { CompanyContext } from '../../contexts/company.context';
import { v4 as uuidv4 } from 'uuid';

import './team.styles.scss';

const Team = () => {
  const { cities } = useContext(CompanyContext);

  return (
    <main className="team">
      {cities &&
        cities.map((city) => (
          <div className="team__column" key={uuidv4()}>
            <h2 className="team__title">Team {city.title}</h2>
            <span className="team__under-title">Guides and Instructors</span>
            <img
              className="team__background"
              src={city.imageUrl}
              alt={city.title}
            />
            <ul className="team__row">
              {city.guides &&
                city.guides.map((guide) => (
                  <li className="team__list-item" key={uuidv4()}>
                    <img className="team__img" src={guide.photoUrl} alt="" />
                    <div className="team__text-container">
                      <h2 className="team__item-title">{guide.name}</h2>
                      <span className="team__type">{guide.type}</span>
                      <p className="team__description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eaque ducimus optio voluptate ipsum aut dolorem
                        doloremque aliquid cum sequi quia sint blanditiis,
                        inventore consequuntur, repellendus minima aliquam fuga!
                        Similique, dicta. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nostrum tenetur aliquam quisquam
                        libero natus voluptas saepe architecto, amet
                        reprehenderit totam animi dolore. Libero laborum.
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </main>
  );
};

export default Team;
