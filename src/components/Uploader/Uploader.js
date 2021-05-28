import React from 'react'
import styled from 'styled-components'
import { Upload, message } from 'antd';
const { Dragger } = Upload;

const Container = styled.div`
    width: 30%;
    height: 100%;
    margin-bottom:2%;
    background:transparent;
    border: 2px #0DB8DE solid;
    color: #0DB8DE;
    padding:5px auto;
    text-align: center;
    word-wrap: break-word;
    
`

const Uploader = (props) => {

    const draggerProps = {
        name: 'photo',
        multiple: false,
        action: 'http://localhost:8000/photo',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                let picinfo=info.file
                let namePic=picinfo.name
                props.onChange(namePic);
                console.log(namePic);
            }
        },

        //     if (status === 'done') {
        //         message.success(`${info.file.name} file uploaded successfully.`);
        //     } else if (status === 'error') {
        //         message.error(`${info.file.name} file upload failed.`);
        //     }
        // },
    };

    return (
        <Container>
            <Dragger {...draggerProps}>
                <div style={{width: '100%'}}>
                    <p className="ant-upload-drag-icon">
                        
                    </p>
                    <p className="ant-upload-text">IMAGE</p>
                </div>
            </Dragger>
        </Container>
    )
}

export default Uploader;