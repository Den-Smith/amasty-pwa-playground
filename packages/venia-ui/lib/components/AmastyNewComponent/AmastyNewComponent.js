import React from 'react';
import PropTypes from 'prop-types';
import { mergeClasses } from '../../classify';
import defaultClasses from './AmastyNewComponent.css';

/**
 * @typedef AmastyNewComponent
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element}
 */
const AmastyNewComponent = props => {
    const { test } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <p>{test}</p>
        </div>
    );
};

/**
 * Props for {@link AmastyNewComponent}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the AmastyNewComponent component.
 */
AmastyNewComponent.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    test: PropTypes.string,
};

AmastyNewComponent.defaultProps = {
    test: 'test'
};

export default AmastyNewComponent;
