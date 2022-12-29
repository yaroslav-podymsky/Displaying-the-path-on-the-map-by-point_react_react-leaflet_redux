import React, { useEffect, useState } from "react";
import "./global.css";
import "./App.css";
import { Table } from "antd";
import { CoordinatesActionTypes } from "./types/coordinates";
// import { city_data } from "./data";
import Map from "./map/Map";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "./hooks/useTypeSelector";

function App() {
	const dataSource = [
		{
			key: "1",
			requestNumber: "№1",
			latFrom: 59.84660399,
			ingFrom: 30.29496392,
			latTo: 59.82934196,
			ingTo: 30.42423701,
		},
		{
			key: "2",
			requestNumber: "№2",
			latFrom: 59.82934196,
			ingFrom: 30.42423701,
			latTo: 59.82761295,
			ingTo: 30.41705607,
		},
		{
			key: "3",
			requestNumber: "№3",
			latFrom: 59.83567701,
			ingFrom: 30.38064206,
			latTo: 59.84660399,
			ingTo: 30.29496392,
		},
		{
			key: "4",
			requestNumber: "№4",
			latFrom: 59.84660399,
			ingFrom: 30.29496392,
			latTo: 59.82762395,
			ingTo: 30.42705607,
		},
		{
			key: "5",
			requestNumber: "№5",
			latFrom: 59.83567701,
			ingFrom: 30.38064206,
			latTo: 59.84660399,
			ingTo: 30.29496392,
		},
	];

	const columns = [
		{
			title: "Номер заявки",
			dataIndex: "requestNumber",
			key: "requestNumber",
		},
		{
			title: "Координаты ОТ lat",
			dataIndex: "latFrom",
			key: "latFrom",
		},
		{
			title: "Координаты ОТ ing",
			dataIndex: "ingFrom",
			key: "ingFrom",
		},
		{
			title: "Координаты ДО lat",
			dataIndex: "latTo",
			key: "latTo",
		},
		{
			title: "Координаты ДО ing",
			dataIndex: "ingTo",
			key: "ingTo",
		},
	];
	const dispatch = useDispatch();
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
	const { currentCoordinates, pointsCoordinates } = useTypedSelector(
		(state) => state.coordinates,
	);
	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		// console.log("selectedRowKeys changed: ", newSelectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	};
	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
		// onclick: (e: any) => console.log(e),
	};
	useEffect(() => {
		console.log(selectedRowKeys);
	}, [selectedRowKeys]);
	return (
		<div className="App">
			<Table
				onRow={(record, rowIndex) => {
					return {
						onClick: (event) => {
							dispatch({
								type: CoordinatesActionTypes.CHANGE_CURRENT_COORDINATES,
								payload: record,
							});
							// dispatch({
							// 	type: CoordinatesActionTypes.CHANGE_CENTER_COORDINATES,
							// 	payload: record,
							// });
						}, // click row
						// onDoubleClick: (event) => {}, // double click row
						// onContextMenu: (event) => {}, // right button click row
						// onMouseEnter: (event) => {}, // mouse enter row
						// onMouseLeave: (event) => {}, // mouse leave row
					};
				}}
				// rowSelection={{
				// 	key: "1",
				// 	requestNumber: "№1",
				// 	latFrom: 59.84660399,
				// 	ingFrom: 30.29496392,
				// 	latTo: 59.82934196,
				// 	ingTo: 30.42423701,
				// }}
				bordered
				onChange={(e) => console.log(1)}
				className="App-table"
				pagination={false}
				dataSource={dataSource}
				columns={columns}
				rowClassName="App-table-item"
				rowSelection={rowSelection}
			/>
			<Map />
		</div>
	);
}

export default App;
