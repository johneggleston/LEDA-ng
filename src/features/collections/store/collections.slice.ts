import { createSlice } from '@reduxjs/toolkit';
import { ICollection } from '../../../types/ICollection';
import { findAllCollections, findCollectionById } from './collections.actions';
import type { RootState } from '../../../store/types';

type CollectionsState = {
  collections: ICollection[];
  selectedCollection: ICollection;
  isLoadingCollections: boolean;
};

const initialState: CollectionsState = {
  collections: [],
  selectedCollection: {} as ICollection,
  isLoadingCollections: false,
};

const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get collection by id
    builder.addCase(findCollectionById.pending, (state) => {
      state.isLoadingCollections = true;
    });
    builder.addCase(findCollectionById.fulfilled, (state, { payload }) => {
      state.selectedCollection = payload;
      state.isLoadingCollections = false;
    });
    builder.addCase(findCollectionById.rejected, (state) => {
      state.isLoadingCollections = false;
    });
    // get all collections (change when paginating is integrated)
    builder.addCase(findAllCollections.pending, (state) => {
      state.isLoadingCollections = true;
    });
    builder.addCase(findAllCollections.fulfilled, (state, { payload }) => {
      state.collections = payload;
      state.isLoadingCollections = false;
    });
    builder.addCase(findAllCollections.rejected, (state) => {
      state.isLoadingCollections = false;
    });
  },
});

export const collectionsReducer = collectionsSlice.reducer;

export const selectCollectionsState = (state: RootState) => state.collections;

export const selectCollections = (state: RootState) => state.collections.collections;

export const selectCurrentSelection = (state: RootState) => state.collections.selectedCollection;
