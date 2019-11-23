import React from 'react';

import { Link } from 'react-router-dom';

class Home extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {

        return(
            <div>
                <Link to={'/Ex1'}>
                    <span>实验一</span>
                </Link>
                <Link to={'/Ex2'}>
                    <span>实验二</span>
                </Link>
            </div>
        )
    }

}
export default Home;
