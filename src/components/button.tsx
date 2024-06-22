import styled from "styled-components";

const StyledButton = styled.button<{ $variant: ButtonProps["variant"] }>`
  background-color: ${({ $variant }) =>
    $variant === "contained"
      ? " #2b6fb3;"
      : $variant === "destroy"
      ? "#868484"
      : "inherit"};
  color: ${({ $variant }) => (!$variant ? "inherit" : "white")};
  width: ${({ $variant }) => ($variant === "contained" ? "200px" : "auto")};
`;

type ButtonProps = {
  variant?: "contained" | "destroy";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  variant,
}) => (
  <StyledButton type={type} onClick={onClick} $variant={variant}>
    {children}
  </StyledButton>
);
