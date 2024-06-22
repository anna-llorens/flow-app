import { useRouteError } from "react-router-dom";
import styled from "styled-components";

type ErrorType = {
  statusText: string;
  message: string;
};

const ErrorPageWrapper = styled.div``;

export const ErrorPage = () => {
  const error = useRouteError() as ErrorType;
  return (
    <ErrorPageWrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </ErrorPageWrapper>
  );
};
