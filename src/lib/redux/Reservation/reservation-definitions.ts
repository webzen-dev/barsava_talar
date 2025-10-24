export interface ReservationInterface {
  getReservationData(): Promise<ReservationType[]>;
}

export interface ReservationType {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  description: string;
  guests: number;
  status: "Pending" | "Success" | "Cancel";
  createdAt?: string;
  date?:string;
}
