import React, { useEffect, useRef } from "react";

const Section = ({ id, registerObserver, children }) => {
  const ref = useRef();

  // useEffect(() => {
  //   const observer = registerObserver(ref, id);

  //   return () => {
  //     observer.unobserve(ref.current);
  //   };
  // }, [ref, registerObserver, id]);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = registerObserver(currentRef, id);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, registerObserver, id]);

  return (
    <div id={id} ref={ref}>
      {children}
    </div>
  );
};
export default Section;
