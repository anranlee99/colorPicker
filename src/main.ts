const colorData = [{"name":"Black","hex":"#000000","rgb":"(0,0,0)"},{"name":"White","hex":"#FFFFFF","rgb":"(255,255,255)"},{"name":"Red","hex":"#FF0000","rgb":"(255,0,0)"},{"name":"Lime","hex":"#00FF00","rgb":"(0,255,0)"},{"name":"Blue","hex":"#0000FF","rgb":"(0,0,255)"},{"name":"Yellow","hex":"#FFFF00","rgb":"(255,255,0)"},{"name":"Cyan / Aqua","hex":"#00FFFF","rgb":"(0,255,255)"},{"name":"Magenta / Fuchsia","hex":"#FF00FF","rgb":"(255,0,255)"},{"name":"Silver","hex":"#C0C0C0","rgb":"(192,192,192)"},{"name":"Gray","hex":"#808080","rgb":"(128,128,128)"},{"name":"Maroon","hex":"#800000","rgb":"(128,0,0)"},{"name":"Olive","hex":"#808000","rgb":"(128,128,0)"},{"name":"Green","hex":"#008000","rgb":"(0,128,0)"},{"name":"Purple","hex":"#800080","rgb":"(128,0,128)"},{"name":"Teal","hex":"#008080","rgb":"(0,128,128)"},{"name":"Navy","hex":"#000080","rgb":"(0,0,128)"},{"name":"maroon","hex":"#800000","rgb":"(128,0,0)"},{"name":"dark red","hex":"#8B0000","rgb":"(139,0,0)"},{"name":"brown","hex":"#A52A2A","rgb":"(165,42,42)"},{"name":"firebrick","hex":"#B22222","rgb":"(178,34,34)"},{"name":"crimson","hex":"#DC143C","rgb":"(220,20,60)"},{"name":"red","hex":"#FF0000","rgb":"(255,0,0)"},{"name":"tomato","hex":"#FF6347","rgb":"(255,99,71)"},{"name":"coral","hex":"#FF7F50","rgb":"(255,127,80)"},{"name":"indian red","hex":"#CD5C5C","rgb":"(205,92,92)"},{"name":"light coral","hex":"#F08080","rgb":"(240,128,128)"},{"name":"dark salmon","hex":"#E9967A","rgb":"(233,150,122)"},{"name":"salmon","hex":"#FA8072","rgb":"(250,128,114)"},{"name":"light salmon","hex":"#FFA07A","rgb":"(255,160,122)"},{"name":"orange red","hex":"#FF4500","rgb":"(255,69,0)"},{"name":"dark orange","hex":"#FF8C00","rgb":"(255,140,0)"},{"name":"orange","hex":"#FFA500","rgb":"(255,165,0)"},{"name":"gold","hex":"#FFD700","rgb":"(255,215,0)"},{"name":"dark golden rod","hex":"#B8860B","rgb":"(184,134,11)"},{"name":"golden rod","hex":"#DAA520","rgb":"(218,165,32)"},{"name":"pale golden rod","hex":"#EEE8AA","rgb":"(238,232,170)"},{"name":"dark khaki","hex":"#BDB76B","rgb":"(189,183,107)"},{"name":"khaki","hex":"#F0E68C","rgb":"(240,230,140)"},{"name":"olive","hex":"#808000","rgb":"(128,128,0)"},{"name":"yellow","hex":"#FFFF00","rgb":"(255,255,0)"},{"name":"yellow green","hex":"#9ACD32","rgb":"(154,205,50)"},{"name":"dark olive green","hex":"#556B2F","rgb":"(85,107,47)"},{"name":"olive drab","hex":"#6B8E23","rgb":"(107,142,35)"},{"name":"lawn green","hex":"#7CFC00","rgb":"(124,252,0)"},{"name":"chartreuse","hex":"#7FFF00","rgb":"(127,255,0)"},{"name":"green yellow","hex":"#ADFF2F","rgb":"(173,255,47)"},{"name":"dark green","hex":"#006400","rgb":"(0,100,0)"},{"name":"green","hex":"#008000","rgb":"(0,128,0)"},{"name":"forest green","hex":"#228B22","rgb":"(34,139,34)"},{"name":"lime","hex":"#00FF00","rgb":"(0,255,0)"},{"name":"lime green","hex":"#32CD32","rgb":"(50,205,50)"},{"name":"light green","hex":"#90EE90","rgb":"(144,238,144)"},{"name":"pale green","hex":"#98FB98","rgb":"(152,251,152)"},{"name":"dark sea green","hex":"#8FBC8F","rgb":"(143,188,143)"},{"name":"medium spring green","hex":"#00FA9A","rgb":"(0,250,154)"},{"name":"spring green","hex":"#00FF7F","rgb":"(0,255,127)"},{"name":"sea green","hex":"#2E8B57","rgb":"(46,139,87)"},{"name":"medium aqua marine","hex":"#66CDAA","rgb":"(102,205,170)"},{"name":"medium sea green","hex":"#3CB371","rgb":"(60,179,113)"},{"name":"light sea green","hex":"#20B2AA","rgb":"(32,178,170)"},{"name":"dark slate gray","hex":"#2F4F4F","rgb":"(47,79,79)"},{"name":"teal","hex":"#008080","rgb":"(0,128,128)"},{"name":"dark cyan","hex":"#008B8B","rgb":"(0,139,139)"},{"name":"aqua","hex":"#00FFFF","rgb":"(0,255,255)"},{"name":"cyan","hex":"#00FFFF","rgb":"(0,255,255)"},{"name":"light cyan","hex":"#E0FFFF","rgb":"(224,255,255)"},{"name":"dark turquoise","hex":"#00CED1","rgb":"(0,206,209)"},{"name":"turquoise","hex":"#40E0D0","rgb":"(64,224,208)"},{"name":"medium turquoise","hex":"#48D1CC","rgb":"(72,209,204)"},{"name":"pale turquoise","hex":"#AFEEEE","rgb":"(175,238,238)"},{"name":"aqua marine","hex":"#7FFFD4","rgb":"(127,255,212)"},{"name":"powder blue","hex":"#B0E0E6","rgb":"(176,224,230)"},{"name":"cadet blue","hex":"#5F9EA0","rgb":"(95,158,160)"},{"name":"steel blue","hex":"#4682B4","rgb":"(70,130,180)"},{"name":"corn flower blue","hex":"#6495ED","rgb":"(100,149,237)"},{"name":"deep sky blue","hex":"#00BFFF","rgb":"(0,191,255)"},{"name":"dodger blue","hex":"#1E90FF","rgb":"(30,144,255)"},{"name":"light blue","hex":"#ADD8E6","rgb":"(173,216,230)"},{"name":"sky blue","hex":"#87CEEB","rgb":"(135,206,235)"},{"name":"light sky blue","hex":"#87CEFA","rgb":"(135,206,250)"},{"name":"midnight blue","hex":"#191970","rgb":"(25,25,112)"},{"name":"navy","hex":"#000080","rgb":"(0,0,128)"},{"name":"dark blue","hex":"#00008B","rgb":"(0,0,139)"},{"name":"medium blue","hex":"#0000CD","rgb":"(0,0,205)"},{"name":"blue","hex":"#0000FF","rgb":"(0,0,255)"},{"name":"royal blue","hex":"#4169E1","rgb":"(65,105,225)"},{"name":"blue violet","hex":"#8A2BE2","rgb":"(138,43,226)"},{"name":"indigo","hex":"#4B0082","rgb":"(75,0,130)"},{"name":"dark slate blue","hex":"#483D8B","rgb":"(72,61,139)"},{"name":"slate blue","hex":"#6A5ACD","rgb":"(106,90,205)"},{"name":"medium slate blue","hex":"#7B68EE","rgb":"(123,104,238)"},{"name":"medium purple","hex":"#9370DB","rgb":"(147,112,219)"},{"name":"dark magenta","hex":"#8B008B","rgb":"(139,0,139)"},{"name":"dark violet","hex":"#9400D3","rgb":"(148,0,211)"},{"name":"dark orchid","hex":"#9932CC","rgb":"(153,50,204)"},{"name":"medium orchid","hex":"#BA55D3","rgb":"(186,85,211)"},{"name":"purple","hex":"#800080","rgb":"(128,0,128)"},{"name":"thistle","hex":"#D8BFD8","rgb":"(216,191,216)"},{"name":"plum","hex":"#DDA0DD","rgb":"(221,160,221)"},{"name":"violet","hex":"#EE82EE","rgb":"(238,130,238)"},{"name":"magenta / fuchsia","hex":"#FF00FF","rgb":"(255,0,255)"},{"name":"orchid","hex":"#DA70D6","rgb":"(218,112,214)"},{"name":"medium violet red","hex":"#C71585","rgb":"(199,21,133)"},{"name":"pale violet red","hex":"#DB7093","rgb":"(219,112,147)"},{"name":"deep pink","hex":"#FF1493","rgb":"(255,20,147)"},{"name":"hot pink","hex":"#FF69B4","rgb":"(255,105,180)"},{"name":"light pink","hex":"#FFB6C1","rgb":"(255,182,193)"},{"name":"pink","hex":"#FFC0CB","rgb":"(255,192,203)"},{"name":"antique white","hex":"#FAEBD7","rgb":"(250,235,215)"},{"name":"beige","hex":"#F5F5DC","rgb":"(245,245,220)"},{"name":"bisque","hex":"#FFE4C4","rgb":"(255,228,196)"},{"name":"blanched almond","hex":"#FFEBCD","rgb":"(255,235,205)"},{"name":"wheat","hex":"#F5DEB3","rgb":"(245,222,179)"},{"name":"corn silk","hex":"#FFF8DC","rgb":"(255,248,220)"},{"name":"lemon chiffon","hex":"#FFFACD","rgb":"(255,250,205)"},{"name":"light golden rod yellow","hex":"#FAFAD2","rgb":"(250,250,210)"},{"name":"light yellow","hex":"#FFFFE0","rgb":"(255,255,224)"},{"name":"saddle brown","hex":"#8B4513","rgb":"(139,69,19)"},{"name":"sienna","hex":"#A0522D","rgb":"(160,82,45)"},{"name":"chocolate","hex":"#D2691E","rgb":"(210,105,30)"},{"name":"peru","hex":"#CD853F","rgb":"(205,133,63)"},{"name":"sandy brown","hex":"#F4A460","rgb":"(244,164,96)"},{"name":"burly wood","hex":"#DEB887","rgb":"(222,184,135)"},{"name":"tan","hex":"#D2B48C","rgb":"(210,180,140)"},{"name":"rosy brown","hex":"#BC8F8F","rgb":"(188,143,143)"},{"name":"moccasin","hex":"#FFE4B5","rgb":"(255,228,181)"},{"name":"navajo white","hex":"#FFDEAD","rgb":"(255,222,173)"},{"name":"peach puff","hex":"#FFDAB9","rgb":"(255,218,185)"},{"name":"misty rose","hex":"#FFE4E1","rgb":"(255,228,225)"},{"name":"lavender blush","hex":"#FFF0F5","rgb":"(255,240,245)"},{"name":"linen","hex":"#FAF0E6","rgb":"(250,240,230)"},{"name":"old lace","hex":"#FDF5E6","rgb":"(253,245,230)"},{"name":"papaya whip","hex":"#FFEFD5","rgb":"(255,239,213)"},{"name":"sea shell","hex":"#FFF5EE","rgb":"(255,245,238)"},{"name":"mint cream","hex":"#F5FFFA","rgb":"(245,255,250)"},{"name":"slate gray","hex":"#708090","rgb":"(112,128,144)"},{"name":"light slate gray","hex":"#778899","rgb":"(119,136,153)"},{"name":"light steel blue","hex":"#B0C4DE","rgb":"(176,196,222)"},{"name":"lavender","hex":"#E6E6FA","rgb":"(230,230,250)"},{"name":"floral white","hex":"#FFFAF0","rgb":"(255,250,240)"},{"name":"alice blue","hex":"#F0F8FF","rgb":"(240,248,255)"},{"name":"ghost white","hex":"#F8F8FF","rgb":"(248,248,255)"},{"name":"honeydew","hex":"#F0FFF0","rgb":"(240,255,240)"},{"name":"ivory","hex":"#FFFFF0","rgb":"(255,255,240)"},{"name":"azure","hex":"#F0FFFF","rgb":"(240,255,255)"},{"name":"snow","hex":"#FFFAFA","rgb":"(255,250,250)"},{"name":"black","hex":"#000000","rgb":"(0,0,0)"},{"name":"dim gray / dim grey","hex":"#696969","rgb":"(105,105,105)"},{"name":"gray / grey","hex":"#808080","rgb":"(128,128,128)"},{"name":"dark gray / dark grey","hex":"#A9A9A9","rgb":"(169,169,169)"},{"name":"silver","hex":"#C0C0C0","rgb":"(192,192,192)"},{"name":"light gray / light grey","hex":"#D3D3D3","rgb":"(211,211,211)"},{"name":"gainsboro","hex":"#DCDCDC","rgb":"(220,220,220)"},{"name":"white smoke","hex":"#F5F5F5","rgb":"(245,245,245)"},{"name":"white","hex":"#FFFFFF","rgb":"(255,255,255)"}];
const dropArea = document.getElementById('drop-area') as HTMLDivElement;

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e: Event) {
  e.preventDefault();
  e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false);
});

