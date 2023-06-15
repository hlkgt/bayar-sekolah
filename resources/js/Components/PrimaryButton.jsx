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
                `btn btn-active capitalize text-lg bg-blue-600 text-white ${
                    disabled && "bg-blue-200"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
