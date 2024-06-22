type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "contained" | "outlined" | "text";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  variant,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={variant ? { backgroundColor: "#2626fa", color: "white" } : {}}
    >
      {children}
    </button>
  );
};
