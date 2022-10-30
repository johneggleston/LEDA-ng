import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Item } from '@types';
import type { RootState } from '../../../store/types';
import { buyItem } from '../../marketplace/store/marketplace.actions';
import { findAll, findById, mintNft } from './leda-nft.actions';

type LedaNftState = {
  items: Item[];
  isLoading: boolean;
};

const initialState: LedaNftState = {
  items: [],
  isLoading: false,
};

const ledaNftSlice = createSlice({
  name: 'ledaNft',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(buyItem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(buyItem.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(buyItem.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(findAll.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    });
    builder.addCase(findAll.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(findById.fulfilled, (state, { payload }) => {
      const found = state.items.some((item) => item.itemId === payload.itemId);

      if (!found) state.items.push(payload);
    });
    builder.addCase(mintNft.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(mintNft.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state.items.push(payload);
      state.isLoading = false;
    });
    builder.addCase(mintNft.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// TODO: Change this name to selectNftState
export const selectNftState = (state: RootState) => state.ledaNft;

export const selectAllItems = (state: RootState) => state.ledaNft.items;

export const selectCoastedItem = createSelector(
  selectAllItems,
  (_: unknown, cost: 'expensive' | 'cheapest') => cost,
  (items: Item[], cost: 'expensive' | 'cheapest') => {
    if (cost === 'expensive') {
      const maxValue = items.reduce((max, obj) => (obj.price > max.price ? obj : max));
      return Number(maxValue.price);
    }
    if (cost === 'cheapest') {
      const minValue = items.reduce((max, obj) => (obj.price < max.price ? obj : max));
      return Number(minValue.price);
    }
    return Number();
  }
);

export const selectFilteredItems = createSelector(
  selectAllItems,
  (
    _: unknown,
    author: string,
    title: string,
    description: string,
    priceFrom: number,
    priceTo: number,
    likesDirection: string | 'desc' | 'asc'
  ) => ({
    author,
    title,
    description,
    priceFrom,
    priceTo,
    likesDirection,
  }),
  (items: Item[], { author, title, description, priceFrom, priceTo, likesDirection }) => {
    let filteredItems = [...items];
    if (author && author !== 'all') {
      // TODO: The logic is working fine, but we should change the data from the user and add a username
      filteredItems = filteredItems.filter((item) => item.owner.address === author);
    }
    if (title !== 'all') {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (description !== 'all') {
      filteredItems = filteredItems.filter((item) =>
        item.description.toLowerCase().includes(description.toLowerCase())
      );
    }

    if (priceFrom >= 0 && priceTo >= priceFrom) {
      filteredItems = filteredItems.filter(
        (item) => Number(item.price) >= priceFrom && Number(item.price) <= priceTo
      );
    }

    if (likesDirection && likesDirection !== '') {
      if (likesDirection === 'asc') {
        filteredItems = filteredItems.sort((a, b) => a.likes - b.likes);
      }
      if (likesDirection === 'desc') {
        filteredItems = filteredItems.sort((a, b) => b.likes - a.likes);
      }
    }

    return filteredItems;
  }
);

export const selectNewest = (state: RootState) => state.ledaNft.items.slice(0, 5);

export const selectById = (state: RootState, itemId: string) =>
  state.ledaNft.items.find((item) => item.itemId === itemId);

export const ledaNftReducer = ledaNftSlice.reducer;
