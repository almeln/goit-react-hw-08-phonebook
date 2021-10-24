import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

// Мемоизация
export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// export const getVisibleContacts = state => {
//   const items = getItems(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();
//   return items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };
