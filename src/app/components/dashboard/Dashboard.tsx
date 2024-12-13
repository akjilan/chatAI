"use client";

import React, { useEffect, useState } from "react";
import { uploadPDF } from "../../../services/pdfService";
import { div } from "framer-motion/client";
import { IoCloudDownload } from "react-icons/io5";

interface PDF {
  id: string;
  name: string;
  content: string;
}

const Dashboard = () => {
  const [pdfs, setPDFs] = useState<PDF[]>([]);
  const [file, setFile] = useState(null);
  const [addedpdfs, setAddedPdfs] = useState([]);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpload = async () => {
    const fileInput = document.getElementById(
      "file-upload"
    ) as HTMLInputElement | null;
  
    if (fileInput?.files) {
      const files = fileInput.files;
  
      if (!files.length) {
        alert("Please select at least one file");
        return;
      }
  
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]); // Use 'files' as the key
      }
  
      console.log(formData, "this is formdata");
  
      try {
        const response = await fetch("http://127.0.0.1:8000/api/upload-pdf/", {
          method: "POST",
          body: formData,
        });
  
        const result = await response.json();
        console.log("Response from server:", result);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    } else {
      alert("Could not find file input");
    }
  };
  


  useEffect(() => {
    const fetchPdfs = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/get-pdfs/");
      const result = await response.json();
      setAddedPdfs(result.pdf_files);
    };

    fetchPdfs();
  }, []);

  const viewPdf = async (id: any) => {
    const url = `http://127.0.0.1:8000/api/get-pdf/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Unknown error');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6">PDF Upload Dashboard</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Upload Section */}
          <div className="flex-1 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Upload PDFs</h2>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6">
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Select Files
              </label>
              <input
                id="file-upload"
                type="file"
                multiple
                accept=".pdf"
                onChange={handleUpload}
                className="hidden"
              />
              <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">
                You can upload multiple PDF files.
              </p>
            </div>
          </div>

          {/* Uploaded Files Section */}
          <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Uploaded PDFs</h2>
            {addedpdfs.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                No files uploaded yet.
              </p>
            ) : (
              <>
                <div className="w-full flex justify-between">
                  {addedpdfs && (
                    <ul>
                      {addedpdfs.map((pdf: any) => (
                        <li
                          key={pdf.id}
                          className="flex gap-2 p-1 justify-between "
                        >
                          <span className="font-semibold text-lg text-gray-800">
                            {pdf.filename}
                          </span>
                          <button
                            onClick={() => viewPdf(pdf.id)}
                            className="flex items-center lg:h-10 h-8 gap-2 p-2 bg-blue-500 text-white font-medium text-sm rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
                          >
                           <IoCloudDownload />
                            downlaod
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>
          <div>
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-4 rounded shadow-lg w-3/4 h-3/4 relative">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  >
                    Close
                  </button>
                  <iframe
                    src={pdfUrl || ""}
                    title="PDF Viewer"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* view pdf section */}
    </div>
  );
};

export default Dashboard;
