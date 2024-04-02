import { createSlice } from '@reduxjs/toolkit';

export const backupSlice = createSlice({
  name: 'backup',
  initialState: {
    isBackupDocumentSelected: false,
    isLoadingDocuments: false,
    backupDocuments: [],
    selectedBackupChunk: '',
  },
  reducers: {
    onRetrievingData: (state) => {
      state.isLoadingDocuments = true;
    },
    onObtainedBackupDocuments: (state, { payload }) => {
      state.backupDocuments = payload;
      state.isBackupDocumentSelected = true;
      state.isLoadingDocuments = false;
    },
  },
});

export const { onRetrievingData, onObtainedBackupDocuments } =
  backupSlice.actions;
