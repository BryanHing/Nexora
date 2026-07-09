import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Email } from '@types/index';

interface EmailState {
  emails: Email[];
  selectedEmail: Email | null;
  isLoading: boolean;
  error: string | null;
  filter: {
    category?: string;
    priority?: string;
    isRead?: boolean;
    searchQuery?: string;
  };
}

const initialState: EmailState = {
  emails: [],
  selectedEmail: null,
  isLoading: false,
  error: null,
  filter: {},
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmails: (state, action: PayloadAction<Email[]>) => {
      state.emails = action.payload;
      state.isLoading = false;
    },
    addEmail: (state, action: PayloadAction<Email>) => {
      state.emails.unshift(action.payload);
    },
    setSelectedEmail: (state, action: PayloadAction<Email | null>) => {
      state.selectedEmail = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setFilter: (state, action: PayloadAction<Partial<EmailState['filter']>>) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    updateEmail: (state, action: PayloadAction<Email>) => {
      const index = state.emails.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.emails[index] = action.payload;
      }
      if (state.selectedEmail?.id === action.payload.id) {
        state.selectedEmail = action.payload;
      }
    },
  },
});

export const { setEmails, addEmail, setSelectedEmail, setLoading, setError, setFilter, updateEmail } =
  emailSlice.actions;
export default emailSlice.reducer;
