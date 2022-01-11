import SchemaElementContent from "./SchemaElementContent";
import {ReactNode} from "react";


export default class SchemaElement implements ISchemaElement {
  static assertHasChildren(instance: ISchemaElement): void | never {
    if (!instance.children.length) {
      throw new Error('no children available');
    }
  }

  public children: Writeable<ISchemaElement['children']>;
  public appearance: ISchemaElement['appearance'];
  public placement: ISchemaElement['placement'];
  public position: ISchemaElement['position'];
  public content: ISchemaElement['content']

  constructor(caption?: ReactNode) {
    this.children = [];
    this.placement = 'right';

    this.content = new SchemaElementContent({caption: ''});
    if (caption) this.setCaption(caption);
  }

  addChild(child: ISchemaElement): ISchemaElement {
    this.children.push(child);
    return this;
  }

  setAppearance(newAppearance: ISchemaElementAppearance): ISchemaElement {
    this.appearance = newAppearance;
    return this;
  }

  setPlacement(newPlacement: SchemaElementPlacement): ISchemaElement {
    this.placement = newPlacement;
    return this;
  }

  setPosition(newPosition: ISchemaElementPosition): ISchemaElement {
    this.position = newPosition;
    return this;
  }

  setContent(newContent: ISchemaElementContent): ISchemaElement {
    this.content = newContent;
    return this;
  }

  setCaption(caption: ReactNode): ISchemaElement {
    this.content.setCaption(caption);
    return this;
  }

  getLastChild(): ISchemaElement {
    SchemaElement.assertHasChildren(this);

    return this.children[this.children.length - 1];
  }

  addChildToLastChild(child: ISchemaElement): ISchemaElement {
    const lastChild = this.getLastChild();
    lastChild.addChild(child);

    return lastChild;
  }

  flat(): ReturnType<ISchemaElement['flat']> {
    const result: ISchemaElement[] = [];
    const queue: ISchemaElement[] = [this];

    const processedElems = new WeakSet<ISchemaElement>();

    while (queue.length) {
      const elem = queue.shift();
      if (!elem) break;

      if (processedElems.has(elem)) continue;
      processedElems.add(elem);

      result.push(elem);
      queue.push(...elem.children);
    }

    return result;
  }
}

