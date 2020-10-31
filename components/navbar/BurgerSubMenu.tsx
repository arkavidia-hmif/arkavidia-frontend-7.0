import * as React from 'react';
import Link from 'next/link';

type ArrayType = {
    path: string,
    text: string
}

type Props = {
    items: ArrayType[],
    toggle: boolean,
}

const BurgerSubMenu : React.FC<Props> = ({items, toggle}) => (
  <div className="sub-menu">
    {items.map((item, index) => (
      <Link href={item.path} key={index}><a>{item.text}</a></Link>
    ))}
    <style jsx>{`
            .sub-menu {
                display: ${toggle ? 'flex' : 'none'};
                flex-direction: column;
                padding: 10px 0;
            }

            a {
                font-weight: 700;
                color: #FFFF;
                padding-bottom: 1rem;
            }

            a:last-child {
                padding: 0;
            }
        `}</style>
  </div>
);

export default BurgerSubMenu;