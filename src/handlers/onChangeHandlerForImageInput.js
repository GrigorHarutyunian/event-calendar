export function onChangeHandlerForImageInput(setImage) {
  return function uploadImage(e) {
    const file = e.target.files[0];
    const image = URL.createObjectURL(file);
    setImage(image);
    console.log(file);
  };
}
