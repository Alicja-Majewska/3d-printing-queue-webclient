export enum ReservationType {
  TEMPORAL = "TEMPORAL", PRINTING = "PRINTING", MAINTENANCE = "MAINTENANCE"
}

export namespace ReservationType {

  export function valueOf(type: string): ReservationType {
    return type ? ReservationType[type.toUpperCase()] : ReservationType.PRINTING;
  }
}
