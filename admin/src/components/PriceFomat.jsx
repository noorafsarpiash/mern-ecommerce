import React from 'react'
import { twMerge } from 'tailwind-merge';

const PriceFomat = ({ amount, className }) => {
    const formattedAmount = new Number(amount).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <span className={twMerge("font-semibold", className)}>{formattedAmount}</span>
    )
}

export default PriceFomat
