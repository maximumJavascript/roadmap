import * as css from './Card.styled.module.sass';
import {PropsWithChildren} from 'react';

export function CardDescription({children}: PropsWithChildren<any>): JSX.Element | null {
  if (!children) return null;

  return (
    <pre className={css.card__description}>
      {children}
    </pre>
  );
}

export function CardCaption({children}: PropsWithChildren<any>): JSX.Element | null {
  if (!children) return null;

  return (
    <div className={css.card__caption}>
      <h4>
        {children}
      </h4>
    </div>
  );
}
