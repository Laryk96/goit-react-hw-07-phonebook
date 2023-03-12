import { createSlice } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts, addContact } from './operations';

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handlePending = state => {
  state.isLoading = true;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // Pending
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,

    // Rejected
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    // Fulfilled
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(payload);
    },
    [deleteContact.fulfilled](state, { payload }) {
      const index = state.items.findIndex(contact => contact.id === payload);

      state.isLoading = false;
      state.error = null;
      state.items.splice(index, 1);
    },
  },
});
