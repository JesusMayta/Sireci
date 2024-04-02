import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import {
  onObtainedBackupDocuments,
  onRetrievingData,
} from '../store/backup/backupSlice';
import { SireciApi } from '../api';

export const useBackupStore = () => {
  const { isBackupDocumentSelected, isLoadingDocuments } = useAppSelector(
    (state) => state.backup
  );
  const dispatch = useDispatch();

  const getBackupDocuments = async (documentName: string) => {
    dispatch(onRetrievingData());

    try {
      const { data } = await SireciApi().get(`/backup/${documentName}`);
      dispatch(onObtainedBackupDocuments(data));
      return true;
    } catch (error) {
      return false;
    }
  };

  const getBackupDocumentNames = async (documentName: string) => {
    dispatch(onRetrievingData());

    try {
      const { data } = await SireciApi().get(`/backup/${documentName}`);
      dispatch(onObtainedBackupDocuments(data));
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    isBackupDocumentSelected,
    isLoadingDocuments,
    getBackupDocuments,
    getBackupDocumentNames,
  };
};
