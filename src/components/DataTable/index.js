import React from "react";
import "./styles.css";

function Index({ gridListClass, headerList, children }) {

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
    return child;
  });

  return (
    <div className={`list-table-container`}>
      <div className={`list-table-header  ${gridListClass}`}>
        {headerList &&
          headerList.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
      </div>
      <div className="list-table-body-container ${gridListClass}">{childrenWithProps}</div>
    </div>
  );
}

export default Index;
