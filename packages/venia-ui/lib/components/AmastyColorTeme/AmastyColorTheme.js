import React, {useState, useEffect, Component} from 'react';
import PropTypes from 'prop-types';
import { mergeClasses } from '../../classify';
import defaultClasses from './AmastyColorTheme.css';


const Red = React.lazy(() => import('./themes/Red'));
const Black = React.lazy(() => import('./themes/Black'));

class AmastyColorTheme extends Component  {
    state = {
        color: '200,200,200',
    };

    render() {
        const classes = mergeClasses(defaultClasses);


        const handleChange = (e) => {
            this.setState({
                color: e.target.value,
            })
        };

        return (
            <div className={classes.root}>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <p className={classes.title}>Choose color: </p>
                        <input type="text" onChange={handleChange}/>
                        <Red color={this.state.color} />
                    </div>

                </div>

            </div>
        );
    }
};

export default AmastyColorTheme;
