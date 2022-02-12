import React from 'react';
import { useState, useEffect } from 'react';
import withData from '../../hoc/with-data';
import Opinions from '../../components/opinions/opinions.component';
import Comments from './../../components/comments/comments.component';

function OpinionsPage() {

    const [count, setCount] = useState(0);
    const [buttonClick, setButtonClick] = useState(0);

    useEffect(() => {

    const increaseCount = () => {
        setCount(count + 1);
    };

    increaseCount();
    },[buttonClick])

    return (
        <>
        <Opinions dataUrl='https://jsonplaceholder.typicode.com/posts'/>
        <Comments dataUrl='https://jsonplaceholder.typicode.com/comments'/> 
        <button onClick={() => setButtonClick(buttonClick + 1)}>Click to increase</button>
        <p>{count}</p>
        </>
    )
}
 
export default withData(OpinionsPage);