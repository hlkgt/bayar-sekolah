export default function SecondaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `btn capitalize text-lg bg-slate-400 text-white hover:bg-slate-700 ${
                    disabled && "opacity-80"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
