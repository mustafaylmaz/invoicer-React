import React from 'react'

export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
    return (
        <>
            <article className="my-5 flex items-end justify-end">
                <ul>
                    <li> <span className="font-bold"> Invoicer number: {invoiceNumber}</span></li>
                    <li> <span className="font-bold"> Invoicer date: {invoiceDate} </span></li>
                    <li> <span className="font-bold"> Due date: {dueDate}</span></li>

                </ul>
            </article>
        </>
    )
}
