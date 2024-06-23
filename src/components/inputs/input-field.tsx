import { InputContainer, Input, StyledLabel } from "./styles";

type LabelFieldProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputField: React.FC<LabelFieldProps> = ({
  value,
  onChange,
  label,
  readOnly,
  disabled,
  placeholder,
  type = "text",
  className,
  style,
}) => {
  return (
    <InputContainer>
      <StyledLabel>
        {label}
        <Input
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
          value={value}
          className={className}
          style={style}
        />
      </StyledLabel>
    </InputContainer>
  );
};
