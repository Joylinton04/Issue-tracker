'use client'
import { CldUploadWidget } from "next-cloudinary";
import React from "react";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="next_app_first_preset">
      {({ open }) => {
        return <button className="btn btn-primary" onClick={() => open()}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
};

export default UploadPage;
