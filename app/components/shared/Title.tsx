import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h4 className="text-3xl md:text-4xl font-semibold text-center">
      {children}
    </h4>
  );
};

export default Title;