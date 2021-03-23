import React, { useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi'

import { Container, ViewImage, SizeImage, Section } from './styles';

function DropZone() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const image = files.map(file => (
    <ViewImage key={file.name}>
      <SizeImage>
        <img src={file.preview} />
      </SizeImage>
    </ViewImage>
  ));

  return (
    <Section>
      <div { ...getRootProps() }>
        <input { ...getInputProps() } />
        <p> <FiUpload /> Selecione uma imagem</p>
      </div>
      <Container >
        { image }
      </Container>
    </Section>
  );
}

export default DropZone;