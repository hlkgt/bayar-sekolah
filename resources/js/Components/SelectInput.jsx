const SelectedValue = ({ text, value, data }) => {
    return (
        <option value={value} selected={data === value}>
            {text}
        </option>
    );
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
