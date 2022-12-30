import React from "react";
import {
	MapContainer,
	Marker,
	Polygon,
	Popup,
	TileLayer,
	Tooltip,
	ZoomControl,
} from "react-leaflet";
import L from "leaflet";

import { useTypedSelector } from "../hooks/useTypeSelector";
import { ReactLeafletWaypoints } from "react-leaflet-waypoints";

import { IconMap } from "antd/es/result";

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
				scrollWheelZoom={false}
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

				{/* {currentCoordinates.latFrom && ( */}
				{/* <RoutingControl /> */}
				<ReactLeafletWaypoints
					// className="qwe"
					// zoomControl={false}
					// scrollWheelZoom={false}
					fitRoutes={true}
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
					summaryTemplate={`
					<div>
					  <p style="margin: 0">
						<span style="font-weight: bold">Distance: </span>
						<span>{distance}</span>
					  </p>
					  <p style="margin: 0">
					  <span style="font-weight: bold">Time: </span>
					  <span>{time}</span>
					  </p>
					</div>
				  `}
					glyph={{
						icon: "custom-icon custom-icon-marker",
					}}
					layerUrl="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
					waypoints={[
						{
							lat: currentCoordinates.latFrom,
							glyph: { text: "From" },
							lng: currentCoordinates.ingFrom,
						},
						{
							lat: currentCoordinates.latTo,
							glyph: { text: "To" },
							lng: currentCoordinates.ingTo,
						},
					]}
					lineOptions={{
						styles: [
							{
								color: " rgb(129, 127, 2)",
								opacity: 1,
								weight: 2,
							},
						],
					}}
					// autoRoute
					// showAlternatives
					// pointsCoordinates={<div>qwe</div>}
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
