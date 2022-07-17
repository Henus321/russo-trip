import './loader.styles.scss';
import loader from '../../assets/loader.gif';

const Loader = () => {
  return <img src={loader} alt="spinner" className="loader"></img>;
};

export default Loader;
