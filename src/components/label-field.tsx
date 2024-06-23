import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
`;

export const LabelText = styled.label`
  color: #1976d2;
  font-weight: bold;
  font-size: 12px;
`;

type LabelFieldProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const LabelField: React.FC<LabelFieldProps> = ({
  value,
  onChange,
  label,
  readOnly,
  disabled,
}) => {
  return (
    <Container>
      <label>
        {label && <LabelText>{label}</LabelText>}
        <StyledInput
          type="text"
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
          placeholder="Add description to item"
        />
      </label>
    </Container>
  );
};
