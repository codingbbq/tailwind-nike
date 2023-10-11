const Button = ({ label, iconURL }) => {
    return (
        <>
            <button className="flex justify-center items-center gap-3 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
                { label }
                { iconURL && <img src={iconURL} className="w-5 h-5 rounded-full ml-2" /> }
            </button>
        </>
    )
};

export default Button;