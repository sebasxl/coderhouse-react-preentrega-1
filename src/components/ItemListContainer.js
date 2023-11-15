import { Heading } from "react-bulma-components";

function ItemListContainer(props) {
  // Incluye aquí el rendering de algún texto o título provisional que luego reemplazaremos por nuestro catálogo
  const { titulo } = props;
  return (
    <div>
      <Heading>{titulo}</Heading>
      <Heading subtitle>Subtitle</Heading>
    </div>
  );
}

export default ItemListContainer;
