import React from 'react';
import useFetch from '../../use/useFetch';

const Comments = () =>  {
    const data = useFetch('https://jsonplaceholder.typicode.com/comments');
    const dataArray = data ? data.slice(0,10) : [];

    console.log('data arr', dataArray);


    return (
        <section>
            <h2>Comments: </h2>
            {
                dataArray.length > 0 ? dataArray.map(element =>
                    <div key={element.id}>
                     <h4>{element.name}</h4>
                        <p>{element.body}</p>
                    </div>
                )
                
                :

                'no comments'
            }
        </section>
    )
}

export default Comments;