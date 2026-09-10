document.addEventListener('DOMContentLoaded', () => {
  const btnEmpezar = document.getElementById('btn-empezar');

  if (btnEmpezar) {
    btnEmpezar.addEventListener('click', () => {
      // Acción al hacer clic en el botón
      console.log('Inicio de la experiencia de clonación de voz');
      // Puedes redirigir a otra sección o página descomentando la línea de abajo:
      // window.location.href = 'siguiente.html';
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const btnEmpezar = document.getElementById('btn-empezar');

  // Evento para navegar a la segunda pantalla desde el botón
  if (btnEmpezar) {
    btnEmpezar.addEventListener('click', () => {
      window.location.href = 'pagina2.html';
    });
  }
});

// Control del reproductor de audio para la pantalla 3
const playBtn = document.getElementById('play-btn');
const audioSample = document.getElementById('audio-sample');

if (playBtn && audioSample) {
  playBtn.addEventListener('click', () => {
    if (audioSample.paused) {
      audioSample.play();
      playBtn.textContent = '❚❚';
    } else {
      audioSample.pause();
      playBtn.textContent = '▶';
    }
  });

  audioSample.addEventListener('ended', () => {
    playBtn.textContent = '▶';
  });
}

// Redirección de Pantalla 3 a Pantalla 4
const btnHumana = document.querySelector('.btn-humana');
const btnIa = document.querySelector('.btn-ia');

if (btnHumana) {
  btnHumana.addEventListener('click', () => {
    window.location.href = 'pagina4.html';
  });
}

if (btnIa) {
  btnIa.addEventListener('click', () => {
    window.location.href = 'pagina4.html';
  });
}

// ==========================================
// NUEVO: Lógica para el slider de citas (Página 6 - SZA)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const dot1 = document.getElementById('dot-1');
  const dot2 = document.getElementById('dot-2');
  const quote1 = document.getElementById('quote-1');
  const quote2 = document.getElementById('quote-2');

  if (dot1 && dot2 && quote1 && quote2) {
    dot1.addEventListener('click', () => {
      dot1.classList.add('active');
      dot2.classList.remove('active');
      quote1.classList.add('active');
      quote2.classList.remove('active');
    });

    dot2.addEventListener('click', () => {
      dot2.classList.add('active');
      dot1.classList.remove('active');
      quote2.classList.add('active');
      quote1.classList.remove('active');
    });
  }
});

function irAlResultado() {
  let score = parseInt(localStorage.getItem('puntajeQuiz')) || 0;
  
  if (score === 1) {
    window.location.href = 'acertaste1.html';
  } else if (score === 2) {
    window.location.href = 'acertaste2.html';
  } else if (score === 3) {
    window.location.href = 'acertaste3.html';
  } else if (score === 4) {
    window.location.href = 'acertaste4.html';
  } else if (score >= 5) {
    window.location.href = 'acertaste5.html';
  } else {
    window.location.href = 'acertaste1.html';
  }
}