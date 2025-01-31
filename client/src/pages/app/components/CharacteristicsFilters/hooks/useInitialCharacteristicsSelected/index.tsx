import { useEffect, useRef } from 'react';
import useFetchCharacteristics from '../useFetchCharacteristics';
import { useSetSelectedCharacteristics } from '../../../../context/hooks';

const useInitialCharacteristicsSelected = (
  data: ReturnType<typeof useFetchCharacteristics>['data']
) => {
  const initialSavedRef = useRef(false);
  const setSelectedCharacteristics = useSetSelectedCharacteristics();

  useEffect(() => {
    if (initialSavedRef.current) return;

    if (data) {
      const selectedCharacteristics = data.map(({ id }) => id);

      setSelectedCharacteristics(selectedCharacteristics);

      initialSavedRef.current = true;
    }
  }, [data, setSelectedCharacteristics]);
};

export default useInitialCharacteristicsSelected;
