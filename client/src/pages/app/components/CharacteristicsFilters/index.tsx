import TagToggleButtonGroup, {
  Label,
  List,
  ListItem,
  TagToggleButton,
} from '../../../../components/TagToggleButtonGroup';
import {
  useSelectedCharacteristics,
  useSetSelectedCharacteristics,
} from '../../context/hooks';
import useFetchCharacteristics from './hooks/useFetchCharacteristics';
import useInitialCharacteristicsSelected from './hooks/useInitialCharacteristicsSelected';

const CharacteristicsFilters = () => {
  const { data, error, isError, isLoading } = useFetchCharacteristics();
  const selectedCharacteristics = useSelectedCharacteristics();
  const setSelectedCharacteristics = useSetSelectedCharacteristics();

  useInitialCharacteristicsSelected(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <TagToggleButtonGroup className="mb-5">
      <Label>Filter by characteristic:</Label>
      <List>
        {data?.map(({ colorClasses, id, name }) => (
          <ListItem key={id}>
            <TagToggleButton
              className={colorClasses}
              onClick={() =>
                setSelectedCharacteristics((prev) =>
                  prev.includes(id)
                    ? prev.filter((prevId) => prevId !== id)
                    : [...prev, id]
                )
              }
              pressed={selectedCharacteristics.includes(id)}
            >
              {name}
            </TagToggleButton>
          </ListItem>
        ))}
      </List>
    </TagToggleButtonGroup>
  );
};

export default CharacteristicsFilters;
