const Card = ({ children }) => {
    return (
        <div className="w-full h-full rounded-md shadow-lg p-4 flex justify-center items-center flex-col">
            {children}
        </div>
    );
};

export default Card;
