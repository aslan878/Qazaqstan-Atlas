import { useState } from "react";
import "./KZpages.css";
import { Sprout, Landmark, Drama, ChartLine } from "lucide-react";
import Overview from "./MainParts/overview";
import Nature from "./MainParts/nature";
import Culture from "./MainParts/culture";
import Economy from "./MainParts/economy";

function KZgenerally() {
  const tabs = [
    { value: "overview", label: "Overview", icon: <Landmark /> },
    { value: "nature", label: "Nature", icon: <Sprout /> },
    { value: "culture", label: "Culture", icon: <Drama /> },
    { value: "economy", label: "Economy", icon: <ChartLine /> },
  ];
  const [active, setActive] = useState("overview");
  return (
    <div className="KZgenerally">
      <div className="title-group NameImg">
        <h2 className="KZUN UTN">KAZAKHSTAN</h2>
        <p className="KZLN UTN2">QAZAQSTAN RESPUBLIKASY</p>
      </div>

      <div className="radio-input">
        <nav
          style={{
            display: "flex",
            background: "#2c2016",
            borderBottom: "2px solid #c8922a",
            fontFamily: "'Cinzel', serif",
          }}
        >
          {tabs.map(({ value, label, icon }) => {
            const isActive = active === value;
            return (
              <button
                key={value}
                onClick={() => setActive(value)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 5,
                  padding: "8px 29px 7px",
                  cursor: "pointer",
                  background: isActive ? "#4a2e10" : "transparent",
                  color: isActive ? "#f0c060" : "#a08060",
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  border: "none",
                  boxShadow: isActive ? "inset 0 -3px 0 #c8922a" : "none",
                  borderBottom: "3px solid transparent",
                  borderBottomColor: isActive ? "#c8922a" : "transparent",
                  transition: "all 0.45s",
                }}
              >
                <span style={{ fontSize: 24, lineHeight: 1 }}>{icon}</span>
                {label}
              </button>
            );
          })}
        </nav>
        {active === "overview" && <Overview />}
        {active === "nature" && <Nature />}
        {active === "culture" && <Culture />}
        {active === "economy" && <Economy />}
      </div>
    </div>
  );
}

export default KZgenerally;
