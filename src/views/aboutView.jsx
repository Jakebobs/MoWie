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
              <p>Jakob</p>
              <p>jakstrom@kth.se</p>
            </div>
            <div className="profile">
              <p>Nils</p>
              <p>nilsww@kth.se</p>
            </div>
            <div className="profile">
              <p>Fanny</p>
              <p>fawe@kth.se</p>
            </div>
            <div className="profile">
              <p>Joel</p>
              <p>juddin@kth.se</p>
            </div>
            <div className="profile">
              <p>Stella</p>
              <p>stehuy@kth.se</p>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}