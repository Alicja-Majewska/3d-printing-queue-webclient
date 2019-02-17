import {PrinterBackend} from '../objects/PrinterBackend';

export class PrintersDataFactory {

  static getOne(): PrinterBackend {
    return <PrinterBackend>{
      id: '1',
      name: "Drukarka 3D MT4 6P",
      status: "ACTIVE"
    };
  }

  static getMany(): PrinterBackend[] {
    return [
      <PrinterBackend>{
        id: '1',
        name: "Drukarka 3D MT4 6P",
        status: "ACTIVE"
      },
      <PrinterBackend>{
        id: '2',
        name: "Drukarka 3D MT4 7P",
        status: "ACTIVE"
      },
      <PrinterBackend>{
        id: '3',
        name: "Drukarka 3D BG 5P",
        status: "BROKEN"
      },
      <PrinterBackend>{
        id: '4',
        name: "Drukarka 3D MT2 5P",
        status: "ACTIVE"
      }
    ];
  }

}

