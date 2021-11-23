import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FzdHJpb3RvcmxsYXRpIiwiYSI6ImNrd2FxeGE4cTE0a3AzMHFtYXVwYjlyZXUifQ.4Ug_JxatqrfD1Ui2pel9-A";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [20.903, 42.6026],
      zoom: 7,
    });
    const marker1 = new mapboxgl.Marker()
      .setLngLat([20.959744, 42.795905])
      .addTo(map);
  }, []);
  return <Wrapper id="map"></Wrapper>;
};
const Wrapper = tw.div`
flex-1
`;

export default Map;
