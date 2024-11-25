import { IoIosCheckmarkCircle } from "react-icons/io";
const Feature = ({feature}) => {
    return (
        <div className="flex items-center gap-3">
            <IoIosCheckmarkCircle className="text-gray-700"></IoIosCheckmarkCircle>
            <h4>{feature}</h4>
        </div>
    );
};

export default Feature;