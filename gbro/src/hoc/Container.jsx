import React from "react";


const Container = (Component, id) =>
  function HOC() {
    return (
      <section>
        <span className='hash-span' id={id}>
          &nbsp;
        </span>
        <Component />
      </section>
    );
  };

export default Container;
