import React, { useEffect } from "react";
import {
	Circle,
	LayersControl,
	MapContainer,
	Marker,
	Polygon,
	Popup,
	TileLayer,
	Tooltip,
	ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import Layers from "./Layers";
import { useLeafletContext } from "@react-leaflet/core";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { Waypoints } from "./Waypoints";
import { ReactLeafletWaypoints } from "react-leaflet-waypoints";

// function Square(props) {
// 	const context = useLeafletContext();

// 	useEffect(() => {
// 		const bounds = L.latLng(props.center).toBounds(props.size);
// 		const square = new L.Rectangle(bounds);
// 		const container = context.layerContainer || context.map;
// 		container.addLayer(square);

// 		return () => {
// 			container.removeLayer(square);
// 		};
// 	});

// 	return null;s
// }
// Square();

const Map = () => {
	const { currentCoordinates, pointsCoordinates } = useTypedSelector(
		(state) => state.coordinates,
	);

	// console.log(center.ingFrom, center.latFrom);
	// console.log(currentCoordinates);
	return (
		<>
			<MapContainer
				// center={[center.ingFrom, center.latFrom]}
				zoom={9}
				scrollWheelZoom={true}
				controls={["geolocationControl"]}
				attributionControl={true}
				zoomControl={false}
				doubleClickZoom={true}
				dragging={true}
				animate={true}
				easeLinearity={0.35}
				// waypoints={[
				// 	{
				// 		lat: 59.84660399,
				// 		lng: 30.29496392,
				// 		glyph: {
				// 			icon: "string",
				// 			text: "string",
				// 			html: "string",
				// 		},
				// 	},
				// ]}
				// whenReady={(map) => {
				// 	console.log(map);

				// 	map.target.on("click", function (e) {
				// 		const { lat, lng } = e.latlng;
				// 		L.marker([lat, lng], {}).addTo(map.target);
				// 	});
				// }}
				style={{
					height: "800px",
					width: "800px",
					border: "2px solid rgba(121, 119, 230, 0.425)",
					borderRadius: "5px",
				}}
			>
				{/* <TileLayer
					attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/> */}
				{/* {currentCoordinates.ingFrom && (
					<Marker
						position={[currentCoordinates.latFrom, currentCoordinates.ingFrom]}
					>
						<Popup>from</Popup>
					</Marker>
				)} */}
				{/* {currentCoordinates.ingTo && (
					<Marker position={[currentCoordinates.latTo, currentCoordinates.ingTo]}>
						<Popup>to</Popup>
					</Marker>
				)} */}

				{/* <ZoomControl position="topright" /> */}
				{/* <Waypoints testId={testId} waypoints={waypoints} summaryTemplate={summaryTemplate} {...rest}/> */}

				{/* {currentCoordinates.latFrom && ( */}
				<ReactLeafletWaypoints
					// center={[center.ingFrom, center.latFrom]}
					// zoom={1}
					// maxZoom={8}
					// scrollWheelZoom={true}
					// controls={["geolocationControl"]}
					// attributionControl={true}
					// zoomControl={false}
					// doubleClickZoom={true}
					// dragging={true}
					// animate={true}
					// easeLinearity={0.35}
					// useZoomParameter={false}
					// autoRoute={false}
					layerUrl="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
					waypoints={[
						{ lat: currentCoordinates.latFrom, lng: currentCoordinates.ingFrom },
						{ lat: currentCoordinates.latTo, lng: currentCoordinates.ingTo },
					]}
				/>
				{/* )} */}
				{/* {!currentCoordinates.latFrom && (
					<TileLayer
						attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				)} */}
			</MapContainer>
		</>
	);
};

export default Map;
