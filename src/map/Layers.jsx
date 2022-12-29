import React from "react";
import {
	TileLayer,
	LayersControl,
	useMapEvents,
	GeoJSON,
	Marker,
	Circle,
} from "react-leaflet";
import L from "leaflet";
const Layers = () => {
	const map = useMapEvents({
		zoomend: () => {
			// console.log(map.getZoom());
		},
		moveend: () => {
			// console.log(map.getBounds());
		},
	});

	const getMarkerPosition = (state_name) => {
		switch (state_name) {
			case "Montana":
				return L.latLng(46.8797, -110.3626);
			case "Wyoming":
				return L.latLng(43.076, -107.2903);
			case "North Dakota":
				return L.latLng(47.5515, -101.002);
			case "South Dakota":
				return L.latLng(43.9695, -99.9018);
			default:
				return;
		}
	};

	return (
		<>
			<LayersControl position="topright">
				{/* <GeoJSON key={"Montana"} data={"Montana"} pathOptions={{ color: "blue" }}> */}
				<Marker position={getMarkerPosition("Montana")}>
					<Circle center={[59.84660399, 30.29496392]} radius={200} />
					{/* <LayersControl.BaseLayer checked name="Basic Map"> */}
					<TileLayer
						attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{/* </LayersControl.BaseLayer> */}
					{/* <LayersControl.BaseLayer name="Topo Map">
						<Circle center={[50.5, 30.5]} radius={200} />
						<TileLayer
							attribution='Map data: &amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &amp;copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
							url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
						/>
					</LayersControl.BaseLayer> */}
				</Marker>
				{/* </GeoJSON> */}
			</LayersControl>
		</>
	);
};

export default Layers;
