import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Table from './table';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';
import Comparison from "./pages/comparison";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// https://stackoverflow.com/questions/71201741/how-to-use-font-awesome-6-icons

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  return (
    <div className="h-100 d-flex flex-column">
      <header className="p-3 d-flex">
        <i className="fa-solid fa-bars d-flex align-items-center"
          onClick={_ => setShowSidebar(v => !v)}/>
        <div className="ms-3 logo">ãcme</div>
      </header>
      <div className="h-100 d-flex">
        {showSidebar && <Sidebar links={[
          {
            path: "/",
            label: "Home",
            icon: ["solid", "house"]
          },
          {
            path: "/analysis",
            label: "Analysis",
            icon: ["solid", "chart-line"],
            children: [
              {
                path: "/survey-report",
                label: "Survey report"
              },
              {
                path: "/comparison",
                label: "Comparison",
              },
              {
                path: "/custom-polls",
                label: "Custom polls"
              }
            ]
          },
          {
            path: "/feedback",
            label: "Feedback",
            icon: ["solid", "comment"]
          },
          {
            path: "/goals",
            label: "Goals",
            icon: ["solid", "bullseye"]
          }
        ]} />}
        <div style={{
          width: showSidebar ? "calc(100% - 200px)" : "100%"
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
