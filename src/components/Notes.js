import React from 'react';

const Notes = ({notes}) => {
    return (
        <>
            <section className="mb-5">
                <p>{notes}</p>
            </section>
        </>
    );
}

export default Notes;
