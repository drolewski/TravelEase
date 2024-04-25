import {useEffect, useState} from "react";
import fetch from "node-fetch";
import Radio from "@/atoms/radio/radio";
import {PriceRange, PriceValue, TravelFormData} from "@/organism/form/formData";

type PriceProps = {
    formData: TravelFormData;
    setPrice: (value: TravelFormData) => void;
}

const Price = ({formData, setPrice}: PriceProps) => {
    const currency = "USD";
    const [mid, setMid] = useState<number>();

    useEffect(() => {
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`, {method: 'GET'})
            .then(res => res.json())
            .then(data => setMid(data.rates[0].mid))
    }, []);

    const label = (priceRange: PriceRange) => {
        if (priceRange.min === 0) {
            return `Less than ${Math.round(priceRange.max / mid)}$`;
        }
        if (priceRange.min && !priceRange.max) {
            return `More than ${Math.round(priceRange.min / mid)}$`;
        }
        if (priceRange.min && priceRange.max) {
            return `${Math.round(priceRange.min / mid)}$ - ${Math.round(priceRange.max / mid)}$`;
        }
    }

    return <>
        <span className="text-lg">What is your travel time?</span>
        {Object.values(PriceValue).filter(pr => typeof pr !== "string")
            .sort((a, b) => a.min - b.min)
            .map(pr => <Radio key={pr.min} label={label(pr)} value={pr as PriceRange === formData?.price}
                              onChange={(e) => setPrice({...formData, price: pr})}/>)}
    </>;
}

export default Price;