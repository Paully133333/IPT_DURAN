function addNumbers() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = num1 + num2;
  document.getElementById('result').innerText = 'Result: ' + result;
}

function toggleMode() {
  const body = document.body;
  const modeButton = document.getElementById('modeButton');
  const halloweenTheme = document.getElementById('halloweenTheme');

  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

 
  if (body.classList.contains('dark-mode')) {
    modeButton.innerText = 'Light Mode';

   
    halloweenTheme.innerHTML = ''; 
    // Top-left corner
    const imgTopLeft = document.createElement('img');
    imgTopLeft.src = 'pumpkin.jpg';
    imgTopLeft.classList.add('pumpkin', 'top-left');
    halloweenTheme.appendChild(imgTopLeft);

    // Top-right corner
    const imgTopRight = document.createElement('img');
    imgTopRight.src = 'pumpkin.jpg';
    imgTopRight.classList.add('pumpkin', 'top-right');
    halloweenTheme.appendChild(imgTopRight);

    // Bottom-left corner
    const imgBottomLeft = document.createElement('img');
    imgBottomLeft.src = 'pumpkin.jpg';
    imgBottomLeft.classList.add('pumpkin', 'bottom-left');
    halloweenTheme.appendChild(imgBottomLeft);

    // Bottom-right corner
    const imgBottomRight = document.createElement('img');
    imgBottomRight.src = 'pumpkin.jpg';
    imgBottomRight.classList.add('pumpkin', 'bottom-right');
    halloweenTheme.appendChild(imgBottomRight);

  } else {
    modeButton.innerText = 'Dark Mode';

    // Remove pumpkin images in light mode
    halloweenTheme.innerHTML = '';
  }
}
