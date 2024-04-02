import * as React from "react"
interface Props extends React.SVGProps<SVGSVGElement> { }
function Check({ ...props }: Props) {
    return (
        <svg
            width={17}
            height={12}
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M2.167 6l4.166 4.167 8.334-8.334"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="square"
            />
        </svg>
    )
}

export default Check
