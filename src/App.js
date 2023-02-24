import "./styles.scss";
import { ReactComponent as EmpireIcon } from "./assets/svg/empire-icon.svg";
import image1 from "./assets/images/001.jpg";

export default function App() {
  return (
    <div className="starWars">
      <div className="starWarsBody">
        <div className="description">
          <EmpireIcon className="icon" width="80" height="80" />
          <h2 className="title">L'empire contre-attaque</h2>
          <p className="paragraph">
            La guerre entre le maléfique Empire galactique et son antagoniste,
            l’Alliance rebelle, bat son plein.
          </p>
          <p className="date">1980</p>
        </div>
        <div className="starWarsImage">
          <img src={image1} alt="l'empire contre attaque" />
        </div>
      </div>
      <div className="starWarsFooter"></div>
    </div>
  );
}
