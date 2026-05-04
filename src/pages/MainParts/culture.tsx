import { Music, Home, Users, Palette } from "lucide-react";

export default function Culture() {
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
            <Music />
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
            Dombra
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
            National Instrument
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
            <Home />
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
            Yurt
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
            Nomadic Home
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
            <Users />
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
            Nauryz
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
            Spring Holiday
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
            <Palette />
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
            Art & Crafts
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
            Heritage
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
        <span style={{ color: "#C4622D", fontSize: 12 }}>CULTURAL SPIRIT</span>
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
          The soul of Kazakhstan is woven from nomadic traditions and modern 
          dynamism, where hospitality is a sacred duty and the wisdom of 
          ancestors continues to guide the nation's progress.
        </div>
      </div>
      <div className="MiniF">
        Nomadic Roots — ancient traditions of horse-riding and yurt dwelling
      </div>
      <div className="MiniF">National Cuisine — Beshbarmak, Kazy, and Baursaks</div>
      <div className="MiniF">
        Hospitality — "Konakzhaylylyk" is central to the Kazakh identity
      </div>
      <div className="MiniF">
        Oral Tradition — the art of Aitys and epic storytelling
      </div>
      <div className="MiniF buttum">
        Modern Art — blending traditional motifs with contemporary styles
      </div>
    </>
  );
}
