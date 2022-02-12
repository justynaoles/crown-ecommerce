import React from 'react';
import withData from './../../hoc/with-data';

const Opinions = ({data}) =>    {

    return (
        <section>
        <h1>Opinions</h1>
    
        {
            data.map(opinion => (
                <article key={opinion.id}>
                    <h2>{opinion.title}</h2>
                    <p>{opinion.body}</p>
                </article>          
            ))
        }
        
        </section>
    )
}

export default withData(Opinions);