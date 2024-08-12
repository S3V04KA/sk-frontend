import './Tabs.scss'
import Tab from "./Tab";

function Tabs({activeTab, setActiveTab}: {activeTab: number, setActiveTab: (activeTab: number) => void}) {
  return (
    <>
      <div className="tabs">
        <Tab title={"Проекты"} active={activeTab === 0} onClick={() => setActiveTab(0)}/>
        <Tab title={"Моя команда"} active={activeTab === 1} onClick={() => setActiveTab(1)}/>
      </div>
    </>
  );
}

export default Tabs;
