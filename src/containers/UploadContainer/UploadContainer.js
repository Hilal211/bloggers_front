import React, {useState} from 'react'
import styled from 'styled-components'
import Uploader from './../../components/Uploader/Uploader'

const Container = styled.div`
    width: 30%;
    margin-bottom: 2%;
    border : 2px solid #0DB8DE;
    
    
  
`

const UploadContainer = () => {
    let [state, setState] = useState();
    console.log({state})
    return (
        <Container>
            <Uploader onChange={(image) => {
                setState(image)
            }} />
        </Container>
    )
}

export default UploadContainer;