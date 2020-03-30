import React from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';

import { mergeClasses } from '../../classify';
import SuggestedCategory from './suggestedCategory';
import defaultClasses from './suggestedCategories.css';

const SuggestedCategories = props => {
    const { categories, limit, onNavigate, value } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    const items = categories
        .slice(0, limit)
        .map(({ label, value_string: categoryId }) => (
            <li key={categoryId} className={classes.item}>
                <SuggestedCategory
                    categoryId={categoryId}
                    label={label}
                    onNavigate={onNavigate}
                    value={value}
                />
            </li>
        ));

    return <ul className={classes.root}>{items}</ul>;
};

export default SuggestedCategories;

SuggestedCategories.defaultProps = {
    limit: 4
};

SuggestedCategories.propTypes = {
    categories: arrayOf(
        shape({
            label: string.isRequired,
            value_string: string.isRequired
        })
    ).isRequired,
    classes: shape({
        item: string,
        root: string
    }),
    limit: number.isRequired,
    onNavigate: func,
    value: string
};
