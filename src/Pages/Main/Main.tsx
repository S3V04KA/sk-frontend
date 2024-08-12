import "./Main.scss";
import Header from "../../Components/Header/Header";
import Tabs from "../../Components/Tabs/Tabs";
import projectsMock from "../../mocks/projects";
import Projects from "../../SubPages/Projects/Projects";
import { useState } from "react";
import Team from "../../SubPages/Team/Team";
import team from "../../mocks/team";

function Main() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 ? (
        <Projects
          projects={projectsMock}
        />
      ) : <Team team={team}/>}
    </>
  );
}

export default Main;
