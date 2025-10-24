import axios from "axios";
import { ReservationInterface, ReservationType } from "./reservation-definitions";
import { RESERVATION_API } from "@/lib/v1/api/api-endpoints";

class ReservationAPI implements ReservationInterface {
async getReservationData(): Promise<ReservationType[]> {
        try {
            const res = await axios.get(RESERVATION_API);
            const data = res.data;

            if (!data) {
                return [];
            }
            if (Array.isArray(data)) {
                return data as ReservationType[];
            }
            return [data as ReservationType];
        } catch (err) {
            console.error("Error Getting Reservation data: ", err);
            return []; 
            }
    }
}

export default ReservationAPI;