import React from 'react';
import PropTypes from 'prop-types';
import { mergeClasses } from '../../classify';
import Image from '../Image';
import defaultClasses from './bestComponentEver.css';
import logo from './bestLogo.jpg';

/**
 * A component that renders a logo in the header.
 *
 * @typedef BestComponentEver
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a logo.
 */
const BestComponentEver = props => {
    const { height, width } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <img
                alt="SSanina"
                className={classes.image}
                height={height}
                src={logo}
                title="SSanina"
                width={width}
            />
        </div>
    );
};

/**
 * Props for {@link BestComponentEver}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the
 * Logo component.
 * @property {string} classes.logo classes for logo
 * @property {number} height the height of the logo.
 */
BestComponentEver.propTypes = {
    classes: PropTypes.shape({
        image: PropTypes.string
    }),
    height: PropTypes.number,
    width: PropTypes.number
};

BestComponentEver.defaultProps = {
    height: 100,
    width: 100
};

export default BestComponentEver;
