import { Trees, Mountain, CloudSun, Waves } from "lucide-react";

export default function Nature() {
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
            <Mountain />
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
            Khan Tengri
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
            Highest Peak
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
            <Waves />
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
            Caspian Sea
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
            Inland Water
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
            <Trees />
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
            Steppe & Forest
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
            Diverse Flora
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
            <CloudSun />
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
            Extreme
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
            Climate
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
        <span style={{ color: "#C4622D", fontSize: 12 }}>NATURAL HERITAGE</span>
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
          Kazakhstan's nature is a tapestry of contrasts, where sun-scorched 
          deserts meet snow-capped peaks, and endless steppes hide crystal 
          lakes of immense beauty and ecological significance.
        </div>
      </div>
      <div className="MiniF">
        Altai Mountains — home to unique biodiversity and rare species
      </div>
      <div className="MiniF">Charyn Canyon — breathtaking geological formations</div>
      <div className="MiniF">
        Lake Balkhash — a unique semi-freshwater, semi-saltwater lake
      </div>
      <div className="MiniF">
        UNESCO Sites — Saryarka and Western Tien-Shan
      </div>
      <div className="MiniF buttum">
        Snow Leopard — the majestic national symbol of Kazakhstan's mountains
      </div>
    </>
  );
}
