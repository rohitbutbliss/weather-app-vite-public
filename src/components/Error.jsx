import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <>
      {err.status} : {err.statusText}
    </>
  );
};

export default Error;
