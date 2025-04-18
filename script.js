let model;
const classNames = ['Anjing', 'Ayam', 'Kucing', 'Kupu-kupu', 'Sapi', 'Tupai'];
const modelURL = 'model_2_best_tfjs/model.json';  // Ganti sesuai lokasi model kamu

// Load model saat halaman dimuat
window.onload = async () => {
  model = await tf.loadGraphModel(modelURL);
  console.log("Model loaded");
};

document.getElementById('imageInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.getElementById('preview');
    img.src = e.target.result;
    img.style.display = 'block';
  };
  reader.readAsDataURL(file);
});

async function predict() {
  const imgElement = document.getElementById('preview');
  if (!model || imgElement.src === '') {
    alert("Model belum dimuat atau gambar belum diunggah!");
    return;
  }

  const tensor = tf.browser.fromPixels(imgElement)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .div(tf.scalar(255))
    .expandDims();

  const prediction = model.predict(tensor);
  const predictedClass = prediction.argMax(-1).dataSync()[0];
  const label = classNames[predictedClass];

  document.getElementById('prediction').innerText = `Prediction: ${label}`;
}
