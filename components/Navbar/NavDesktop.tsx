import items from "../../utils/constants/nav-items"
import event from '../../utils/constants/event'
import preevent from '../../utils/constants/preevent'
import SubMenu from './SubMenu'
import Link from 'next/link'
import FilledButton from "../FilledButton";
import { useState } from 'react'
import { useRouter } from "next/dist/client/router";

const NavDesktop: React.FC = () => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);

  const eventProps = {
    hover: hover,
    setHover: setHover
  }

  const preeventProps = {
    hover: hover1,
    setHover: setHover1
  }

  return (
    <div className="items">
      <ul className="mr-3">
        {items.map((link, index) => {
          if (link.text === 'EVENTS')
            return (
              <li key={index} className="mt-3">
                <Link href={link.path}>
                  <a className={router.pathname === link.path ? "current" : ""} onMouseEnter={() => setHover(!hover)}>
                    {link.text}
                  </a>
                </Link>
                <div className="indicator"></div>
                <SubMenu items={event} {...eventProps}/>
              </li>
            )
          else if (link.text === 'PRE-EVENTS')
            return (
              <li key={index} className="mt-3">
                <Link href={link.path}>
                  <a className={router.pathname === link.path ? "current" : ""} onMouseEnter={() => setHover1(!hover1)}>
                    {link.text}
                  </a>
                </Link>
                <div className="indicator"></div>
                <SubMenu items={preevent} {...preeventProps}/>
              </li>
            )
          return (
            <li key={index} className="mt-3">
              <Link href={link.path}><a className={router.pathname === link.path ? "current" : ""}>{link.text}</a></Link>
              <div className="indicator"></div>
            </li>
          )
        })}
      </ul>
      <FilledButton text="LOGIN" padding="0.75em 1.5em" onClick={() => { router.push("/login") }} />

      <style jsx>{`
          ul {
            display: flex;
            list-style: none;
            height: 100%;
          }

          a {
            color: #623FA2;
            font-family: Viga;
            font-style: normal;
            font-weight: normal;
            font-size: 1.5rem;
            text-decoration: none;
          }

          li {
            margin: 0 1rem;
            position: relative;
          }

          .items {
            margin-left: auto;
            display: flex;
            align-items: center;
            padding: 0 20px;
          }

          .indicator {
            opacity: 0;
            position: absolute;
            width: 100%;
            height: 8px;
            background: linear-gradient(90deg, #00FFFF 0%, #623FA2 100%);
            transition: opacity 0.1s ease-in;
            transform-origin: 1px;
          }

          a:hover + .indicator {
            opacity: 1;
          }

          a.current + .indicator {
            opacity: 1;
          }

          @media (max-width: 1300px) {
            .items {
              display: none;
            }
          }
      `}</style>
    </div>
  )
}


export default NavDesktop;