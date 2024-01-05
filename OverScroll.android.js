'use strict';

import React from 'react';
import { requireNativeComponent} from 'react-native';

const OverScrollNative = requireNativeComponent('OverScroll', OverScroll);

const OverScroll = (props) => {
  const {
    bounce = true,
    onOverScroll = () => {}
  } = props;

  return (
    <OverScrollNative 
      bounce={bounce}
      onOverScroll={onOverScroll}
      {...props} 
    />
  );
};

export default OverScroll;