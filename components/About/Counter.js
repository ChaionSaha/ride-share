const Counter = ({ number, text }) => {
    return (
        <div className="">
            <p className="text-2xl font-bold">{number}</p>
            <p className="text-lg">{text}</p>
        </div>
    );
}

export default Counter;