document.getElementById('graph-form1').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user input values for the slope parameters for the drift graph
    const n = parseFloat(document.getElementById('charge_number').value);
    const m = parseFloat(document.getElementById('mobility').value);

    // Generate data points with a dynamically changing slope
    const labels = [];
    const data = [];
    for (let x = -10; x <= 10; x++) {
        labels.push(x);
        const dynamicSlope = m * (1 + 0.1 * n); // Adjust this formula as per the required relationship
        data.push(dynamicSlope * n * 1.6 * x * 0.001); // Modified data generation
    }

    // Get the canvas element
    const ctx = document.getElementById('myChart1').getContext('2d');

    // Check if there is an existing chart instance and destroy it
    if (window.myChart1 instanceof Chart) {
        window.myChart1.destroy();
    }

    // Create the line chart for drift current
    window.myChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `Drift Current`,
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                borderWidth: 2,
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Electric field across the semiconductor (in Volt/meter)'
                    },
                    beginAtZero: true,
                    min: 0
                },
                y: {
                    title: {
                        display: true,
                        text: 'Drift current (order of 10^2 Amperes/m.m)'
                    },
                    beginAtZero: true,
                    max: 250,
                    min: 0
                }
            }
        }
    });
});

document.getElementById('graph-form2').addEventListener('submit', function(event2) {
    event2.preventDefault();

    // Get the user input values for the diffusion graph
    const n2 = parseFloat(document.getElementById('gradient_const').value);
    const m2 = parseFloat(document.getElementById('mobility2').value);

    // Generate data points with a dynamically changing slope
    const labels2 = [];
    const data2 = [];
    for (let x2 = 0; x2 <= 1; x2 += 0.001) {
        labels2.push(x2);
        const dx = m2* 1.6 * 25 / 1.3;
        const gradient2 = 1 - Math.pow(2.72, -1 * x2 * n2); // or use 1 - (2.72 ** (-1 * x * n))
        data2.push(dx * gradient2); // Modified data generation
    }

    // Get the canvas element
    const ctx2 = document.getElementById('myChart2').getContext('2d');

    // Check if there is an existing chart instance and destroy it
    if (window.myChart2 instanceof Chart) {
        window.myChart2.destroy();
    }

    // Create the line chart for diffusion current
    window.myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labels2,
            datasets: [{
                label: `Diffusion Current`,
                data: data2,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: false,
                borderWidth: 2,
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Length of the semiconductor (in centimeters)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Diffusion current (order of 10^4 Ampere/m.m)'
                    },
                    max: 3500,
                    min: 0
                }
            }
        }
    });
});
