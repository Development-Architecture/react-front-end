import React from "react";

function Index({ title, children }) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
    return child;
  });
  return (
    <div className="list-table-title-container">
      <div>
        <span className="table-title">{title}</span>
      </div>
      <div>
        <span>{childrenWithProps}</span>
      </div>
    </div>
  );
}

export default Index;
