import http from "../http-common";

class UploadImageService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("image", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
}

export default new UploadImageService();
