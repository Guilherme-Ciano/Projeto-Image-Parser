import { useState } from "react";
import Tesseract from "tesseract.js";
import {
  Output,
  StyledInput,
  UploadLabel,
  Wrapper,
  WrapperUpload,
} from "./styles";
import { FaRegFileImage } from "react-icons/fa";

const ImageToText = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setLoading(true);

      try {
        const {
          data: { text },
        } = await Tesseract.recognize(file, "eng", {
          logger: (info) => console.log("Processing info:", info),
        });

        setText(text);
      } catch (error) {
        console.error("Erro no processamento da imagem:", error);
        setText("[!] Error on trying to process your image");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Wrapper>
      <StyledInput
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <WrapperUpload>
        <UploadLabel htmlFor="fileInput">
          <FaRegFileImage />
          Upload an Image
        </UploadLabel>
        {loading && <div>Hold on...</div>}
      </WrapperUpload>
      {text && !loading && <Output>{text}</Output>}
    </Wrapper>
  );
};

export default ImageToText;
