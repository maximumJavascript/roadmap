import SchemaElement from 'modules/SchemaBuilder/SchemaElement';
import SchemaBuilder from 'modules/SchemaBuilder/SchemaBuilder';

class Part3Builder extends SchemaBuilder {
  buildPart12(parent: ISchemaElement): void {
    const part12Child = parent.addChild({
      caption: 'Глава 12',
      description: (
        <>
          Кто такое генераторы?<br/>
          Зачем нужны генераторы?<br/>
          Является ли async/await синтаксическим сахаром и над чем?<br/>
          Что первично, промисы или async/await или они не соприкасаются?<br/>
          Что первично, генераторы или async/await или они не соприкасаются?<br/>
          Можно ли реализовать логику await на генераторах?<br/>
        </>
      )
    }).getLastChild();

    part12Child.addChild(
      new SchemaElement({
        caption: 'Реализовать await в виде функции, принимающей генератор',
      }).setPlacement('bottom')
    );
  }

  buildParts13to14(parent: ISchemaElement): void {
    parent.addChild({
      caption: 'Главы 13, 14',
      description: (
        <>
          Примените модули на практике:<br/>
          {' '}подключите файл как модуль и используйте в нем импорт<br/>
          {' '}динамически импортируйте другой модуль, и воспользуйтесь им<br/>
          Примените Proxy на практике:<br/>
          {' '}создайте ловушку, которая делает доп. действия при записи и чтении<br/>
          {' '}создайте ловушку, которая пересчитывает полное имя при изменении фамилии или имени<br/>
          {' '}почитайте про фреймворк Vue и как реализована его реактивность в версиях 2 и 3<br/>
          Примените eval на практике:<br/>
          {' '}выполните код в eval, взяв его из prompt в браузере<br/>
          Как работает побитовое И, ИЛИ, НЕ?<br/>
          Что делает с числом побитовое НЕ?<br/>
          <br/>
        </>
      )
    });
  }
}

export const chapters12to14 = new Part3Builder();
