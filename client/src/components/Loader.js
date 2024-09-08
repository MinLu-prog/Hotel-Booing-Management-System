import React, {useState} from 'react'
import HashLoader from 'react-spinners/HashLoader';


function Loader(){

    let [loading] = useState(true);
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
      />
      </div>
        </div>
    )
}
export default Loader