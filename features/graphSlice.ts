import { SingleExhausterType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GraphState {
	filters: any;
	exhauster: SingleExhausterType | null;
}

const initialState: GraphState = {
	filters: null,
	exhauster: null,
};

const graphSlice = createSlice({
	name: 'graph',
	initialState,
	reducers: {
		setFilters: (state, action: PayloadAction<any | null>) => {
			state.filters = action.payload;
		},
		setExhauster: (
			state,
			action: PayloadAction<SingleExhausterType | null>
		) => {
			state.exhauster = action.payload;
		},
	},
});

export const { setFilters, setExhauster } = graphSlice.actions;

export default graphSlice.reducer;
