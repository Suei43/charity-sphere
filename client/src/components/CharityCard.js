export const CharityCard = ({ name, logo }) => {
    return (
        <div className="flex flex-col items-center justify-center w-64 h-64 p-4 m-4 bg-white rounded-lg shadow-md gap-y-5 cursor-pointer hover:shadow-xl">
            <img src={logo} alt={name} className="w-32" />
            <h3 className="text-xl font-bold font text-center">{name}</h3>
        </div>
    );    
};