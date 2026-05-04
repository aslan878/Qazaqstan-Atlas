import { Earth, DollarSign } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { faKakaoTalk } from "@fortawesome/free-brands-svg-icons";
export default function Overview() {
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
            maxHeight: 200,
          }}
        >
          <div style={{ fontSize: 28 }}>
            <Earth />
          </div>
          <div
            style={{
              fontSize: 20,
              marginLeft: 35,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
            }}
          >
            9th largest country
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
            Size
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
            <FontAwesomeIcon icon={faDove} />
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
            }}
          >
            16.12.1991
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
            Independence
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
            <DollarSign />
          </div>
          <div
            style={{
              fontSize: 20,
              marginLeft: 35,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
            }}
          >
            $13 000
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
            GDP per cap.
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
            <FontAwesomeIcon icon={faKakaoTalk} />
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
            }}
          >
            Kazakh
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
            Official lang.
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
        <span style={{ color: "#C4622D", fontSize: 12 }}>KEY FACTS</span>
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
          Kazakhstan is the world's largest landlocked country. Situated in the
          heart of Eurasia along the ancient Silk Road, it is a land of nomads,
          vast resources and age-old traditions.
        </div>
      </div>
      <div className="MiniF">
        9th largest country in the world — 2,724,900 km²
      </div>
      <div className="MiniF">Occupies the greater part of Central Asia</div>
      <div className="MiniF">
        World's top uranium producer — over 43% of global output
      </div>
      <div className="MiniF">
        Baikonur Cosmodrome — launch site of the first human spaceflight
      </div>
      <div className="MiniF buttum">
        More than 130 nationalities live in the country
      </div>
    </>
  );
}
