import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { FeatureCollection, Geometry } from "geojson";

interface KZProperties {
  name: string;
  [key: string]: unknown;
}

interface ZoomableMapProps {
  onRegionClick?: (regionName: string | null) => void;
}

export default function ZoomableMap({ onRegionClick }: ZoomableMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const onRegionClickRef = useRef(onRegionClick);
  useEffect(() => {
    onRegionClickRef.current = onRegionClick;
  }, [onRegionClick]);

  useEffect(() => {
    const width = 955;
    const height = 772;
    let cancelled = false;

    const svgEl = svgRef.current;
    if (!svgEl) return;

    d3.json<FeatureCollection<Geometry, KZProperties>>("/kz-regions.json").then(
      (geoData) => {
        if (cancelled || !geoData) return;

        geoData.features = geoData.features.filter(
          (f) => f.properties?.ENGTYPE_1 === "Region",
        );

        d3.select(svgEl).selectAll("*").remove();

        const svg = d3
          .select(svgEl)
          .attr("viewBox", [0, 0, width, height].join(" "))
          .attr("width", width)
          .attr("height", height)
          .attr("style", "max-width: 100%; height: auto;")
          .on("click", reset);

        const projection = d3
          .geoMercator()
          .center([66, 48])
          .scale(1200)
          .translate([width / 2, height / 2]);

        const path = d3.geoPath(projection);
        const g = svg.append("g");

        const regions = g
          .append("g")
          .attr("fill", "#444")
          .attr("stroke", "white")
          .attr("stroke-width", 1)
          .attr("cursor", "pointer")
          .selectAll<SVGPathElement, (typeof geoData.features)[0]>("path")
          .data(geoData.features)
          .join("path")
          .on("click", clicked)
          .attr("d", path);

        regions
          .append("title")
          .text(
            (d) => (d.properties?.NAME_1 || d.properties?.name || "") as string,
          );

        const zoom = d3
          .zoom<SVGSVGElement, unknown>()
          .scaleExtent([1, 8])
          .on("zoom", zoomed);

        svg.call(zoom);

        function reset(this: SVGSVGElement) {
          if (onRegionClickRef.current) {
            onRegionClickRef.current(null);
          }
          regions.transition().style("fill", null);
          svg
            .transition()
            .duration(750)
            .call(
              zoom.transform,
              d3.zoomIdentity,
              d3.zoomTransform(svg.node()!).invert([width / 2, height / 2]),
            );
        }

        function clicked(
          this: SVGPathElement,
          event: MouseEvent,
          d: FeatureCollection<Geometry, KZProperties>["features"][0],
        ) {
          event.stopPropagation();
          const regionName = (d.properties?.NAME_1 ??
            d.properties?.name ??
            "") as string;
          console.log("Region clicked:", regionName);
          if (onRegionClickRef.current && regionName) {
            onRegionClickRef.current(regionName);
          }

          const [[x0, y0], [x1, y1]] = path.bounds(d);
          event.stopPropagation();
          regions.transition().style("fill", null);
          d3.select(this).transition().style("fill", "lightblue");
          svg
            .transition()
            .duration(750)
            .call(
              zoom.transform,
              d3.zoomIdentity
                .translate(width / 2, height / 2)
                .scale(
                  Math.min(
                    8,
                    0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height),
                  ),
                )
                .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
              d3.pointer(event, svg.node()!),
            );
        }

        function zoomed(event: d3.D3ZoomEvent<SVGSVGElement, unknown>) {
          const { transform } = event;
          g.attr("transform", transform.toString());
          g.attr("stroke-width", 1 / transform.k);
        }
      },
    );

    return () => {
      cancelled = true;
      d3.select(svgEl).selectAll("*").remove();
    };
  }, []);

  return <svg ref={svgRef} />;
}
