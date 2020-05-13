import * as React from 'react';


export const useModal = () => {
  const [isShowing, toggle] = React.useState(false);




  return {isShowing, toggle};
} 