import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const LogoStyle = styled.h2`
  display: grid;
  grid-template-columns: 1fr auto;
  background: red;
  a {
    color: white;
    font-size: 2rem;
    text-align: center;
    text-decoration: none;
    font-style: bold;
  }
`;

export default function Header() {
  return (
    <header>
      <div>
        <LogoStyle>
          <Link href="/">sick fits</Link>
        </LogoStyle>
        <Nav />
      </div>
      <div className="sub-bar">search</div>
    </header>
  );
}
