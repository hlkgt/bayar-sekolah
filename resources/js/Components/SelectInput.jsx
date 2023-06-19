const SelectedValue = ({ text, ...props }) => {
    return <option {...props}>{text}</option>;
};

const SelectInput = ({
    children,
    className = "select select-bordered w-full capitalize",
    ...props
}) => {
    return (
        <select {...props} className={className}>
            {children}
        </select>
    );
};

SelectInput.Option = SelectedValue;

export default SelectInput;
