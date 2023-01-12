import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div className="App">
      <div>Personal Digital Assistants</div>
      <hr />
      <hr />
      <div>
        {" "}
        <ProfileCard title="Alexa" handle="@alexa99" platform ="Amazon" color ="blue" />
      </div>
      <hr />
      <div>
        {" "}
        <ProfileCard title="Cortana" handle="@cortana32" platform ="Windows" color ="green" />
      </div>
      <hr />
      <div>
        {" "}
        <ProfileCard title="Siri" handle="@siri01" platform ="Apple" color ="red" />
      </div>
    </div>
  );
}

export default App;
