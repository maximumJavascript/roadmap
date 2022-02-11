import * as css from './Card.module.sass';
import {ReactNode} from "react";
import cn from 'classnames';
import {CardCaption, CardDescription} from 'modules/Card/Card.styled';

type CardProps = {
  children?: ReactNode;
  data: ISchemaElement;
  recurrent?: boolean;
  placement?: ISchemaElement['placement'];
}

export default function Card({data, placement, recurrent = true}: CardProps) {
  return (
    <div className={cn(css.cardRelativeWrap, css[`card_${placement}`])}>
      {data.content.caption && (
        <div>
          <CardCaption>
            {data.content.caption}
          </CardCaption>

          <CardDescription>
            {data.content.description}
          </CardDescription>
        </div>
      )}

      {recurrent && data.children.map((x, idx) => {
        return (
          <Card
            data={x}
            key={idx}
            placement={x.placement}
          />
        )
      })}
    </div>
  );
}
