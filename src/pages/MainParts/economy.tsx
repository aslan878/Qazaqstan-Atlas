import { Factory, Coins, Flame, Zap } from "lucide-react";

export default function Economy() {
  return (
    <>
      <div className="datas">
        <div
          style={{
            position: "relative",
            background: "#f5e9c8",
            border: "0.5px solid #b8873a",
            borderRadius: 3,
            padding: "8px 5px 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            width: 8,
            fontFamily: "'Cinzel', serif",
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 28 }}>
            <Flame />
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
              textAlign: "center"
            }}
          >
            Oil & Gas
          </div>
          <div
            style={{
              width: "60%",
              height: 1,
              background:
                "linear-gradient(to right, transparent, #b8873a, transparent)",
            }}
          />
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#9a6820",
              textTransform: "uppercase",
            }}
          >
            Energy Sector
          </div>
        </div>
        <div
          style={{
            position: "relative",
            background: "#f5e9c8",
            border: "0.5px solid #b8873a",
            borderRadius: 3,
            padding: "8px 5px 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            width: 8,
            fontFamily: "'Cinzel', serif",
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 28 }}>
            <Zap />
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
              textAlign: "center"
            }}
          >
            Uranium
          </div>
          <div
            style={{
              width: "60%",
              height: 1,
              background:
                "linear-gradient(to right, transparent, #b8873a, transparent)",
            }}
          />
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#9a6820",
              textTransform: "uppercase",
            }}
          >
            Global Leader
          </div>
        </div>
        <div
          style={{
            position: "relative",
            background: "#f5e9c8",
            border: "0.5px solid #b8873a",
            borderRadius: 3,
            padding: "8px 5px 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 20,
            gap: 8,
            width: 8,
            fontFamily: "'Cinzel', serif",
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 28 }}>
            <Coins />
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
              textAlign: "center"
            }}
          >
            Tenge
          </div>
          <div
            style={{
              width: "60%",
              height: 1,
              background:
                "linear-gradient(to right, transparent, #b8873a, transparent)",
            }}
          />
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#9a6820",
              textTransform: "uppercase",
            }}
          >
            Currency (KZT)
          </div>
        </div>
        <div
          style={{
            position: "relative",
            background: "#f5e9c8",
            border: "0.5px solid #b8873a",
            borderRadius: 3,
            padding: "8px 5px 8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 20,
            gap: 8,
            width: 8,
            fontFamily: "'Cinzel', serif",
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 28 }}>
            <Factory />
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
              textAlign: "center"
            }}
          >
            AIFC
          </div>
          <div
            style={{
              width: "60%",
              height: 1,
              background:
                "linear-gradient(to right, transparent, #b8873a, transparent)",
            }}
          />
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#9a6820",
              textTransform: "uppercase",
            }}
          >
            Financial Hub
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginTop: 15,
          width: "90%",
          marginLeft: "5%",
        }}
      >
        <div style={{ flex: 1, height: 1, background: "#C4622D" }} />
        <span style={{ color: "#C4622D", fontSize: 12 }}>ECONOMIC POWER</span>
        <div style={{ flex: 1, height: 1, background: "#C4622D" }} />
      </div>
      <div
        style={{
          position: "relative",
          background: "#f5e9c8",
          border: "0.5px solid #b8873a",
          borderRadius: 3,
          padding: "8px 5px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 20,
          gap: 8,
          width: 400,
          fontFamily: "'Cinzel', serif",
          marginLeft: 40,
        }}
      >
        <div />
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#000000",
            textTransform: "uppercase",
          }}
        >
          As the largest economy in Central Asia, Kazakhstan is transforming 
          from a resource-based nation into a diversified regional hub for 
          finance, technology, and logistics.
        </div>
      </div>
      <div className="MiniF">
        GDP — the highest in the Central Asian region
      </div>
      <div className="MiniF">Natural Resources — over 99 elements from the periodic table</div>
      <div className="MiniF">
        Foreign Investment — leader in attracting FDI in Central Asia
      </div>
      <div className="MiniF">
        Digital Transformation — rapid growth in GovTech and FinTech
      </div>
      <div className="MiniF buttum">
        AIFC — world-class financial center in the heart of Eurasia
      </div>
    </>
  );
}
