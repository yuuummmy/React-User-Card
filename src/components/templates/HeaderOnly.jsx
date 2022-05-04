export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <div style={{ height: "60px", backgroundColor: "red" }}></div>
      {children}
    </>
  );
};
