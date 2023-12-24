import * as css from './Card.module.sass';
import { CardCaption, CardDescription } from 'modules/Card/Card.styled';
import cn from 'classnames';

type Props = {
  data: ISchemaElement;
}

function CardItem({ data }: Props): JSX.Element {
  const rightChildren = data.children.filter(x => x.placement === "right");
  const bottomChildren = data.children.filter(x => x.placement === "bottom");

  return (
    <>
      {data.content.caption && (
        <div className={css.cardColumn}>
          <div>
            <CardCaption>
              {data.content.caption}
            </CardCaption>

            <CardDescription>
              {data.content.description}
            </CardDescription>
          </div>

          {bottomChildren.map((x, idx) => <CardItem data={x} key={idx} />)}
        </div>
      )}

      {rightChildren.map((x, idx) => <CardItem data={x} key={idx} />)}
    </>
  )
}

type CardRootProps = {
  className?: string;
  data: ISchemaElement;
}

export function CardRoot({ className, data }: CardRootProps) {
  return (
    <div
      className={cn(css.cardRoot, className)}
    >
      <CardItem data={data} />
    </div>
  );
}
