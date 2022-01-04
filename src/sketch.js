const canvasWidth = 1280
const canvasHeight = 720
let capture

// This is the Setup. It will be executed once in the beginning.
function setup () {
  createCanvas(canvasWidth, canvasHeight)
  capture = createCapture(VIDEO)
  capture.size(canvasWidth, canvasHeight)
}

// This is the draw function which will be excuted permanentely
function draw () {
  // Drawing the video image
  image(capture, 0, 0, canvasWidth, canvasHeight);
  fill('green')

  // Here are the landmarks which will be tracked by blazepose
  if (landmarks && landmarks.length) {
    for (let i = 0; i < landmarks.length; i++) {
      console.log(landmarks[i])
      // These are the x and y coordinated of the landmarks
      const x = canvasWidth * landmarks[i].x
      const y = canvasHeight * landmarks[i].y

      // Here you can use the positions of the landmarks to display anything.
      // Currenty there is only one ellipse on every coordinate
      ellipse(x, y, 20)
    }
  }
}
