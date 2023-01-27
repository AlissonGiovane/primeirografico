const ctx = document.getElementById('meuGrafico');
    
new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
    'Jan', 
    'Fev', 
    'Mar', 
    'Abr', 
    'Mai', 
    'Jun',
    'Jul',
    'Ago',
    'Set',
    ],
    datasets: [{
        label: 'Homicidios por mês',
        data: [3246, 3301, 3577, 3580, 3442, 2996, 3420, 3152, 3293],
        borderColor:[
            "rgba(255, 0, 0, 0.5"
        ]
      }]
    },
    options: {
        responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
