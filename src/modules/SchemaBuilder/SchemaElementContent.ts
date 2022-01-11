import {ReactNode} from "react";

interface SchemaElementContentData {
  caption: ReactNode;
}

export default class SchemaElementContent implements ISchemaElementContent {
  public caption: SchemaElementContentData['caption'];

  constructor({ caption }: SchemaElementContentData) {
    this.caption = caption;
  }

  setCaption(caption: ReactNode): ISchemaElementContent {
    this.caption = caption;
    return this;
  }
}
