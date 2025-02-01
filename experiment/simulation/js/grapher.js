
document.addEventListener("DOMContentLoaded", () => {
    const collapsibles = document.querySelectorAll(".v-collapsible");

    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener("click", () => {
            const content = collapsible.nextElementSibling;
            collapsible.classList.toggle("is-active");

            if (content.style.maxHeight) {
                // Close the collapsible
                content.style.maxHeight = null;
            } else {
                // Open the collapsible
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

const plot1 = document.getElementById('plot1').getContext('2d');
new Chart(plot1, {
    type: 'line',
    data: {
        labels: Array.from({ length: 601 }, (_, i) => i), // Temperature range from 0 to 600 K
        datasets: [
            {
                data: Array.from({ length: 601 }, (_, T) => 0.007 * T), // Line with slope 0.005
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                borderWidth: 2,
            },
            {
                data: Array.from({ length: 601 }, (_, T) => 0.02 * T), // Line with slope 0.01
                borderColor: 'black',
                borderWidth: 1,
                fill: false,
            }
        ]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                min: 0, // Minimum y-value
                max: 10, // Adjusted maximum y-value to fit both lines
                title: {
                    display: true,
                    text: 'Value'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Temperature (K)'
                }
            }
        }
    }
});

const plot2 = document.getElementById('plot2').getContext('2d');
new Chart(plot2, {
    type: 'line',
    data: {
        labels: Array.from({ length: 601 }, (_, x) => x / 100), // x range from 0 to 6.00 (increment by 0.01)
        datasets: [
            {
                label: 'A = 2, Exponential Decay',
                data: Array.from({ length: 601 }, (_, x) => 2 *(1 - Math.exp(-2*x / 100))), // A = 2, decay factor = 1
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
                borderWidth: 2,
            },
            {
                label: 'A = 1, Faster Decay',
                data: Array.from({ length: 601 }, (_, x) =>1-Math.exp(-2 * x / 100)), // A = 1, decay factor = 2
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: false,
                borderWidth: 2,
            }
        ]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                min: 0, // Minimum y-value
                max: 2.5, // Maximum y-value to fit both curves
                title: {
                    display: true,
                    text: 'Exponential Function Value'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'x (input range)'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    }
});

// Function to validate the inputs
function validateInputs() {
    const input1 = document.getElementById('plot-input1').value.trim();
    const input2 = document.getElementById('plot-input2').value.trim();
    const input3 = document.getElementById('plot-input3').value.trim();
    const input4 = document.getElementById('plot-input4').value.trim();
    const resultMessage = document.getElementById('result-message');
    let x = 0;
    let y = 0;
    // Check if the inputs match the desired values
    if (input1 === 'b' && input2 === 'a'){
       x = 1;
    }
    if (input3 === 'b' && input4 === 'a'){
        y = 1;
    }
    if (x == 1)
    {
        if (y == 1){
            resultMessage.style.display = 'block';
            resultMessage.textContent = 'Correct';
            resultMessage.style.color = 'green';
        }
        else{
            resultMessage.style.display = 'block';
            resultMessage.textContent = 'Drift is correct, diffusion is incorrect';
            resultMessage.style.color = 'orange';
        }
    }
    else
    {
        if (y == 0){
            resultMessage.style.display = 'block';
            resultMessage.textContent = 'Inorrect';
            resultMessage.style.color = 'red';
        }
        else{
            resultMessage.style.display = 'block';
            resultMessage.textContent = 'Drift is incorrect, diffusion is correct';
            resultMessage.style.color = 'orange';
        }
    }
}

// Add event listener to the submit button
document.getElementById('submit-btn').addEventListener('click', validateInputs);