import React from 'react'

const MenuDots = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill={props.fill}
        viewBox="0 0 6 23"
        {...props}
    >
        <path
            stroke={props.strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM13 19a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
        />
    </svg>
)

export default MenuDots