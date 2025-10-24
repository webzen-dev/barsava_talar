import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReservationType } from "./reservation-definitions";
import ReservationAPI from "./reservation-get-data";
export const ReservationData = createAsyncThunk(
    "getReservationData/data",
    async (): Promise<ReservationType[]> => {
        const api = new ReservationAPI();
        const data = await api.getReservationData();
        return data ?? []
    }
);

interface initialStateType {
    data: ReservationType[],
    loading: boolean,
    error: string | null
}

const reservationSlice = createSlice({
    name: "Reservation",
    initialState: {
        data: [],
        loading: false,
        error: null
    } as initialStateType,
    reducers: {
        fetchReservationData: (state, action) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            state.data === action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(ReservationData.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(ReservationData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload ?? [];
        })

        builder.addCase(ReservationData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Can't fetch Data (-_-) ; ";
        })

    }

})

export const getReservation = reservationSlice.actions
export default reservationSlice.reducer