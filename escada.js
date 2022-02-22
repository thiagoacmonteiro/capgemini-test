let line = '';

function escada(n) {
  for (let i = n; i > 0; i -= 1) {
    for (let j = 1; j <= n; j += 1){
      if (j < i) {
        line += ' ';
      } else {
        line += '*';
      }
    }
    console.log(line);
    line = '';
  }
}

escada(6);

// Execute 'node escada' no terminal para ver o resultado