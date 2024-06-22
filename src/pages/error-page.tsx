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
      <h1> Oops!</h1>

      <p>
        <i> Page {error?.statusText || error?.message}</i>
      </p>
    </ErrorPageWrapper>
  );
};
