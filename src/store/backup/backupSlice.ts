import { createSlice } from '@reduxjs/toolkit';

export const backupSlice = createSlice({
  name: 'backup',
  initialState: {
    isBackupDocumentSelected: false,
    isLoadingDocuments: false,
    backupDocumentNames: [],
    selectedBackupChunk: '',
  },
  reducers: {
    onRetrievingData: (state) => {
      state.isLoadingDocuments = true;
    },
    onObtainedBackupDocumentNames: (state, { payload }) => {
      state.backupDocumentNames = payload;
      state.isBackupDocumentSelected = true;
      state.isLoadingDocuments = false;
    },
  },
});

export const { onRetrievingData, onObtainedBackupDocumentNames } =
  backupSlice.actions;