dropArea.addEventListener('drop', e => {
  let dt = e.dataTransfer as DataTransfer;
  handleFiles(dt.files);
});

const fileEl = document.getElementById('fileElem') as HTMLInputElement;
fileEl.addEventListener('change', (e: Event) => {
  const inputElement = e.target as HTMLInputElement;
  handleFiles(inputElement.files as FileList);
});

function handleFiles(files : FileList) {
  [...files].forEach(uploadFile);
}
interface RGB {
  r: number;
  g: number;
  b: number;
}
function uploadFile(file: File) {
  const imgEl = document.getElementById('dropped-img') as HTMLImageElement;
  imgEl.src = URL.createObjectURL(file);

  imgEl.onload = function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = imgEl.width;
    canvas.height = imgEl.height;

    ctx.drawImage(imgEl, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let totalR = 0, totalG = 0, totalB = 0;

    for (let i = 0; i < data.length; i += 4) {
      totalR += data[i];
      totalG += data[i + 1];
      totalB += data[i + 2];
    }

    const numPixels = data.length / 4;
    const avgR = Math.round(totalR / numPixels)
    const avgG = Math.round(totalG / numPixels);
    const avgB = Math.round(totalB / numPixels);

    console.log(`Average RGB: (${avgR}, ${avgG}, ${avgB})`);

    const displayCanvas = document.createElement('canvas');
    displayCanvas.id = 'result-canvas';
    displayCanvas.width = 100;
    displayCanvas.height = 100;

    const displayCtx = displayCanvas.getContext('2d') as CanvasRenderingContext2D;
    displayCtx.fillStyle = `rgb(${avgR}, ${avgG}, ${avgB})`;
    displayCtx.fillRect(0, 0, 100, 100);

    const resultDiv = document.getElementById('result') as HTMLDivElement;
    resultDiv.innerHTML = '';
    resultDiv.appendChild(displayCanvas);
    resultDiv.hidden = false;

    const childP = document.createElement('p');
    function parseRGB(rgbString: string): RGB{
      const [r, g, b] = rgbString.replace('(', '').replace(')', '').split(',').map(Number);
      return { r, g, b };
    }
    
    // Function to calculate the Euclidean distance between two RGB colors
    function calculateDistance(rgb1: RGB, rgb2: RGB) {
      return Math.sqrt(
        Math.pow(rgb1.r - rgb2.r, 2) +
        Math.pow(rgb1.g - rgb2.g, 2) +
        Math.pow(rgb1.b - rgb2.b, 2)
      );
    }
    
    const closestColor = colorData.reduce((prev, curr) => {
      const prevRGB = parseRGB(prev.rgb);
      const currRGB = parseRGB(curr.rgb);
      const prevDiff = calculateDistance({ r: avgR, g: avgG, b: avgB }, prevRGB);
      const currDiff = calculateDistance({ r: avgR, g: avgG, b: avgB }, currRGB);
      return (prevDiff < currDiff) ? prev : curr;
    });
    
    childP.textContent += ` - Closest Named Color: ${closestColor.name}`;
    resultDiv.appendChild(childP);

    console.log('File Name:', file.name);
  };
}
