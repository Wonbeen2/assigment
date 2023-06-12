import React, { HTMLAttributes } from 'react';

type GridProps = HTMLAttributes<HTMLDivElement>;

const Grid = ({ children, ...rest }: GridProps) => {
  return (
    <div className="grid gap-x-20 gap-y-32 grid-cols-2 lg:grid-cols-4 md:grid-cols-3" {...rest}>
      {children}
    </div>
  );
};

export default Grid;
