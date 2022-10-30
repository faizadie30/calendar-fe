import React, { useEffect } from 'react';

function Meta(props) {
  const { title } = props;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <></>;
}

export default Meta;
