export default function SuccessButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `btn capitalize text-lg bg-teal-400 text-white hover:bg-teal-700 ${
                    disabled && "opacity-80"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
