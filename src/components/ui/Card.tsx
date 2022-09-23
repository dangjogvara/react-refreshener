import { ReactNode } from 'react';
import classes from './Card.module.css';

interface cardProps {
  children: ReactNode;
}

function Card({ children }: cardProps) {
  return <div className={classes.card}>{children}</div>;
}

export default Card;
