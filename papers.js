
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
        '2020-21': './papers/MCA Int/MCA Int 1st Sem (2020-21).pdf',
        '2021-22': './papers/MCA Int/MCA Int 1st Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 1st Sem (2022-23).pdf',
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
        '2021-22': './papers/MCA Int/MCA Int 2nd Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 2nd Sem (2022-23).pdf',
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
        '2021-22': './papers/MCA Int/MCA Int 3rd Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 3rd Sem (2022-23).pdf',
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
        '2021-22': './papers/MCA Int/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 4th Sem (2022-23).pdf',
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
        '2021-22': './papers/MCA Int/MCA Int 5th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 5th Sem (2022-23).pdf',
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
        '2021-22': './papers/MCA Int/MCA Int 6th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 6th Sem (2022-23).pdf',
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
        '2021-22': './papers/MCA Int/MCA Int 7th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 7th Sem (2022-23).pdf',
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
        '2021-22': './papers/MCA Int/MCA Int 8th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 8th Sem (2022-23).pdf',
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
        '2021-22': './papers/MCA Int/MCA Int 9th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 9th Sem (2022-23).pdf',
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
        '2022-23': 'https://drive.google.com/file/d/1yKUDVNbcdi_cxn88QV9uoteZILqzpkDa/view?usp=sharing',
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
        '2022-23': 'https://drive.google.com/file/d/1NIfxBFA-PsHladEh5NaGhpNAtuzvCi6G/view?usp=sharing',
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
        '2022-23': 'https://drive.google.com/file/d/13NBMhuE3mZqeJbLQdiPLQ60y-hGn_WNd/view?usp=sharing',
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
        '2022-23': 'https://drive.google.com/file/d/1Gd4IBAZQluF6vTcvk_2CgAxBo4epFzAy/view?usp=sharing',
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
        '2022-23': 'https://drive.google.com/file/d/1lBzce6iaKgOp84QiQrHDvvQvtlgRNitQ/view?usp=sharing',
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
        '2022-23': 'https://drive.google.com/file/d/15hkfAYoVmqdW36NrvBi4Y33TwTpBbhU7/view?usp=sharing',
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
        '2022-23': 'https://drive.google.com/file/d/1IEL2W9NBeXWYT-hty81RNsuCgZ9nTN2S/view?usp=sharing',
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
        '2022-23': 'https://drive.google.com/file/d/1XvVUYS-SO87snulTL3409WXJgrLrtaAy/view?usp=sharing',
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
        '2022-23': 'https://drive.google.com/file/d/1c7vsMmo6azZyKZDdR7_nX5zskrzeAguT/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});


// mba section starts 

document.getElementById('mba1-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown1');
    const selectedYear = yearDropdown.value;
    

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2019-20': 'https://mega.nz/file/Br1n0YgD#SmGAvm1WuIAjms6RK4t6k66Cog1xQ2qJ_TF5Hx3kbvE',
        '2020-21': 'https://mega.nz/file/YjEF1SCA#KdLcV4NoPw-sIpeY6PHBoBtjLU_MjciRITfFCzwOAcw',
        '2021-22': 'https://mega.nz/file/c7NGiRxY#E19fcvfuza9aSkAWnXMAyJGczHCQVQBx3L3VPDlAe-M',
        '2022-23': 'https://mega.nz/file/861HjYBQ#2AQuxiriQjf2nkw6ONN8HCEtnVhG5r1J_4s2c7ICC8w',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
        
        alert('Will upload soon');
    }
});

// semester 2

document.getElementById('mba1-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown2');
    const selectedYear = yearDropdown.value;
  

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://mega.nz/file/NmlUgQRR#4YbJs96a6leH6PqEAdvE4Q1sAU3yF5QukRK8XGZveTY',
        '2022-23': 'https://mega.nz/file/YqcmXZTD#aYOgQcVXc2OXH89ovayZZ5SUw7vzQUYtozeLbUfwGbg',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 3

document.getElementById('mba1-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown3');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2017-18': 'https://mega.nz/file/dnsRSLIT#TB16uQNfqhBiqFHLNdHXfa7cTMYThE4uDH64wQgmfHg',
        '2019-20': 'https://mega.nz/file/VykgWQLS#k318_1PaM6I6funBo9Tj3A6wRhvpY6km8mxZwrx0NgQ',
        '2022-23': 'https://mega.nz/file/QjlBxDhb#-BfSS9wqvKWh5gTln0cbh16PXJrxMNzwaFP2aZktKc0',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
        
        alert('Will upload soon');
    }
});

// semester 4

document.getElementById('mba1-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown4');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2022-23': 'https://mega.nz/file/g2FBAKiI#-eXLqvhuhH6Zx4ab3Bd3B-y6yqK8D7Aqke06QtuwiVU',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
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
        '2021-22': 'https://mega.nz/file/8mUlnZpY#gpsn7WRXoZTDl4XJeDjZ2Ca4Ergsykqu_jr2By41taM',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
      
        alert('Will upload soon');
    }
});

// semester 2

document.getElementById('mca-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown2');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://mega.nz/file/suFCTJoL#arVnV4yUsLbb6PKgmQO6vZCkQt3aXGdcPVFfJyKKtDw',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 3

document.getElementById('mca-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown3');
    const selectedYear = yearDropdown.value;
   

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://mega.nz/file/1y81VAYa#ty-TvcJLyDN8oCYBbjh4wu9rfS2T-KJQnEit0R3mtgc',
    };

    if (curriculumFiles[selectedYear]) {
        window.open(curriculumFiles[selectedYear], '_blank');
    } else {
       
        alert('Will upload soon');
    }
});

// semester 4

document.getElementById('mca-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown4');
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
