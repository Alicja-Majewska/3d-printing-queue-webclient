export enum PrinterStatus {
  WORKING = "WORKING", BROKEN = "BROKEN"
}

export namespace PrinterStatus {

  export function valueOf(status: string): PrinterStatus {
    return status ? PrinterStatus[status.toUpperCase()] : null;
  }
}
