
// dark mode section starts 


// dark theme section starts 

var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "./images/sun.png";
    }
    else {
        icon.src = "./images/moon2.png";
    }
}

// mobile darkmode script starts 

var icon1 = document.getElementById("dark-icon");

icon1.onclick = function () {
    document.body.classList.toggle("dark-theme1");
    if (document.body.classList.contains("dark-theme1")) {
        icon1.src = "./images/sun.png";
    }
    else {
        icon1.src = "./images/moon2.png";
    }
}

// sidebar section starts 


const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('active');
});



// semester 1

document.getElementById('downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown1');
    const selectedYear = yearDropdown.value;
    
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2020-21': 'https://mega.nz/file/IjF3ATpR#jOqdlLGkdIvlVFfvMHA5SgBzMj42oTB9-Y_Pjpw469o',
        '2021-22': 'https://mega.nz/file/Nq12wRzb#08q_xho2RYU8TakfCxR0gkjZW_7buhJ33EkkiYqOvy0',
        '2022-23': 'https://drive.google.com/file/d/1FO8BQHZOQhNIMX4ZSG2Pd6VdwiBuHfkf/view?usp=sharing',
        '2023-24': 'https://drive.google.com/file/d/14JI_JnEBpD1IjfnRLCAX2IFGJcZRi-bE/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        // Open the file in a new tab
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
        alert('Will upload soon');
    }
});



// semester 2

document.getElementById('downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown2');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': 'https://mega.nz/file/x6d2VIoS#oyqbNnwhnZOR09hdojfD9i8zekATwJurBA435HbeD6o',
        '2022-23': 'https://drive.google.com/file/d/1yUfcrUzpWDAQtBT4xSyg4wux9hXW3pnp/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 3

document.getElementById('downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown3');
    const selectedYear = yearDropdown.value;
   
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': 'https://mega.nz/file/ljtmATjR#aakD_l3-KyjXgHNLcjr0WSWTj8F7CrEOOUZCVyU_rt8',
        '2022-23': 'https://drive.google.com/file/d/1y2gEXzme5MdGxAojnKR7ysnJ2U6mnX4T/view?usp=sharing',
        '2023-24': 'https://drive.google.com/file/d/1IHVmXbZcreNsmv2AGXmyVLyZ0bKQS_Ra/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
        alert('Will upload soon');
    }
});

// semester 4

document.getElementById('downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown4');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': 'https://mega.nz/file/hiclCIZT#TwCe1Mk0yMrBKFaCKzQlJujcjDDyTeqTdFxR4RV2j0s',
        '2022-23': 'https://drive.google.com/file/d/1z_rz4HmEnOzVhNYvDfHkvw7z-EN5XvjJ/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 5

document.getElementById('downloadButton5').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown5');
    const selectedYear = yearDropdown.value;
    
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': 'https://mega.nz/file/wuMlxJ4S#oNE5gOiDrWoREhD5L7yDrIMuiHUgEAbP0vkJbU2ZQnE',
        '2022-23': 'https://drive.google.com/file/d/1Moe70YY3q8buoqw3nUO6ja8xEpgu1kpK/view?usp=sharing',
        '2023-24': 'https://drive.google.com/file/d/1HFBYGSRuHU61eAy4C8RnWH43gU-zAcWJ/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 6

document.getElementById('downloadButton6').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown6');
    const selectedYear = yearDropdown.value;
  
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': 'https://mega.nz/file/EuFxTQpY#PZHXsIOefxX3DROQk8q6GObbiXukV9u9TX6T9JUuEbU',
        '2022-23': 'https://drive.google.com/file/d/1YlZaEtAorDDOivlltI6gWfva9oKJqqF_/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 7

document.getElementById('downloadButton7').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown7');
    const selectedYear = yearDropdown.value;
   
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': 'https://mega.nz/file/RyMXFDDJ#Hd3FYco3SYMEr4LvKvt5r1_SElgmzrqLcbISVvijk_s',
        '2022-23': 'https://drive.google.com/file/d/1_JkCPGdqk9OR3HfWsvxDhnI95yrbC9Ti/view?usp=sharing',
        '2023-24': 'https://drive.google.com/file/d/1XaHMUWaFvOUJcTH9N-4hTs5jgKepGIqp/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 8

document.getElementById('downloadButton8').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown8');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': 'https://mega.nz/file/428zBITK#yL8BCzWtmC75Mo4VvCk2b8oRkc-SfteZ82txppCWh6A',
        '2022-23': 'https://drive.google.com/file/d/1pn9jUHZr3VKiQIdJOkDlv1jkOxOv4sTH/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 9

