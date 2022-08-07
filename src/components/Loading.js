import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loading = () => {
    return (<h1 className="loading">
        <CircularProgress color="secondary" />
    </h1>);
}

export default Loading;