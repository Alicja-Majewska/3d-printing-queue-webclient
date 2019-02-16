export enum PrinterStatus {
  ACTIVE = "ACTIVE", BROKEN = "BROKEN"
}

export namespace PrinterStatus {

  export function valueOf(status: string): PrinterStatus {
    return status ? PrinterStatus[status.toUpperCase()] : null;
  }
}
