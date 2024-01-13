
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
        '2022-23': 'https://mega.nz/file/p3EgHCZQ#kn1nESic7NfFRBfnRLcAkymKGq5xYe5GS5mqMVHb5uM',
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
        '2022-23': 'https://mega.nz/file/0nNSxbwa#tGPnkZHKH9PNaGqBG2jkJutLPEAXUIw9kY1I912iC7E',
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
        '2022-23': 'https://mega.nz/file/NrEQBJ4Z#hjad0jT64IXiF8CqIrNIZibckBmcCjNq6GfV22f0sf8',
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
        '2022-23': 'https://mega.nz/file/Z6kRmB6Q#wXPVaK-nAVzF8UIqLwIv9AjRINAt1CVuWyX3z-aXwes',
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
        '2022-23': 'https://mega.nz/file/82UFzTQJ#S-k8Ddu-ofSqAJuHsteIiEBBKMNDHLxt8G30yuOUUH4',
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
        '2022-23': 'https://mega.nz/file/82N1XK4Y#qdqI60KBxEKSSuEJytAbR-ICOt5nMpOG4lhledu-9x8',
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
        '2022-23': 'https://mega.nz/file/EmcAyQCL#HyYvoLQSjvoYfOLpWaQaNeI31l70p7bRoUtZ2tlciaQ',
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
        '2022-23': 'https://mega.nz/file/Iy9i0DJC#KelaevbUM5VSiFYXfY_roIF9zfOeut4EvemST3efbxw',
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
        '2022-23': 'https://mega.nz/file/pnVVUDJa#XUpNAvThkmnhiGkbhENlnZYIX3pogrFUrL42YtC9LSg',
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

//Semester 1
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
        
        alert('Year 2022-23,2021-22,2020-21,2019-20 are avilable \n\nOther will upload soon');
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
       
        alert('Year 2022-23,2021-22 are avilable \n\nOther will upload soon');
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
        
        alert('Year 2022-23,2029-20,2017-18 are avilable \n\nOther will upload soon');
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
       
        alert('Year 2022-23 are avilable \n\nOther will upload soon');
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
        '2022-23': 'https://mega.nz/file/o6UCGADA#OwfDoIX7HYXi-kLPR2FmtvhmfoVXmcnPGhpdYX9DeFk',
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
        '2022-23': 'https://mega.nz/file/gycjkCLY#8a8lveP26eJK0jr3cuk39vzdpfxrO0DM1srVc9OFzxM',
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
        '2022-23': 'https://mega.nz/file/IzNjxaDY#jHGZ5UBukoersnirOzX4MTofAgjmvgaCMftK704Y9yk',
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
        '2022-23': 'https://mega.nz/file/gm0SwIhZ#eSncwTNNPF50PHMfgtC-EmgkVr4PP6EHDRNWbZ_MiEE',
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
