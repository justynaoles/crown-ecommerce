import React from 'react';
import withData from './../../hoc/with-data';

const Comments = ({data}) => (
    <section>
        <h1>Comments</h1>

        {
            data.map(comment => (
                <article key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                </article>          
            ))
        }
    </section>
);

export default withData(Comments);