import SchemaElement from './SchemaElement';

export default class SchemaBuilder {
  createParent(): ISchemaElement {
    return new SchemaElement('');
  }
}
