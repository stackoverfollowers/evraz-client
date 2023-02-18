import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SchemeState {
	hovered: string | null;
}

const initialState: SchemeState = {
	hovered: null,
};

const schemeSlice = createSlice({
	name: 'scheme',
	initialState,
	reducers: {
		setHovered: (state, action: PayloadAction<string | null>) => {
			state.hovered = action.payload;
		},
	},
});

export const { setHovered } = schemeSlice.actions;

export default schemeSlice.reducer;
