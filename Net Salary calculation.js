function calculateNetSalary() {

    let basicSalary = parseFloat(prompt("Enter your basic salary:"));
    let benefits = parseFloat(prompt("Enter your benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        alert("Please enter valid positive numbers for salary and benefits.");
        return;
    }

    let grossSalary = basicSalary + benefits;

    let paye = 0;
    if (grossSalary <= 24000) {
        paye = 0;
    }
    else if (grossSalary <= 32333)
    {
        paye = (grossSalary - 24000) * 0.10;
    }
    else if (grossSalary <= 40000)
    {
        paye = (32333 - 24000) * 0.10 + (grossSalary - 32333) * 0.15;
    }
    else if (grossSalary <= 60000)
    {
        paye = (32333 - 24000) * 0.10 + (40000 - 32333) * 0.15 + (grossSalary - 40000) * 0.20;
    }
    else
    {
        paye = (32333 - 24000) * 0.10 + (40000 - 32333) * 0.15 + (60000 - 40000) * 0.20 + (grossSalary - 60000) * 0.30;
    }

    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else {
        nhif = 600;
    }

    let nssf = Math.min(grossSalary * 0.06, 200);


    let netSalary = grossSalary - (paye + nhif + nssf);

    alert(`Gross Salary: Ksh ${grossSalary.toFixed(2)}\n` +
        `PAYE: Ksh ${paye.toFixed(2)}\n` +
        `NHIF: Ksh ${nhif.toFixed(2)}\n` +
        `NSSF: Ksh ${nssf.toFixed(2)}\n` +
        `Net Salary: Ksh ${netSalary.toFixed(2)}`);
}

