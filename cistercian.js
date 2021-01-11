var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth // * window.devicePixelRatio
canvas.height = canvas.offsetHeight// * window.devicePixelRatio
ctx.imageSmoothingEnabled = false;
ctx.lineWidth = 5
ctx.lineCap = "round"

function drawNumber(n) {
ctx.translate(0.5, 0.5);

    // clear canvas
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // always draw a vertical bar
    var x = Math.floor(canvas.width / 2)
    var y = Math.floor(canvas.height / 2)
    var qt = Math.floor(y * 0.4) // quad top y start
    var qb = Math.floor(y * 1.6) // quad bot y start
    var qd = Math.floor((qb - qt) / 3) //quad dist
    var t = 0 //temp
    var given = n //for text drawing 

    ctx.beginPath()
    ctx.moveTo(x, qt)
    ctx.lineTo(x, qb)
    ctx.closePath()
    ctx.stroke()

  
    
    // top right quadrant, 0 - 9
    t = n % 10
    n -= t
    ctx.beginPath()
    switch(t) {
        case 1:
            ctx.moveTo(x, qt)
            ctx.lineTo(x+qd, qt)
            break;
        case 2:
            ctx.moveTo(x, qt+qd)
            ctx.lineTo(x+qd, qt+qd)
            break;
        case 3:
            ctx.moveTo(x+qd, qt+qd)
            ctx.lineTo(x, qt)
            break;
        case 4:
            ctx.moveTo(x, qt+qd)
            ctx.lineTo(x+qd, qt)
            break;
        case 5:
            ctx.moveTo(x, qt+qd)
            ctx.lineTo(x+qd, qt)
            ctx.moveTo(x+qd, qt)
            ctx.lineTo(x, qt)
            break;
        case 6:
            ctx.moveTo(x+qd, qt)
            ctx.lineTo(x+qd, qt+qd)
            break;
        case 7:
            ctx.moveTo(x, qt)
            ctx.lineTo(x+qd, qt)
            ctx.moveTo(x+qd, qt)
            ctx.lineTo(x+qd, qt+qd)
            break;
        case 8:
            ctx.moveTo(x, qt+qd)
            ctx.lineTo(x+qd, qt+qd)
            ctx.moveTo(x+qd, qt+qd)
            ctx.lineTo(x+qd, qt)
            break;
        case 9:
            ctx.moveTo(x, qt+qd)
            ctx.lineTo(x+qd, qt+qd)
            ctx.moveTo(x+qd, qt+qd)
            ctx.lineTo(x+qd, qt)
            ctx.moveTo(x+qd, qt)
            ctx.lineTo(x, qt)
            break;
        default: // 0 adds nothing to the figure
            break;
    }
    ctx.closePath()
    ctx.stroke()

  // top left quadrant, 00 - 90
  t = n % 100
  n -= t
  ctx.beginPath()
  switch(t) {
      case 10:
          ctx.moveTo(x-qd, qt)
          ctx.lineTo(x, qt)
          break;
      case 20:
          ctx.moveTo(x-qd, qt+qd)
          ctx.lineTo(x, qt+qd)
          break;
      case 30:
          ctx.moveTo(x-qd, qt+qd)
          ctx.lineTo(x, qt)
          break;
      case 40:
          ctx.moveTo(x, qt+qd)
          ctx.lineTo(x-qd, qt)
          break;
      case 50:
          ctx.moveTo(x, qt+qd)
          ctx.lineTo(x-qd, qt)
          ctx.moveTo(x-qd, qt)
          ctx.lineTo(x, qt)
          break;
      case 60:
          ctx.moveTo(x-qd, qt)
          ctx.lineTo(x-qd, qt+qd)
          break;
      case 70:
          ctx.moveTo(x, qt)
          ctx.lineTo(x-qd, qt)
          ctx.moveTo(x-qd, qt)
          ctx.lineTo(x-qd, qt+qd)
          break;
      case 80:
          ctx.moveTo(x, qt+qd)
          ctx.lineTo(x-qd, qt+qd)
          ctx.moveTo(x-qd, qt+qd)
          ctx.lineTo(x-qd, qt)
          break;
      case 90:
          ctx.moveTo(x, qt+qd)
          ctx.lineTo(x-qd, qt+qd)
          ctx.moveTo(x-qd, qt+qd)
          ctx.lineTo(x-qd, qt)
          ctx.moveTo(x-qd, qt)
          ctx.lineTo(x, qt)
          break;
      default: // 00 adds nothing to the figure
          break;
  }
  ctx.closePath()
  ctx.stroke()

  // bottom right quadrant, 000 - 900
  t = n % 1000
  n -= t
  ctx.beginPath()
  switch(t) {
      case 100:
          ctx.moveTo(x+qd, qb)
          ctx.lineTo(x, qb)
          break;
      case 200:
          ctx.moveTo(x+qd, qb-qd)
          ctx.lineTo(x, qb-qd)
          break;
      case 300:
          ctx.moveTo(x+qd, qb-qd)
          ctx.lineTo(x, qb)
          break;
      case 400:
          ctx.moveTo(x, qb-qd)
          ctx.lineTo(x+qd, qb)
          break;
      case 500:
          ctx.moveTo(x, qb-qd)
          ctx.lineTo(x+qd, qb)
          ctx.moveTo(x+qd, qb)
          ctx.lineTo(x, qb)
          break;
      case 600:
          ctx.moveTo(x+qd, qb)
          ctx.lineTo(x+qd, qb-qd)
          break;
      case 700:
          ctx.moveTo(x, qb)
          ctx.lineTo(x+qd, qb)
          ctx.moveTo(x+qd, qb)
          ctx.lineTo(x+qd, qb-qd)
          break;
      case 800:
          ctx.moveTo(x, qb-qd)
          ctx.lineTo(x+qd, qb-qd)
          ctx.moveTo(x+qd, qb-qd)
          ctx.lineTo(x+qd, qb)
          break;
      case 900:
          ctx.moveTo(x, qb-qd)
          ctx.lineTo(x+qd, qb-qd)
          ctx.moveTo(x+qd, qb-qd)
          ctx.lineTo(x+qd, qb)
          ctx.moveTo(x+qd, qb)
          ctx.lineTo(x, qb)
          break;
      default: // 000 adds nothing to the figure
          break;
  }
  ctx.closePath()
  ctx.stroke()

  // bottom left quadrant, 0000 - 9000
  t = n % 10000
  n -= t
  ctx.beginPath()
  switch(t) {
      case 1000:
          ctx.moveTo(x-qd, qb)
          ctx.lineTo(x, qb)
          break;
      case 2000:
          ctx.moveTo(x-qd, qb-qd)
          ctx.lineTo(x, qb-qd)
          break;
      case 3000:
          ctx.moveTo(x-qd, qb-qd)
          ctx.lineTo(x, qb)
          break;
      case 4000:
          ctx.moveTo(x, qb-qd)
          ctx.lineTo(x-qd, qb)
          break;
      case 5000:
          ctx.moveTo(x, qb-qd)
          ctx.lineTo(x-qd, qb)
          ctx.moveTo(x-qd, qb)
          ctx.lineTo(x, qb)
          break;
      case 6000:
          ctx.moveTo(x-qd, qb)
          ctx.lineTo(x-qd, qb-qd)
          break;
      case 7000:
          ctx.moveTo(x, qb)
          ctx.lineTo(x-qd, qb)
          ctx.moveTo(x-qd, qb)
          ctx.lineTo(x-qd, qb-qd)
          break;
      case 8000:
          ctx.moveTo(x, qb-qd)
          ctx.lineTo(x-qd, qb-qd)
          ctx.moveTo(x-qd, qb-qd)
          ctx.lineTo(x-qd, qb)
          break;
      case 9000:
          ctx.moveTo(x, qb-qd)
          ctx.lineTo(x-qd, qb-qd)
          ctx.moveTo(x-qd, qb-qd)
          ctx.lineTo(x-qd, qb)
          ctx.moveTo(x-qd, qb)
          ctx.lineTo(x, qb)
          break;
      default: // 0000 adds nothing to the figure
          break;
  }
  ctx.closePath()
  ctx.stroke()
  ctx.translate(-0.5, -0.5);

  ctx.fillStyle = 'black'
  ctx.font = '48px serif'
  ctx.fillText(given ? given : 1, x/5, y/3)

}


document.getElementById('generateNumber').addEventListener("click", function() {
    var n = parseInt(document.getElementById('inputnumber').value)
    if (0 > n < 10000) {
        drawNumber(n)
    } else {
        // TODO error message
        drawNumber(1)
    }
});

drawNumber(1);