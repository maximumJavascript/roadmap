import * as css from './Card.module.sass';
import {ReactNode, CSSProperties} from "react";
import cn from 'classnames';
import {CardCaption, CardDescription} from 'modules/Card/Card.styled';

type CardProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  data: ISchemaElement;
  recurrent?: boolean;
  placement?: ISchemaElement['placement'];
}

export default function Card({data, placement, recurrent = true, className, style}: CardProps) {
  return (
    <div
      className={cn(css.cardRelativeWrap, css[`card_${placement}`], className)}
      style={style}
    >
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
