import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>Oups !</h1>
        <p>Page non trouvée... tristesse... :(</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
