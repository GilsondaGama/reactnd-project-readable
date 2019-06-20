import React from 'react';
import ContainerPostsList from './ContainerPostsList';

class Main extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <ContainerPostsList match={match} />
    );
  }
}

export default Main
