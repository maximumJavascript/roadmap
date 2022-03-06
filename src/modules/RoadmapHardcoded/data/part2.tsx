import SchemaElement from 'modules/SchemaBuilder/SchemaElement';

const part2 = new SchemaElement('');

part2
  .addChild(
    {
      caption: 'Глава 8',
      description: (
        <>
          Как осуществить прототипное наследование?<br/>
          Как осуществить наследование свойства в this?<br/>
          Как создать объект без прототипа?<br/>
          Как изменить прототип у созданного объекта?<br/>
          Как получить прототип у объекта/числа/строки/функции?<br/>
        </>
      ),
    },
  ).getLastChild()
  .addChild(
    new SchemaElement({
      caption: 'Реализовать forEach/map/reduce на прототипах',
    }).setPlacement('bottom')
      .addChild(
        new SchemaElement({
          caption: 'Реализовать bind/call/apply на прототипах',
        }).setPlacement('bottom')
      )
  )
  .addChild({
    caption: 'Глава 9',
    description: (
      <>
        Что значит "синтаксический сахар"?<br/>
        Классы это синтаксический сахар?<br/>
        {' '}Сахар над чем? Привести аналогии по синтаксису<br/>
        Какие есть виды полей в классах?<br/>
        Какие поля пишутся в прототип, а какие в инстанс?<br/>
        Можно ли обратиться к статическому полю из this?<br/>
        Можно ли переопределить метод в дочернем классе?<br/>
        Можно ли переопределить метод в инстансе класса?<br/>
      </>
    )
  }).getLastChild()
  .addChild(
    new SchemaElement({
      caption: 'Реализовать сериализатор абстрактного инстанса класса',
    }).setPlacement('bottom')
  )
  .addChild({
    caption: 'Глава 10',
    description: (
      <>
        Что будет с кодом ниже после throw?<br/>
        Что будет с кодом второго setTimeout после throw в первом?<br/>
        Что будет с кодом ниже, если код выше обернут в try..catch и делает throw?<br/>
        Что технически возможно throw'ить?<br/>
        Можно ли сделать блок try без catch?<br/>
        Можно ли сделать блок try..finally без catch?<br/>
        Зачем нужна обработка ошибок? Используется ли она на проде?<br/>
      </>
    )
  }).getLastChild()
  .addChild({
    caption: 'Глава 11',
    description: (
      <>
        Что такое колбек?<br/>
        Что такое промисы? Чем они отличаются от колбеков?<br/>
        Зачем нужны промисы?<br/>
        Являются ли аргументы then колбеками?<br/>
        Является ли промис синтаксическим сахаром и над чем?<br/>
        Метод then() возвращает новый промис?<br/>
        Что будет, если на завершенный промис добавить .then()<br/>
        Что такое микро и макро задачи? Примеры<br/>
        Что мы можем промисифицировать? Есть ли ограничения?<br/>
        Выполнится ли then после catch, если промис над catch:<br/>
        {' '}1. реджетится 2. ресолвится?<br/>
        Выполнится ли then перед catch, если промис над then:<br/>
        {' '}1. реджетится 2. ресолвится?<br/>
      </>
    )
  }).getLastChild()
  .addChild(
    new SchemaElement({
      caption: 'Реализовать класс MyPromise',
    }).setPlacement('bottom')
  )

export default part2;
