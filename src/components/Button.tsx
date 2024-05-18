type TypeButton = {
  className: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
};
const Button = ({ className, children, onClick }: TypeButton) => {
  const classes = `${className || ""}`;
  return (
    <div className={`${classes}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
