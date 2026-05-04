import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./KZpages.css";
import "./Regions.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

type RegionInfo = {
  title: string;
  heroClass: string;
  area: string;
  population: string;
  grp: string;
  center: string;
  description: string;
  facts: string[];
};

const REGION_DATA: Record<string, RegionInfo> = {
  "Almaty Region": {
    title: "Almaty oblysy",
    heroClass: "NameImgAlmaty",
    area: "105,900 km²",
    population: "3.96 mln",
    grp: "$91.7B",
    center: "Almaty",
    description:
      "Almaty Region is one of Kazakhstan's key agricultural and logistics territories. It surrounds Almaty city, stretches from the Ili valley to mountain foothills, and connects major domestic and cross-border trade routes.",
    facts: [
      "Administrative center moved from Taldykorgan to Konaev in 2022",
      "Bordering China, it is a major transit gateway",
      "Strong in farming: grain, vegetables, dairy and livestock",
      "Key infrastructure includes Kapchagay reservoir and Ili river basin",
      "Tourism hubs: Charyn area, mountain gorges, and eco-routes",
    ],
  },
  "Akmola Region": {
    title: "Akmola oblysy",
    heroClass: "NameImgAqmola",
    area: "147,000 km²",
    population: "2.45 mln",
    grp: "$50.5B",
    center: "Astana",
    description:
      "Akmola Region is a large steppe and farming territory in northern Kazakhstan. It encircles the national capital and combines grain production, mining, and growing service sectors.",
    facts: [
      "Major wheat and oilseed producer of the country",
      "Close economic integration with Astana agglomeration",
      "Known for Burabay resort and lake landscapes",
      "Important railway and road junctions in central north",
      "Developing food processing and construction materials",
    ],
  },
  "Aqtöbe Region": {
    title: "Aqtobe oblysy",
    heroClass: "NameImgAqtobe",
    area: "300,600 km²",
    population: "0.96 mln",
    grp: "$11.9B",
    center: "Aktobe",
    description:
      "Aqtöbe Region is one of the largest regions by area and an industrial center of western Kazakhstan. It has strong mining and metallurgy sectors and a strategic transit position.",
    facts: [
      "Rich in chromite and other mineral resources",
      "Cross-border transport links with Russia",
      "Large territory with steppe and semi-desert landscapes",
      "Oil and gas activity supports regional growth",
      "Aktobe city is a major education and logistics hub",
    ],
  },
  "Atyrau Region": {
    title: "Atyrau oblysy",
    heroClass: "NameImgAtyrau",
    area: "118,600 km²",
    population: "0.72 mln",
    grp: "$34.5B",
    center: "Atyrau",
    description:
      "Atyrau Region is one of Kazakhstan's main oil-producing territories on the Caspian lowland. Its economy is highly export-oriented and linked to major energy projects.",
    facts: [
      "One of the highest GRP levels per capita in Kazakhstan",
      "Key oil and gas projects shape regional economy",
      "Located at the Europe-Asia transition near the Ural river",
      "Petrochemical and service industries are expanding",
      "Caspian access supports logistics and marine activity",
    ],
  },
  "East Kazakhstan Region": {
    title: "East Kazakhstan oblysy",
    heroClass: "NameImgEastKazakhstan",
    area: "97,800 km²",
    population: "0.72 mln",
    grp: "$12.2B",
    center: "Oskemen",
    description:
      "East Kazakhstan Region is a mountainous and industrial territory with strong metallurgy and hydropower potential. It borders Russia and China, giving it strategic trade relevance.",
    facts: [
      "Strong non-ferrous metallurgy base",
      "Hydropower plants on Irtysh river system",
      "Altai mountain landscapes and rich biodiversity",
      "Important cross-border trade corridors",
      "Oskemen is a key manufacturing center",
    ],
  },
  "Mangystau Region": {
    title: "Mangystau oblysy",
    heroClass: "NameImgMangghystau",
    area: "165,600 km²",
    population: "0.82 mln",
    grp: "$11.7B",
    center: "Aktau",
    description:
      "Mangystau Region occupies Kazakhstan's Caspian coast and desert plateaus. Its economy is led by hydrocarbons, port logistics, and maritime infrastructure.",
    facts: [
      "Aktau seaport is a critical Caspian logistics hub",
      "Oil and gas production dominates regional output",
      "Unique landscapes include Ustyurt plateau and canyons",
      "Transit role in the Trans-Caspian corridor",
      "Tourism potential is growing along the Caspian coast",
    ],
  },
  "North Kazakhstan Region": {
    title: "North Kazakhstan oblysy",
    heroClass: "NameImgNorthKazakhstan",
    area: "98,000 km²",
    population: "0.51 mln",
    grp: "$6.4B",
    center: "Petropavl",
    description:
      "North Kazakhstan Region is a key agricultural area with strong grain production and food processing. It has long-standing industrial and transport links with neighboring regions.",
    facts: [
      "One of the country's core grain belts",
      "Food processing is a major local employer",
      "Border trade links with Russian regions",
      "Petropavl is a historic transport node",
      "Continued modernization of agro-industrial capacity",
    ],
  },
  "Pavlodar Region": {
    title: "Pavlodar oblysy",
    heroClass: "NameImgPavlodar",
    area: "124,800 km²",
    population: "0.74 mln",
    grp: "$12.6B",
    center: "Pavlodar",
    description:
      "Pavlodar Region is an important industrial territory in northeastern Kazakhstan. It is known for energy generation, metallurgy, and petrochemical facilities.",
    facts: [
      "Major power generation complex of Kazakhstan",
      "Aluminum and metallurgy value chains are developed",
      "Irtysh river supports water and industrial systems",
      "Ertis industrial zone drives manufacturing",
      "Strong rail links connect to central and eastern regions",
    ],
  },
  "Karaganda Region": {
    title: "Karaganda oblysy",
    heroClass: "NameImgQaraghandy",
    area: "239,100 km²",
    population: "1.13 mln",
    grp: "$23.0B",
    center: "Karagandy",
    description:
      "Karaganda Region is one of Kazakhstan's largest and most industrialized territories. It has a long history of coal mining, metallurgy, and heavy industry.",
    facts: [
      "Large coal basin underpins national energy security",
      "Developed machine-building and metallurgy sectors",
      "Central location supports countrywide logistics",
      "Temirtau industrial area is nationally significant",
      "Growing diversification toward services and SMEs",
    ],
  },
  "Kostanay Region": {
    title: "Kostanay oblysy",
    heroClass: "NameImgQostanay",
    area: "196,000 km²",
    population: "0.82 mln",
    grp: "$12.4B",
    center: "Kostanay",
    description:
      "Kostanay Region is a major agricultural and manufacturing region in northern Kazakhstan. It contributes significantly to grain output and machinery production.",
    facts: [
      "Leading producer of wheat and flour products",
      "Home to automotive assembly and machinery plants",
      "Strong rail connectivity for domestic exports",
      "Livestock and dairy industries are well developed",
      "Active trade and logistics links with Russia",
    ],
  },
  "Kyzylorda Region": {
    title: "Kyzylorda oblysy",
    heroClass: "NameImgQyzylorda",
    area: "226,000 km²",
    population: "0.85 mln",
    grp: "$6.4B",
    center: "Kyzylorda",
    description:
      "Kyzylorda Region spans large desert plains and the lower Syr Darya basin. Agriculture, energy, and transport routes are central to its regional economy.",
    facts: [
      "Rice cultivation is one of the region's signatures",
      "Includes part of the historic Aral Sea area",
      "Oil and gas fields support industrial activity",
      "Baikonur area remains globally recognized",
      "Water management is a major development priority",
    ],
  },
  "Turkistan Region": {
    title: "Turkistan oblysy",
    heroClass: "NameImgSouthKazakhstan",
    area: "118,500 km²",
    population: "3.45 mln",
    grp: "$22.3B",
    center: "Turkistan",
    description:
      "Turkistan Region is one of the most densely populated regions of Kazakhstan. It is strong in agriculture, cross-border trade, and cultural tourism, with Turkistan city being a major spiritual center.",
    facts: [
      "Among the highest population totals across regions",
      "Turkistan city is a major spiritual and tourism center",
      "Strong horticulture and irrigated farming base",
      "Cross-border trade routes toward Uzbekistan",
      "Rapid growth of services and small business activity",
    ],
  },
  "West Kazakhstan Region": {
    title: "West Kazakhstan oblysy",
    heroClass: "NameImgWestKazakhstan",
    area: "151,300 km²",
    population: "0.70 mln",
    grp: "$10.5B",
    center: "Oral",
    description:
      "West Kazakhstan Region combines agriculture, energy, and transit functions in the northwest of the country. It has a diversified economy with growing service sectors.",
    facts: [
      "Linked to major oil and gas projects in the west",
      "Oral is an important regional administrative center",
      "Border position supports trade and logistics",
      "Mixed economy with farming and industry",
      "Transport infrastructure connects to key western routes",
    ],
  },
  "Jambyl Region": {
    title: "Jambyl oblysy",
    heroClass: "NameImgZhambyl",
    area: "144,300 km²",
    population: "1.21 mln",
    grp: "$6.9B",
    center: "Taraz",
    description:
      "Jambyl Region lies in southern Kazakhstan and is known for agriculture, chemicals, and transit corridors. Taraz is one of the oldest historical cities in the country.",
    facts: [
      "Taraz is a major cultural and historical center",
      "Chemical industry has a strong regional footprint",
      "Agriculture includes sugar beet, vegetables, and livestock",
      "Important road and rail links in the south",
      "Border proximity supports regional trade activity",
    ],
  },
  "Abay Region": {
    title: "Abay oblysy",
    heroClass: "NameImgAbay",
    area: "185,100 km²",
    population: "0.59 mln",
    grp: "$8.2B",
    center: "Semey",
    description:
      "Abay Region was established in 2022, carved from the former East Kazakhstan Region. Named after the great Kazakh poet and thinker Abay Qunanbaiuly, it centers on Semey — a historically significant city on the Irtysh river.",
    facts: [
      "Created in June 2022 as a new administrative unit",
      "Named after poet and philosopher Abay Qunanbaiuly",
      "Semey (Semipalatinsk) is the administrative center",
      "Historic Semipalatinsk nuclear test site is located here",
      "Rich steppe landscapes and Irtysh river basin",
    ],
  },
  "Jetisu Region": {
    title: "Jetisu oblysy",
    heroClass: "NameImgJetisu",
    area: "118,600 km²",
    population: "0.69 mln",
    grp: "$5.1B",
    center: "Taldykorgan",
    description:
      "Jetisu Region (Land of Seven Rivers) was established in 2022 from the eastern part of the former Almaty Region. Taldykorgan serves as the administrative center of this predominantly agricultural and mountainous territory.",
    facts: [
      "Created in June 2022 from former Almaty Region",
      "'Jetisu' means 'Seven Rivers' in Kazakh",
      "Taldykorgan is the administrative and cultural center",
      "Borders China and Kyrgyzstan — key transit region",
      "Rich in agriculture: fruits, vegetables, and livestock",
    ],
  },
  "Ulytau Region": {
    title: "Ulytau oblysy",
    heroClass: "NameImgUlytau",
    area: "188,900 km²",
    population: "0.22 mln",
    grp: "$6.2B",
    center: "Zhezkazgan",
    description:
      "Ulytau Region was established in 2022 from the western part of the former Karaganda Region. It is a historically and symbolically significant territory — Ulytau mountain range is considered the ancestral homeland of the Kazakh people.",
    facts: [
      "Created in June 2022 from former Karaganda Region",
      "Ulytau mountains are a sacred ancestral symbol for Kazakhs",
      "Zhezkazgan has one of the largest copper deposits in the world",
      "Rich mineral resources: copper, gold, and rare metals",
      "Sparsely populated with vast steppe landscapes",
    ],
  },
};

type RegionPageProps = {
  regionName: string;
  onBack: () => void;
};

export default function RegionPage({ regionName, onBack }: RegionPageProps) {
  const info = REGION_DATA[regionName];

  if (!info) return null;

  return (
    <div className="KZgenerally">
      <div className={`title-group ${info.heroClass}`}>
        <button className="rtnBtn" onClick={onBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          return
        </button>
        <h2 className="KZUN UTN RegName">{info.title}</h2>
      </div>
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
          <div
            style={{
              fontSize: 25,
              marginLeft: 25,
              marginTop: 10,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
            }}
          >
            {info.area}
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
            Area
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
          <div style={{ fontSize: 28 }}></div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
            }}
          >
            {info.population}
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
            Population
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
          <div
            style={{
              fontSize: 25,
              marginLeft: 8,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
            }}
          >
            {info.grp}
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
            GDP
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
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#3a2008",
              letterSpacing: "0.02em",
            }}
          >
            {info.center}
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
            Regional center
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
          {info.description}
        </div>
      </div>
      {info.facts.map((fact, index) => (
        <div
          key={fact}
          className={`MiniF ${index === info.facts.length - 1 ? "buttum" : ""}`}
        >
          {fact}
        </div>
      ))}
    </div>
  );
}
