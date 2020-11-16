import React, { useState } from "react";
import axios from "axios";

const FileUpload = (props) => {
  const [file, setFile] = useState();
  const [success, setSuccess] = useState("");

  const handleUpload = () => {
    const formData = new FormData();

    formData.append("file", file, file.name);

    axios
      .post("http://localhost:5000/upload-file", formData)
      .then((res) => {
        setSuccess(res.data.message);
        setFile();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className="file-upload">
        <label className="file-upload-label">
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          {file ? file.name : "Choose your file"}
        </label>
        <button onClick={handleUpload}>Upload</button>
      </div>
      <style jsx>
        {`
          .file-upload input {
            display: none;
          }

          .file-upload-label {
            font-size: ${props.fontSize};
            color: #ff7b88;
            background: #fde4f2;
            border: 0;
            border-radius: 4px;
            box-shadow: 2px 2px 0 #ff7b88;
            padding: ${props.padding};
          }

          .file-upload button {
            margin: 0 0.5em;
            font-family: Lato;
            font-size: ${props.fontSize};
            color: white;
            background: #ff7b88;
            border: 0;
            border-radius: 4px;
            box-shadow: 2px 2px 0 #ff7b88;
            padding: ${props.padding};
          }
        `}
      </style>
    </div>
  );
};

export default FileUpload;
