const Container = ({ children, col }) => (
  <div className={`container-${col}`}>
    { children }
  </div>
);

export default Container;