document.getElementById('downloadButton9').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown9');
    const selectedYear = yearDropdown.value;
    
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': 'https://mega.nz/file/hyF2FLRY#xtJYgF4FVMRCGpxNpKBLIdC-4SuOD1issZYov2zmsBU',
        '2022-23': 'https://drive.google.com/file/d/1lHzYA8eLsIDcDoQnyjcCCUYGV8HjhjRd/view?usp=sharing',
        '2023-24': 'https://drive.google.com/file/d/1t4PsaQtq4ZTfZUXBHfz2vyNNHKgcsJuS/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});


// mba integrated section starts 




// semester 1

document.getElementById('mba-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown1');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int 1st Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1ijxidglY8Trxplhx3M01XkRXltqX0Z58/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});


// semester 2

document.getElementById('mba-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown2');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int 1st Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1uPjqCUGvsuW5_eCS6jp0HkASYzksxQRz/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 3

document.getElementById('mba-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown3');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1A3VrH6XoCeSI-OWGTRJ6aYeg7Tvb3vtH/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
        
        alert('Will upload soon');
    }
});

// semester 4

document.getElementById('mba-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown4');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1owGuccJ302s17mfNvCvCxzpJeEuHhuI1/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 5

document.getElementById('mba-downloadButton5').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown5');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1c2aYFVWOs0U1-HVp17zOzbhWJZ8q4Xmc/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 6

document.getElementById('mba-downloadButton6').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown6');
    const selectedYear = yearDropdown.value;
    
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/10EjqbK974c27prkLCZUCiY03Eu3r-9FQ/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
        

        alert('coming soon');
        alert('Will upload soon');
    }
});

// semester 7

document.getElementById('mba-downloadButton7').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown7');
    const selectedYear = yearDropdown.value;
    
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1tRA_XpJC0rqOTFZzQ5dRN_swFBiEbMIS/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 8

document.getElementById('mba-downloadButton8').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown8');
    const selectedYear = yearDropdown.value;
    
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1ppYcA6MRGGnLVXjf67CNcG0gwXehBl8Y/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 9

document.getElementById('mba-downloadButton9').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown9');
    const selectedYear = yearDropdown.value;
    
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1mca8SotWRyFCpuRQFzkI_NQDGYhEp_lt/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});


// mba section starts 

//Semester 1
document.getElementById('mba1-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown1');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2019-20': 'https://drive.google.com/file/d/1PThSS4cxtZIecSfFu8cCDh1IeHMM6kwX/view?usp=sharing',
        '2020-21': 'https://drive.google.com/file/d/1p4GhWu-LN7VVgUlbnkIrVhejFHMOICMP/view?usp=sharing',
        '2021-22': 'https://drive.google.com/file/d/18c2Gkgv37vPRJ9WtlVrdE5ZGC9EbxaMg/view?usp=sharing',
        '2022-23': 'https://drive.google.com/file/d/1NjGzCZvrSPRazdj46zI8AQFuU1F4QM9A/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
        
        alert('Year 2022-23,2021-22,2020-21,2019-20 are avilable \n\nOther will upload soon');
    }
});

// semester 2

document.getElementById('mba1-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown2');
    const selectedYear = yearDropdown.value;
  

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://drive.google.com/file/d/1_zjAywuPbL_e4-hzsHnLI0mMWFhZxixD/view?usp=sharing',
        '2022-23': 'https://drive.google.com/file/d/1xEifea1jvI6eVOGE6lIj35fAIH96nmnJ/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Year 2022-23,2021-22 are avilable \n\nOther will upload soon');
    }
});

// semester 3

document.getElementById('mba1-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown3');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2017-18': 'https://drive.google.com/file/d/1kaGjhenoXID8oZB48aj1tpDAUWhUWDkF/view?usp=sharing',
        '2019-20': 'https://drive.google.com/file/d/1niolkeYiGRkZ4BA4Cy0Q7VqBJH_dHvYr/view?usp=sharing',
        '2022-23': 'https://drive.google.com/file/d/158DQrBfMqoIP9gakURPG8Tp6G-nfHrj-/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
        
        alert('Year 2022-23,2029-20,2017-18 are avilable \n\nOther will upload soon');
    }
});

// semester 4

