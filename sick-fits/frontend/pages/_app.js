import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class StoreApp extends App {
  static async getInitialProps({ Component, context }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(context);
    // this exposes the query to the user
    pageProps.query = context.query;
    return { pageProps }
  }
  

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(StoreApp);
