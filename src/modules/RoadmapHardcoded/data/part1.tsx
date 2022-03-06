import SchemaElement from 'modules/SchemaBuilder/SchemaElement';

const part1 = new SchemaElement('');

part1
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
        Добавить ошибку в код и найти ее при отладке<br/>
        Воспользоваться debugger в IDE в node.js<br/>
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
        Чему равен this в геттерах/сеттерах объекта?<br/>
        Чему равен this внутри функции-стрелки?<br/>
        Как сделать, чтобы объект:<br/>
        {'  '}был равен определенному числу?<br/>
        {'  '}был равен определенной строке?<br/>
        {'  '}был не равен сам себе?<br/>
      </>
    ),
  }).getLastChild()
  .addChild({
    caption: 'Главы 5, 6',
    description: (
      <>
        Как работают вызовы методов у примитивов?<br/>
        Как можно классифицировать методы массивов?<br/>
        Чем отличается Map от объекта?<br/>
        Чем отличается WeakMap от Map?<br/>
        Что такое замыкание?<br/>
        На чем и когда замыкается функция?<br/>
        Что такое рекурсия?<br/>
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
        }).setPlacement('bottom')
          .addChild({
            caption: 'оптимизировать функцию getStringCount из задачи, чтобы результат кешировался в WeakMap'
          })
      )
  )
  .addChild({
    caption: 'Глава 7',
    description: (
      <>
        Чем отличается геттер от свойства?<br/>
        Как можно классифицировать дескрипторы?<br/>
        Какие дескрипторы можно использовать вместе?<br/>
        Какие дескрипторы нельзя использовать вместе?<br/>
        Можно ли использовать this в геттере?<br/>
        Можно ли использовать this в свойстве?<br/>
        Можно ли использовать this в дескрипторе геттера?<br/>
      </>
    )
  }).getLastChild()
  .addChild(new SchemaElement({
    caption: 'Написать софт на чайник на ООП',
    description: (
      <>
        Или другую технику<br/>
        Простое: Телевизор, Бритва и т.д.<br/>
        {' '}(для разогрева)<br/>
        Сложнее: чайник, увлажнитель, кулер<br />
        {' '}(setInterval, датчики)<br/>
        О_о: пылесос, бойлер, мультиварка<br />
        {' '}(больше датчиков и асинхронщины)<br/>
      </>
    )}).setPlacement('bottom')
)

export default part1;
