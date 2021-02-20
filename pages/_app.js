import ProType from 'prop-types';
import Header from '../componet/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}
MyApp.propTypes = {
  Component: ProType.any,
  pageprops: ProType.any,
};

export default MyApp;
