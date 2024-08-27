import React, {useState} from 'react'
import HashLoader from 'react-spinners/HashLoader';
// import { css } from '@emotion/react'

function Loader(){
    // eslint-disable-next-line no-unused-vars
    let [loading, setLoading] = useState(true);
//     let [color, setColor] = useState("#ffffff");
//   const override = css` 
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   `;
    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems : 'center'
    }
    return(
       
        <div style={{marginTop: '150px'}}>
            <div className='sweet-loading' style={loaderStyle}>
            <HashLoader
        color='#000'
        loading={loading}
        css=''
        size={80}
        // aria-label="Loading Spinner"
        // data-testid="loader"
      />
      </div>
        </div>
    )
}
export default Loader