import axios from "axios";
import { useEffect, useState } from "react";
axios
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner'
    ;


const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                console.log(phoneData);
                const phonesWithFakeData = phoneData.map(data => {
                    // console.log(data.slug.split('-')[1]);
                    const obj = {
                        name: data.phone_name,
                        price: parseInt(data.slug.split('-')[1]),

                    }
                    return obj;
                })
                setPhones(phonesWithFakeData);
                setLoading(false);

            });
    }, [])
    return (
        <div>
           { loading && <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
            />}
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>

        </div>
    );
};

export default Phones;