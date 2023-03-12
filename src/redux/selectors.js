import { createSelector } from '@reduxjs/toolkit';
import contactsFiltration from 'services/contactsFiltration';

export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.items;

export const filteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => contactsFiltration(contacts, filter)
);
