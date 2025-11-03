import "/src/style/global.css";
import "/src/style/about.css";
import jakob from '../../assets/placeholder.png';
import nils from '../../assets/placeholder.png';
import stella from '../../assets/placeholder.png';
import joel from '../../assets/placeholder.png';
import fanny from '../../assets/placeholder.png'

export function AboutUsView() { 
  return (
    <div className="about-container">
      <div className="glass-panel">
        <center>
          <h1 className="title">About Us</h1>
          <p className="description">
            We are five KTH students and this project is a fun little movie
            recommender.
          </p>
          <h2 className="subtitle">Group Members</h2>
          <div className="profiles">
            <div className="profile">
              <img src={jakob} width="120" />
              <p>Jakob</p>
            </div>
            <div className="profile">
              <img src={nils} width="120" />
              <p>Nils</p>
            </div>
            <div className="profile">
              <img src={fanny} width="120" />
              <p>Fanny</p>
            </div>
            <div className="profile">
              <img src={joel} width="120" />
              <p>Joel</p>
            </div>
            <div className="profile">
              <img src={stella} width="120" />
              <p>Stella</p>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}