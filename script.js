function calculateEMI() {
    const principal = parseFloat(document.getElementById("loanAmount").value);
    const annualInterest = parseFloat(document.getElementById("interestRate").value);
    const tenure = parseInt(document.getElementById("loanTenure").value);

    if (isNaN(principal) || isNaN(annualInterest) || isNaN(tenure)) {
        document.getElementById("emiResult").innerText = "Please fill in all fields.";
        return;
    }

    const monthlyInterest = annualInterest / 12 / 100;
    const emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) /
        (Math.pow(1 + monthlyInterest, tenure) - 1);

    document.getElementById("emiResult").innerText = `Your EMI is ₹${emi.toFixed(2)}`;
}

// Theme toggle
const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});