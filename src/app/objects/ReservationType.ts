export enum ReservationType {
  TEMPORARY = "TEMPORARY", PRINTING = "PRINTING", CONSERVATION = "CONSERVATION"
}

export namespace ReservationType {

  export function valueOf(type: string): ReservationType {
    return type ? ReservationType[type.toUpperCase()] : ReservationType.PRINTING;
  }
}
