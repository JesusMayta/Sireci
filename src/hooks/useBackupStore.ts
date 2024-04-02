import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import {
  onObtainedBackupDocumentNames,
  onRetrievingData,
} from '../store/backup/backupSlice';
import { SireciApi } from '../api';

export const useBackupStore = () => {
  const { isBackupDocumentSelected, isLoadingDocuments, backupDocumentNames } =
    useAppSelector((state) => state.backup);
  const dispatch = useDispatch();

  const getBackupDocumentNames = async () => {
    dispatch(onRetrievingData());

    try {
      const { data: backupDocumentNames } = await SireciApi().get(
        `/backup/collections-name`
      );
      dispatch(onObtainedBackupDocumentNames(backupDocumentNames.data));
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    isBackupDocumentSelected,
    isLoadingDocuments,
    backupDocumentNames,
    getBackupDocumentNames,
  };
};