document.getElementById('mba1-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown4');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2022-23': 'https://drive.google.com/file/d/1-hDp1DQ5-CBw1eOIZGZg6rWZKn7m_DaT/view?usp=sharing',
        '2021-22': 'https://drive.google.com/file/d/1yFaecHWv9xJJhvwgrCEf_oIuTL17M5ne/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Year 2022-23,2021-22 are avilable \n\nOther will upload soon');
    }
});

// mba section ends 

// mca section starts 

// 1st semester 
document.getElementById('mca-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown1');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://mega.nz/file/4qlgDCzK#q08FYWuqBc9YGcwvHZcs_jLx-c9eB-4p5FytcSPQUGA',
        '2022-23': 'https://drive.google.com/file/d/16feOdBJue_uJdpwEDF9__8lCQH-h-mBj/view?usp=sharing',
        '2023-24': 'https://drive.google.com/file/d/1P-CSNAG9pJEBF7GGwU40-KQ_tpbzRZgf/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
      
        alert('coming soon');
    }
});

// semester 2

document.getElementById('mca-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown2');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://mega.nz/file/E28jXZjJ#QI3AIThLsjVBQoHn-2x-RUw1732hEWP_onBIpzF_Wpk',
        '2022-23': 'https://drive.google.com/file/d/1eYZQw8FkZbeCbAosMBdgZwlA7fFtsZXc/view?usp=sharing',
        '2023-24': '',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('coming soon');
    }
});

// semester 3

document.getElementById('mca-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown3');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://mega.nz/file/4n03VTxB#LgghiaGHxr2x-B7CCiHIh8S_4nfD1BslGeSPm1AGXwc',
        '2022-23': 'https://drive.google.com/file/d/1oXj43CyBKFdmDyQEyOMQmrgOPg-UEkK1/view?usp=sharing',
        '2023-24': 'https://drive.google.com/file/d/1Wu0dpjEuU0LvscJ7u3qicfS9IHe_0yLU/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('coming soon');
    }
});

// semester 4

document.getElementById('mca-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown4');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://mega.nz/file/4mlD2IJC#7tzaAFhppiC0ZMTbUBUxEf3Wpfr_7MGLU1es-P1apVA',
        '2022-23': 'https://drive.google.com/file/d/1G9xVZvBZIumlEml2X6zhEMALavqp23Is/view?usp=sharing',
        '2023-24': '',
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('coming soon');
    }
});

// mca section ends 

//BCA Start
// semester 1

document.getElementById('bca-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown1');
    const selectedYear = yearDropdown.value;
  

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2021': 'https://drive.google.com/file/d/1zgwTtFcTiPqousYe9hagH3dAFeyknSV6/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 2

document.getElementById('bca-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown2');
    const selectedYear = yearDropdown.value;
   
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 3

document.getElementById('bca-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown3');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2022': 'https://drive.google.com/file/d/12e2wBtSzq5NMaSzcd-doYvX2DAEdzp4w/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 4

document.getElementById('bca-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown4');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2022': 'https://drive.google.com/file/d/11Z8roIJjmcWUa2JwEGAtZBLgYH_iA_oL/view?usp=sharing',
        '2023': 'https://drive.google.com/file/d/1umn49ZW6Mpxz3pbEI_PASaiQdwtfLNLb/view?usp=sharing'
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 5

document.getElementById('bca-downloadButton5').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown5');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
      
        alert('Will upload soon');
    }
});

// semester 6

document.getElementById('bca-downloadButton6').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown6');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// BCA end




//BBA Start
// semester 1

document.getElementById('bba-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown1');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2019': 'https://drive.google.com/file/d/17qfwbUSdHlECKcscsLBI-xjHn2b_KCif/view?usp=sharing',
        '2020': 'https://drive.google.com/file/d/1skjqjl2XHVcpdrZcDeq8MRpW49rLSBq4/view?usp=sharing',
        '2021': 'https://drive.google.com/file/d/1yi_bjIZQEloBBLvQaeDockKFsRNenadO/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 2

document.getElementById('bba-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown2');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
     
        alert('Will upload soon');
    }
});

// semester 3

document.getElementById('bba-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown3');
    const selectedYear = yearDropdown.value;
   
    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 4

document.getElementById('bba-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown4');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 5

document.getElementById('bba-downloadButton5').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown5');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2021': 'https://drive.google.com/file/d/15ey016-rHdawKntAmoTiYkdxzmuDZHqh/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 6

document.getElementById('bba-downloadButton6').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown6');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2022': 'https://drive.google.com/file/d/1mcd1-AGYdQYFrd82fP-jN3G2EdYzjkpN/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// BBA end
