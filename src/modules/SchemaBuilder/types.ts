import {ReactNode} from "react";
import {ContentType} from './SchemaElementContent';

declare global {
  interface ISchemaBuilder {
    setChild(parent: ISchemaElement, child: ISchemaElement): ISchemaBuilder;
  }

  interface ISchemaElement {
    readonly appearance?: ISchemaElementAppearance;
    readonly children: Readonly<ISchemaElement[]>;
    readonly position?: ISchemaElementPosition;
    readonly placement: SchemaElementPlacement;
    readonly content: ISchemaElementContent;

    addChild(child: ISchemaElement | ContentType): ISchemaElement;

    setPlacement(newPlacement: SchemaElementPlacement): ISchemaElement;
    getLastChild(): ISchemaElement;
    flat(): Readonly<ISchemaElement[]>;

    /**
     * @returns the last child of this
     */
    addChildToLastChild(child: ISchemaElement): ISchemaElement;
  }

  type SchemaElementPlacement = 'right' | 'bottom';

  interface ISchemaElementPosition {

  }

  interface ISchemaElementAppearance {

  }

  interface ISchemaElementContent {
    readonly caption: ReactNode;
    readonly description: ReactNode;

    setCaption(caption: ReactNode): ISchemaElementContent;
  }
}
