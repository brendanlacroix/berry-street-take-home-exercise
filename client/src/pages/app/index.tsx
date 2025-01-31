import { useId } from 'react';
import ProductCard, { Tag, TagList, Title } from './components/ProductCard';
import ProductList from './components/ProductList';
import useFetchData from './hooks/useFetchData';
import TagToggleButtonGroup, {
  Label,
  List,
  ListItem,
  TagToggleButton,
} from '../../components/TagToggleButtonGroup';

const App = () => {
  const products = useFetchData();
  const mainContentId = useId();

  return (
    <>
      <a href={`#${mainContentId}`} className="sr-only sr-only-focusable">
        Skip to main content
      </a>
      <div className="m-5">
        <header className="mb-6 text-2xl font-bold">
          <h1>Product Compass</h1>
        </header>

        <main id={mainContentId}>
          <TagToggleButtonGroup className="mb-5">
            <Label>Filter by characteristic:</Label>
            <List>
              <ListItem>
                <TagToggleButton>Feature 1</TagToggleButton>
              </ListItem>
              <ListItem>
                <TagToggleButton>Feature 2</TagToggleButton>
              </ListItem>
              <ListItem>
                <TagToggleButton>Feature 3</TagToggleButton>
              </ListItem>
              <ListItem>
                <TagToggleButton>Feature 3</TagToggleButton>
              </ListItem>
              <ListItem>
                <TagToggleButton>Feature 3</TagToggleButton>
              </ListItem>
              <ListItem>
                <TagToggleButton>Feature 3</TagToggleButton>
              </ListItem>
            </List>
          </TagToggleButtonGroup>
          <ProductList>
            {products?.map(({ characteristics, id, name }) => (
              <ProductCard key={id}>
                <Title>{name}</Title>
                <TagList>
                  {characteristics.map((characteristic) => (
                    <Tag key={characteristic}>{characteristic}</Tag>
                  ))}
                </TagList>
              </ProductCard>
            ))}
          </ProductList>
        </main>
      </div>
    </>
  );
};

export default App;
