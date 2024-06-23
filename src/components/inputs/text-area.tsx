import { InputContainer, StyledLabel, StyledTextArea } from "./styles";

type TextAreaProps = {
  label?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  label,
  readOnly,
  disabled,
  placeholder,
  className,
  style,
  rows =5,
  cols = 50,
}) => {
  return (
    <InputContainer>
      <StyledLabel>
        {label}
        <StyledTextArea
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          cols={cols}
          rows={rows}
          value={value}
          className={className}
          style={style}
        />
      </StyledLabel>
    </InputContainer>
  );
};
