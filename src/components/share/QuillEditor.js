"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const QuillEditor = ({ value, onChange, placeholder, errors }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Return null on server
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ align: [] }],
      ['link', 'image', 'video'],
      [{
        color: ["#CD5C5C", "#DFFF00", "#DE3163", "#CCCCFF", "#00FF00", "#800000", "#800080",
          "red", "#AEFEEE", "green", "yellow", "orange","#00BFFF","#00BFFF",
          "pink", "grey", "skyblue", "brown", "#362412", "#776343", "#162643",
          "#312442", "#103445", "#198765", "#500045", "#144274", "#0054421", "#732946",
          "#F08080","#FF4500","	#BDB76B","#00FA9A","#9ACD32","#4682B4	","#0000CD",
          "#778899","#FDF5E6","#808000","#DEB887","#00BFFF"
        ],
      },],
      [{
        background: ["#CD5C5C", "#DFFF00", "#DE3163", "#CCCCFF", "#00FF00", "#800000", "#800080",
          "red", "#AEFEEE", "green", "yellow", "orange","#00BFFF","#00BFFF",
          "pink", "grey", "skyblue", "brown", "#362412", "#776343", "#162643",
          "#312442", "#103445", "#198765", "#500045", "#144274", "#0054421", "#732946",
          "#F08080","#FF4500","	#BDB76B","#00FA9A","#9ACD32","#4682B4	","#0000CD",
          "#778899","#FDF5E6","#808000","#DEB887","#00BFFF"
        ],
      },
      ],
      ['clean'],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "list",
    "strike",
    "blockquote",
    "bullet",
    "bold",
    "italic",
    "underline",
    "align",
    "link",
    "image",
    "video",
    "color",
    "background",
    "clean",
  ];

  return (
    <ReactQuill
    //   error={!!errors[name]}
    //   helperText={errors[name]?.message}
      theme="snow"
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default QuillEditor;
