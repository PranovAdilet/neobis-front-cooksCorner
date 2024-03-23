import React, {PropsWithChildren} from 'react';

const Title = ({children}: PropsWithChildren<unknown>) => {
    return <h3 className="title">{children}</h3>
};

export default Title;