import {ReactNode} from "react";

interface SchemaElementContentData {
  caption?: ReactNode;
  description?: ReactNode;
}

export type ContentType = string | SchemaElementContentData;

export default class SchemaElementContent implements ISchemaElementContent {
  public caption: SchemaElementContentData['caption'];
  public description: SchemaElementContentData['description'];

  constructor(content: ContentType) {
    if (typeof content === 'string') {
      this.caption = content;
    } else {
      this.caption = content.caption;
      this.description = content.description;
    }
  }

  setCaption(caption: ReactNode): ISchemaElementContent {
    this.caption = caption;
    return this;
  }
}
