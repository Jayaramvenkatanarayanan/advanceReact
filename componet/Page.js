import ProType from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>This is Pages content.</h2>
      <div>{children}</div>
    </div>
  );
}

Page.propTypes = {
  children: ProType.any,
};
