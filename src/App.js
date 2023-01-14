import "./App.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

//console.log(AlexaImage,CortanaImage, SiriImage);

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="her-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      
     
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                platform="Amazon"
                color="blue"
                image={AlexaImage}
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                platform="Windows"
                color="green"
                image={CortanaImage}
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                platform="Apple"
                color="red"
                image={SiriImage}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
