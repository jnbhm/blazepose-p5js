const canvasWidth = 1280
const canvasHeight = 720
let capture

function setup () {
  createCanvas(canvasWidth, canvasHeight)
  capture = createCapture(VIDEO)
  capture.size(canvasWidth, canvasHeight)
}

function draw () {
  image(capture, 0, 0, canvasWidth, canvasHeight);
  fill('green')


  if (landmarks && landmarks.length) {
    for (let i = 0; i < landmarks.length; i++) {
      console.log(landmarks[i])
      const x = canvasWidth * landmarks[i].x
      const y = canvasHeight * landmarks[i].y

      ellipse(x, y, 20)
    }
  }
}
