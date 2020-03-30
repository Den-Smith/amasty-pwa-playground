import React from 'react';

const Black = props => {
    const { color } = props;

    return (
        <div>
            <p>{color}</p>

            <style dangerouslySetInnerHTML={{__html: `
              :root {
                 --venia-grey: 50, 50, 50;
               }
            `}} />
        </div>
    );
};

export default Black;
