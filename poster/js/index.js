/*Using Lettering.js
https://github.com/davatron5000/Lettering.js/*/

$(document).ready(function() {
    $(".stack").lettering();
  });

  var WIDTH = 1000,
  HEIGHT = 1000,
  NUM_LINES = 50,
  NUM_POINTS = 50,
  LINE_HEIGHT = WIDTH / NUM_POINTS,
  G = document.getElementById('graphy'),
  DOT_POINTS = Array.from(range(0, WIDTH, WIDTH / NUM_POINTS));

function range(start, end, step) {
  var i = start,
    result = [];
  while (i <= end) {
    result.push(i);
    i += step;
  }
  return result;
}

function joyDivision(svgElement) {
  var points = [],
    noiseBackground = [];

  function getPoint(cx, cy, i, y) {
    return function(n) {
      var bg = noiseBackground[i][n / (WIDTH / NUM_POINTS)],
        dx = (cx - n) * 5,
        dy = (cy - y) * 1,
        distance = Math.sqrt(dx * dx + dy * dy) * 0.5 + 15,
        p_height = (bg / distance) * 5;

      return [n, p_height];
    }
  }

  function getPath(cx, cy, i) {
    var y = (HEIGHT / NUM_LINES) * i,
      heights = DOT_POINTS.map(getPoint(cx, cy, i, y));
    return 'M0,' + (y - heights[0][1]) + ' S' + heights.slice(1).map(function(ps) {
      return ps[0] + ',' + (y - ps[1]).toFixed(5)
    }).join(" ") + ' L' + WIDTH + ',' + HEIGHT + ' 0,' + HEIGHT + ' Z';
  }

  function init() {
    svgElement.innerHTML = `<path class="wave" d="M0,0 L${WIDTH},0 Z" />`;
    for (var i = 0; i < NUM_LINES; i++) {
      noiseBackground.push(DOT_POINTS.map(function(e) {
        return (Math.random() - 0.5) * 1500
      }));
      svgElement.innerHTML += '<path id="wave_' + i + '" class="wave" d="' + getPath(500, 500, i) + '" />';
    }
  }

  function draw(cx, cy) {
    for (var i = 0; i < NUM_LINES; i++) {
      document.getElementById("wave_" + i).setAttribute('d', getPath(cx, cy, i));
    }
  }

  init();
  return {
    draw: draw
  }
}

var j = joyDivision(G);

document.addEventListener("mousemove", function(e) {
  cx = e.offsetX;
  cy = e.offsetY;
  j.draw(cx, cy);
})

j.draw(500, 500);
