import React from 'react';
import PropTypes from 'prop-types';

export default function CarouselItem({ children }) {
  return <div className="md:w-72 md:h-72 sm:w-30 sm:h-30 w-20 h-20 m-4 bg-orange-300 flex-none">{children}</div>;
}

CarouselItem.propsTypes = {
  children: PropTypes.node,
};
