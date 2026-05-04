import { useState } from "react";
import "./App.css";
import Map from "./assets/KZmap";
import KZflag from "./assets/KZflag.jpg";
import KZgenerally from "./pages/KZgenerally";
import RegionPage from "./pages/RegionPage";

function App() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleRegionClick = (regionName: string | null) => {
    setSelectedRegion(regionName);
    console.log(regionName);
  };

  return (
    <div className="app-layout">
      <div className="LeftSide">
        <div className="Lheader">
          <img src={KZflag} alt="Kazakhstan Flag" className="kz-flag" />
          <div
            className="title-group"
            onClick={() => setSelectedRegion(null)}
            style={{ cursor: "pointer" }}
          >
            <h2 className="KZUN">KAZAKHSTAN</h2>
            <p className="KZLN">
              {selectedRegion
                ? `SELECTED: ${selectedRegion.toUpperCase()}`
                : "REPUBLIC OF KAZAKHSTAN"}
            </p>
          </div>
        </div>
        <div
          className="App-map-container"
          style={{ width: "100%", maxWidth: 975, margin: "0 auto" }}
        >
          <Map onRegionClick={handleRegionClick} />
        </div>
      </div>
      <div className="RightSide">
        <div className="Rheader">
          <div className="title-group">
            <p className="KZURN">2 724 900 km²</p>
            <h2 className="KZLRN L40">Area</h2>
          </div>
          <div className="title-group tg2">
            <p className="KZURN">20.5 mln</p>
            <h2 className="KZLRN L6">Population</h2>
          </div>
          <div className="title-group tg2">
            <p className="KZURN">Astana</p>
            <h2 className="KZLRN L10">Capital</h2>
          </div>
        </div>
        {!selectedRegion && <KZgenerally />}
        {selectedRegion && (
          <RegionPage
            regionName={selectedRegion}
            onBack={() => setSelectedRegion(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
