import React, { Suspense } from 'react';
import { bool, shape, string } from 'prop-types';
import { useScrollLock } from '@magento/peregrine';

import { mergeClasses } from '../../classify';
import Footer from '../Footer';
import Header from '../Header';
import defaultClasses from './main.css';
import AmastyColorTheme from "../AmastyColorTeme";

const Main = props => {
    const { children, isMasked } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    const rootClass = isMasked ? classes.root_masked : classes.root;
    const pageClass = isMasked ? classes.page_masked : classes.page;

    useScrollLock(isMasked);

    return (
        <main className={rootClass}>
            <Header />
            <div className={pageClass}>{children}</div>
            <Footer />
            <Suspense fallback={null} >
                <AmastyColorTheme />
            </Suspense>
        </main>
    );
};

export default Main;

Main.propTypes = {
    classes: shape({
        page: string,
        page_masked: string,
        root: string,
        root_masked: string
    }),
    isMasked: bool
};
