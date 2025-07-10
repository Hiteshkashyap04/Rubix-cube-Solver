function solveCube() {
    const input = document.getElementById("cubeInput").value.trim();
    const cubeArray = input.match(/.{1}/g); // Convert string to array of chars

    fetch("http://localhost:8080/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cube: cubeArray })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("solutionOutput").textContent = "Solution: " + data;
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
