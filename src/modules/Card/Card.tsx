import * as css from './Card.module.sass';
import {ReactNode} from "react";

type CardProps = {
  children?: ReactNode;
}

export default function Card({children}: CardProps) {
  return (
    <div className={css.Card}>
      <h4>
        {children}
      </h4>
    </div>
  )
}
