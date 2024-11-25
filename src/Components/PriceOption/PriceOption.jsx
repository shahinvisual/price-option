import Feature from "../Feature/Feature";


const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-cyan-400 rounded-xl p-4 flex flex-col">
            <h3 className="text-center">
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h3>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className="pl-12 flex-grow">
                {
                    features.map(feature => <Feature feature={feature}></Feature>)
                }
            </div>
            <button className="mt-12 bg-gray-700 text-white w-full rounded-lg font-bold py-2 hover:bg-gray-800">
                Buy Now
            </button>
        </div>
    );
};

export default PriceOption;