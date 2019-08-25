import React from 'react';
import { Box } from '@material-ui/core';

import { ActiveContainer, ActiveContainerSkeleton } from './ActiveContainer';

class ActiveContainerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      containersInfo: [],
    };
  }

  componentDidMount() {
    fetch('/rest/containers/list')
      .then((res) => res.json())
      .then((result) => {
        this.setState({ isLoaded: true, containersInfo: result });
      }, (error) => {
        this.setState({ isLoaded: true, error });
      });
  }

  render() {
    const { isLoaded, containersInfo } = this.state;

    let containersComponents = (
      <>
        <ActiveContainerSkeleton />
        <ActiveContainerSkeleton />
        <ActiveContainerSkeleton />
        <ActiveContainerSkeleton />
      </>
    );
    if (isLoaded) {
      containersComponents = containersInfo.map((c) => (
        <ActiveContainer key={c.id} container={c} />
      ));
    }

    return (
      <Box display="flex" flexWrap="wrap">
        {containersComponents}
      </Box>
    );
  }
}

export default ActiveContainerTable;
