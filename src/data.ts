import { ICurrentCoordinates } from "./types/coordinates";
import { IColumns } from "./types/data";

export const data: ICurrentCoordinates[] = [
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

export const columns: IColumns[] = [
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
