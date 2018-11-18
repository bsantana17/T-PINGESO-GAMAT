import React from 'react';
import Aux from '../../hoc/Aux';
import Navigation from '../Navigation/Navigation';

const layout = ( props ) => (
    <Aux>
        <Navigation></Navigation>
        <main className='p-4'> 
            {props.children}
        </main>
    </Aux>
);

export default layout;