import { api } from "./api";

// Upload a PDF
export const uploadPDF = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await api.post("/upload-pdf/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading PDF:", error);
  }
};

// Fetch uploaded PDFs
// export const fetchPDFs = async () => {
//     try {
//       const response = await api.get("/get-pdfs/");
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching PDFs:", error);
//     }
//   };