import React from 'react';

const Red = props => {
    const { color } = props;

    return (
        <div>
            {/*<p>{color}</p>*/}

            <style dangerouslySetInnerHTML={{__html: `
              :root {
                 --venia-grey: ${color};
              }
            `}} />

        </div>
    );
};

export default Red;
