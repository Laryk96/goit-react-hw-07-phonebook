import { createAsyncThunk } from '@reduxjs/toolkit';

const {
  fetchAllContacts,
  addNewContact,
  deleteContactById,
} = require('services/ContactsAPI');

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    console.log(newContact);
    try {
      return await addNewContact(newContact);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContactById(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
