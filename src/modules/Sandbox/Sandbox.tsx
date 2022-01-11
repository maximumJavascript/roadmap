import Card from "../Card/Card";
import * as css from './Sandbox.module.sass';
import SchemaElement from "../SchemaBuilder/SchemaElement";

const data = new SchemaElement('test1');

data
  .addChild(new SchemaElement('test2'))
  .addChildToLastChild(new SchemaElement('test3'))

export default function Sandbox() {
  const jsx = data.flat().map((x, idx) => {
    return (
      <Card
        key={idx}
        children={x.content.caption}
      />
    )
  });

  return (
    <div className={css.Sandbox}>
      {jsx}
    </div>
  )
}
