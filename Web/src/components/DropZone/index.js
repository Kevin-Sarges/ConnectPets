import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi'

import { Container, PreviewImage } from './styles';


function DropZone({ onFileUploaded }) {
  const [files, setFiles] = useState();

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setFiles(fileUrl);
	  onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop,
    accept: 'image/*'
  });

  return (
    <Container { ...getRootProps() }>
        <input { ...getInputProps() } accept="image/*" />
        { files
          ? <PreviewImage>
              <img src={ files } alt="imagem" />
            </PreviewImage>
          : (
            <p>
              <FiUpload />
              Selecione uma imagem
            </p>
          )
        }
    </Container>
  );
}

export default DropZone;
