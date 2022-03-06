import * as css from './RoadmapHardcoded.module.sass';
import Card from 'modules/Card';
import {part1, part2, part3} from 'modules/RoadmapHardcoded/data';

// console.log(data);

export function RoadmapHardcoded() {
  return (
    <div className={css.Sandbox}>
      <Card
        className={css.part}
        data={part1}
      />

      <hr />

      <Card
        className={css.part}
        data={part2}
      />

      <hr />

      <Card
        className={css.part}
        data={part3}
      />
    </div>
  )
}
