import {PrinterBackend} from '../objects/PrinterBackend';

export class PrintersDataFactory {

  static getOne(): PrinterBackend {
    return <PrinterBackend>{
      id: 1,
      name: "Drukarka 3D MT4 6P",
      status: "WORKING"
    };
  }

  static getMany(): PrinterBackend[] {
    return [
      <PrinterBackend>{
        id: 1,
        name: "Drukarka 3D MT4 6P",
        status: "WORKING"
      },
      <PrinterBackend>{
        id: 2,
        name: "Drukarka 3D MT4 7P",
        status: "WORKING"
      },
      <PrinterBackend>{
        id: 3,
        name: "Drukarka 3D BG 5P",
        status: "BROKEN"
      },
      <PrinterBackend>{
        id: 4,
        name: "Drukarka 3D MT2 5P",
        status: "WORKING"
      }
    ];
  }

}

