import React from 'react';

const ConditionWrapper = ({
  condition,
  wrapper,
  children
}: {
  condition: boolean;
  wrapper: React.FC<JSX.Element>;
  children: JSX.Element;
}) => {
  return condition ? wrapper(children) : children;
};

export default ConditionWrapper;
