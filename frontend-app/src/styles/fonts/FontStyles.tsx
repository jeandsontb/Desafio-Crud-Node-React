import React from 'react';

const FontStyles = ({ children }: any) => {
    return (
      <React.Fragment>
        <style>
          {`
           @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&family=Roboto+Condensed:wght@400;700&display=swap');
           @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
           `}
        </style>
        
        {children}
      </React.Fragment>
    );
}

export default FontStyles;