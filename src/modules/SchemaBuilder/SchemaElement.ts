import SchemaElementContent, {ContentType} from "./SchemaElementContent";

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

  constructor(content: ContentType) {
    this.children = [];
    this.placement = 'right';
    this.content = new SchemaElementContent(content);
  }

  addChild(child: ISchemaElement | ContentType): this {
    if (typeof child === 'object' && 'children' in child) {
      this.children.push(child);
    } else {
      const childNode = new SchemaElement(child);
      this.children.push(childNode);
    }

    return this;
  }

  setPlacement(newPlacement: SchemaElementPlacement): this {
    this.placement = newPlacement;
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

