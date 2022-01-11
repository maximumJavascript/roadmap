import {ReactNode} from "react";

declare global {
  interface ISchemaBuilder {
    setChild(parent: ISchemaElement, child: ISchemaElement): ISchemaBuilder;
  }

  interface ISchemaElement {
    readonly appearance?: ISchemaElementAppearance;
    readonly children: Readonly<ISchemaElement[]>;
    readonly position?: ISchemaElementPosition;
    readonly placement?: SchemaElementPlacement;
    readonly content: ISchemaElementContent;

    addChild(child: ISchemaElement): ISchemaElement;
    setAppearance(newAppearance: ISchemaElementAppearance): ISchemaElement;
    setPlacement(newPlacement: SchemaElementPlacement): ISchemaElement;
    setPosition(newPosition: ISchemaElementPosition): ISchemaElement;
    setContent(newContent: ISchemaElementContent): ISchemaElement;
    setCaption(caption: ReactNode): ISchemaElement;
    getLastChild(): ISchemaElement;
    flat(): Readonly<ISchemaElement[]>;

    /**
     * @returns the last child of this
     */
    addChildToLastChild(child: ISchemaElement): ISchemaElement;
  }

  type SchemaElementPlacement = 'right';

  interface ISchemaElementPosition {

  }

  interface ISchemaElementAppearance {

  }

  interface ISchemaElementContent {
    readonly caption: ReactNode;

    setCaption(caption: ReactNode): ISchemaElementContent;
  }
}
