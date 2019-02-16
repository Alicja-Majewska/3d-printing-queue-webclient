export interface NewReservationBackend {
  guid: string;
  printerId: string;
  name: string;
  durationInMinutes: number;
  startDate: string;
  ownerId: string;
}
