import React from "react";
import "./App.css";
import { Table } from "antd";
import { ICurrentCoordinates } from "./types/coordinates";
import Map from "./components/map/Map";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypeSelector";
import { columns, data } from "./data";
import {
  currentCoordinatesChange,
  selectedKeysChange,
} from "./store/reducers/coordinatesReducer";

function App() {
  const dispatch = useDispatch();
  const { selectedKeys } = useTypedSelector((state) => state.coordinates);

  const myRowSelection = {
    selectedRowKeys: selectedKeys,
  };

  return (
    <div className="App">
      <Table
        rowSelection={{
          type: "radio",
          ...myRowSelection,
        }}
        onRow={(record: ICurrentCoordinates, rowIndex) => {
          return {
            onClick: (event) => {
              dispatch(selectedKeysChange([record.key.toString()]));
              dispatch(currentCoordinatesChange(record));
            },
          };
        }}
        bordered
        className="App-table"
        pagination={false}
        dataSource={data}
        columns={columns}
        rowClassName="App-table-item"
      />
      <Map />
    </div>
  );
}

export default App;
