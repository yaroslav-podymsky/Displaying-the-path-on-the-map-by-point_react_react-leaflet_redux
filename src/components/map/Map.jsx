import React from "react";
import {MapContainer} from "react-leaflet";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { ReactLeafletWaypoints } from "react-leaflet-waypoints";

const Map = () => {
	const { currentCoordinates } = useTypedSelector((state) => state.coordinates);
	return (
		<>
			<MapContainer
				style={{
					height: "900px",
					width: "900px",
					border: "2px solid rgba(121, 119, 230, 0.425)",
					borderRadius: "5px",
				}}
			>
				<ReactLeafletWaypoints
					fitRoutes={true}
          layerUrl="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          glyph={{
            icon: "custom-icon custom-icon-marker",
          }}
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
								weight: 2,
							},
						],
					}}
		
				/>
			</MapContainer>
		</>
	);
};

export default Map;
