export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `btn btn-success capitalize text-lg bg-teal-400 text-white ${
                    disabled && "opacity-80"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
