import ProType from 'prop-types';
import Page from '../componet/Page';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
MyApp.propTypes = {
  Component: ProType.any,
  pageprops: ProType.any,
};

export default MyApp;
