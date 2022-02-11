import * as css from './RoadmapHardcoded.module.sass';
import SchemaElement from "../SchemaBuilder/SchemaElement";
import Card from 'modules/Card';

const data = new SchemaElement('');

data
  .addChild(
    {
      caption: 'Главы 1, 2',
      description: (
        <>
          Сколько типов данных в JS?<br/>
          {'Что возвращают и как работают операторы?'}<br/>
          {'> >= >= < <= == === && || ! !!'}<br/>
          <br/>
          Как работают сравнения на разных типах?<br/>
          Сравнения между undefined, null, NaN<br/>
          Почему switch не называется циклом?<br/>
          Что такое функция?<br/>
        </>
      ),
    },
  ).getLastChild()
  .addChild({
    caption: 'Глава 3',
    description: (
      <>
        Воспользоваться debugger и отладчиком Chrome<br/>
        Добавить ошибку в код и найти ее при отладке
      </>
    ),
  }).getLastChild()
  .addChild(
    new SchemaElement({
      caption: 'Задачи по Git #1, #2',
      description: 'DL 2 недели на 2 задачи'
    }).setPlacement('bottom'),
  )
  .addChild({
    caption: 'Глава 4',
    description: (
      <>
        Что такое this?<br/>
        Как "потерять" this?<br/>
        Как "не терять" this?<br/>
        Чему равен this в свойствах объекта?<br/>
        Чему равен this внутри функции-стрелки?<br/>
        Преобразование {'\{\}'} в примитивы<br/>
      </>
    ),
  }).getLastChild()
  .addChild({
    caption: 'Главы 5, 6',
    description: (
      <>
        Как работают вызовы методов у примитивов?<br/>
        Как можно классифицировать методы массивов?<br/>
        Что такое замыкание?<br/>
        На чем и когда замыкается функция?<br/>
        Как можно оптимизировать рекурсию?<br/>
        Что такое синхронный и асинхронный код?<br/>
      </>
    ),
  }).getLastChild()
  .addChild(
    new SchemaElement({
      caption: 'Задачи на методы массивов + рекурсию',
    }).setPlacement('bottom')
    .addChild(
      new SchemaElement({
        caption: 'Задача по Git #3',
        description: 'DL 2 недели на задачи'
      }).setPlacement('bottom'),
    )
  )
  .addChild({
    caption: 'Глава 7',
    description: (
      <>
        Как можно классифицировать дескрипторы?<br/>
        Какие дескрипторы можно использовать вместе?<br/>
        Какие дескрипторы нельзя использовать вместе?<br/>
      </>
    )
  }).getLastChild()
  .addChild(new SchemaElement({
    caption: 'Написать софт на чайник на ООП',
    description: (
      <>
        Или другую технику<br/>
        Простое: Телевизор, Бритва и т.д. (для разогрева)<br/>
        Сложнее: чайник, увлажнитель, кулер (setInterval, датчики)<br/>
        О_о: пылесос, бойлер, мультиварка (много датчиков и асинхронщины)<br/>
        DL 2 недели на задачи
      </>
    )}).setPlacement('bottom')
  )

// console.log(data);

export function RoadmapHardcoded() {
  return (
    <div className={css.Sandbox}>
      <Card
        data={data}
      />
    </div>
  )
}
