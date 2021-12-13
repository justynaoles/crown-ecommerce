import React from 'react';
import withData from '../../hoc/with-data';
import Opinions from '../../components/opinions/opinions.component';
import Comments from './../../components/comments/comments.component';

const opinionsPage = () => (
    <>
        <Opinions dataUrl='https://jsonplaceholder.typicode.com/posts'/>
        <Comments dataUrl='https://jsonplaceholder.typicode.com/comments'/>
    </>
);
 
export default withData(opinionsPage);