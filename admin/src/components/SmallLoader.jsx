import React from 'react'

const SmallLoader = () => {
    return (
        <div className="flex items-center justify-center py-5">
            <svg
                className="animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="40"
                height="40"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="gray"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="black"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
            </svg>
        </div>
    )
}

export default SmallLoader