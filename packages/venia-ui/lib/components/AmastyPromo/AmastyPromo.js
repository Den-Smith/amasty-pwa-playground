import React from 'react';
import PropTypes from 'prop-types';
import { mergeClasses } from '../../classify';
import defaultClasses from './AmastyPromo.css';
import { Price } from '@magento/peregrine';
import {Smile as SmileIcon} from "react-feather";
import Icon from "../Icon/icon";

/**
 * A component that renders the Promotion discount block, that content a product name and calculate
 * a discount from a product price.
 *
 * @typedef AmastyPromo
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a discount block.
 */
const AmastyPromo = props => {
    const { title, productName, price, currencyCode, discount } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>

            <Icon src={SmileIcon}
                  size={140}
                  attrs={{
                      opacity: 0.2
                  }}
                  className={classes.icon}
            />
            <p className={classes.title}>{title}</p>
            <div className={classes.content}>
                <div className={classes.product}>{productName}:</div>
                <span className={classes.oldValue}>
                    <Price
                        currencyCode={currencyCode}
                        value={price + (price / 100) * discount}
                    />
                </span>
                <span className={classes.newValue}>
                    <Price
                        currencyCode={currencyCode}
                        value={price}
                    />
                </span>
            </div>

        </div>
    );
};

/**
 * Props for {@link AmastyPromo}
 *
 * @typedef props
 *
 * @property {Object} classes An object containing the class names for the AmastyPromo component.
 */
AmastyPromo.propTypes = {
    classes: PropTypes.shape({
        product: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        oldValue: PropTypes.string,
        newValue: PropTypes.string,
    }),
    title: PropTypes.string,
    productName: PropTypes.string,
    price: PropTypes.number,
    currencyCode: PropTypes.string,
    discount: PropTypes.number,
};

AmastyPromo.defaultProps = {
    title: 'Title is unset',
    productName: 'product is unset',
    currencyCode: 'USD',
    price: 0,
    discount: 0,
};

export default AmastyPromo;
