import "./App.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

//console.log(AlexaImage,CortanaImage, SiriImage);

function App() {
  return (
    <div className ="App">
      <div>Personal Digital Assistants</div>
      <hr />
      <hr />
      <div>
        {" "}
        <ProfileCard title="Alexa" handle="@alexa99" platform ="Amazon" color ="blue"image={AlexaImage} />
      </div>
      <hr />
      <div>
        {" "}
        <ProfileCard title="Cortana" handle="@cortana32" platform ="Windows" color ="green" image={CortanaImage} />
      </div>
      <hr />
      <div>
        {" "}
        <ProfileCard title="Siri" handle="@siri01" platform ="Apple" color ="red" image={SiriImage} />
      </div>
    </div>
  );
}

export default App;
