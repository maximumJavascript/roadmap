import * as css from './RoadmapHardcoded.module.sass';
import { CardRoot } from 'modules/Card';
import {chapters1to7, chapters8to11, chapters12to14} from 'modules/RoadmapHardcoded/data';
import { Fragment } from 'react';

const rows: ISchemaElement[] = [];

const row1 = chapters1to7.createParent();
const row2 = chapters1to7.createParent();
const row3 = chapters1to7.createParent();
const row4 = chapters8to11.createParent();
const row5 = chapters8to11.createParent();
const row6 = chapters12to14.createParent();
rows.push(row1, row2, row3, row4, row5, row6);

chapters1to7.buildParts12(row1);
chapters1to7.buildPart3(row1);

chapters1to7.buildPart4(row1);
chapters1to7.buildParts56(row1);

chapters1to7.buildPart7(row1);
chapters8to11.buildPart8(row1);

chapters8to11.buildPart9(row1);
chapters8to11.buildPart10(row1);

chapters8to11.buildPart11(row1);
chapters12to14.buildPart12(row1);

chapters12to14.buildParts13to14(row1);

export function RoadmapHardcoded() {
  return (
    <div className={css.Sandbox}>
      {rows.map((rowItem, idx) => {
        return (
          <Fragment key={idx}>
            <CardRoot
              className={css.part}
              data={rowItem}
            />
          </Fragment>
        )
      })}
    </div>
  )
}
