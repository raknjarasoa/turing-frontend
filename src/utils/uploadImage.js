const CLOUDINARY_ENDPOINT = `https://api.cloudinary.com/v1_1/raknjarasoa/image/upload`;

export async function uploadImage(files) {
  const formData = new FormData();

  formData.append('file', files[0]);
  formData.append('upload_preset', 'turing-fullstack');

  return await fetch(CLOUDINARY_ENDPOINT, {
    method: 'post',
    body: formData
  });
}
