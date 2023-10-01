
// dark mode section starts 


// dark theme section starts 

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./images/sun.png";
    }
    else{
        icon.src= "./images/moon2.png";
    }
}

// mobile darkmode script starts 

var icon1 = document.getElementById("dark-icon");

icon1.onclick = function(){
    document.body.classList.toggle("dark-theme1");
    if(document.body.classList.contains("dark-theme1")){
        icon1.src = "./images/sun.png";
    }
    else{
        icon1.src= "./images/moon2.png";
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
    const downloadLink = document.getElementById('downloadLink1');
    const downloadAnchor = document.getElementById('downloadAnchor1');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2020-21': './papers/MCA Int/MCA Int 1st Sem (2020-21).pdf',
        '2021-22': './papers/MCA Int/MCA Int 1st Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 1st Sem (2022-23).pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});


// semester 2

document.getElementById('downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown2');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('downloadLink2');
    const downloadAnchor = document.getElementById('downloadAnchor2');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': './papers/MCA Int/MCA Int 2nd Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 2nd Sem (2022-23).pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 3

document.getElementById('downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown3');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('downloadLink3');
    const downloadAnchor = document.getElementById('downloadAnchor3');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': './papers/MCA Int/MCA Int 3rd Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 3rd Sem (2022-23).pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 4

document.getElementById('downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown4');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('downloadLink4');
    const downloadAnchor = document.getElementById('downloadAnchor4');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': './papers/MCA Int/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 4th Sem (2022-23).pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 5

document.getElementById('downloadButton5').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown5');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('downloadLink5');
    const downloadAnchor = document.getElementById('downloadAnchor5');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': './papers/MCA Int/MCA Int 5th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 5th Sem (2022-23).pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 6

document.getElementById('downloadButton6').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown6');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('downloadLink6');
    const downloadAnchor = document.getElementById('downloadAnchor6');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int/MCA Int 6th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 6th Sem (2022-23).pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 7

document.getElementById('downloadButton7').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown7');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('downloadLink7');
    const downloadAnchor = document.getElementById('downloadAnchor7');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': './papers/MCA Int/MCA Int 7th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 7th Sem (2022-23).pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 8

document.getElementById('downloadButton8').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown8');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('downloadLink8');
    const downloadAnchor = document.getElementById('downloadAnchor8');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': './papers/MCA Int/MCA Int 8th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 8th Sem (2022-23).pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 9

document.getElementById('downloadButton9').addEventListener('click', function () {
    const yearDropdown = document.getElementById('yearDropdown9');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('downloadLink9');
    const downloadAnchor = document.getElementById('downloadAnchor9');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        '2021-22': './papers/MCA Int/MCA Int 9th Sem (2021-22).pdf',
        '2022-23': './papers/MCA Int/MCA Int 9th Sem (2022-23).pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});


// mba section starts 




// semester 1

document.getElementById('mba-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown1');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba-downloadLink1');
    const downloadAnchor = document.getElementById('mba-downloadAnchor1');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2020-21': './papers/MCA Int 1st Sem (2020-21).pdf',
        // '2021-22': './papers/MCA Int 1st Sem (2021-22).pdf',
        // '2022-23': './course curriculum/MCA_Integrated_4_Year.pdf',
        // '2019': './course curriculum/MCA 5th year 2021-22.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});


// semester 2

document.getElementById('mba-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown2');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba-downloadLink2');
    const downloadAnchor = document.getElementById('mba-downloadAnchor2');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2020-21': './papers/MCA Int 1st Sem (2020-21).pdf',
        // '2021-22': './papers/MCA Int 1st Sem (2021-22).pdf',
        // '2022-23': './course curriculum/MCA_Integrated_4_Year.pdf',
        // '2019': './course curriculum/MCA 5th year 2021-22.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 3

document.getElementById('mba-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown3');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba-downloadLink3');
    const downloadAnchor = document.getElementById('mba-downloadAnchor3');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2020-21': './papers/MCA Int 1st Sem (2020-21).pdf',
        // '2021-22': './papers/MCA Int 3rd Sem (2021-22).pdf',
        // '2022-23': './course curriculum/MCA_Integrated_4_Year.pdf',
        // '2019': './course curriculum/MCA 5th year 2021-22.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 4

document.getElementById('mba-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown4');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba-downloadLink4');
    const downloadAnchor = document.getElementById('mba-downloadAnchor4');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2020-21': './papers/MCA Int 1st Sem (2020-21).pdf',
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        // '2022-23': './course curriculum/MCA_Integrated_4_Year.pdf',
        // '2019': './course curriculum/MCA 5th year 2021-22.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 5

document.getElementById('mba-downloadButton5').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown5');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba-downloadLink5');
    const downloadAnchor = document.getElementById('mba-downloadAnchor5');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2020-21': './papers/MCA Int 1st Sem (2020-21).pdf',
        // '2021-22': './papers/MCA Int 5th Sem (2021-22).pdf',
        // '2022-23': './papers/MCA Int 5th Sem (2022-23).pdf',
        // '2019': './course curriculum/MCA 5th year 2021-22.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 6

document.getElementById('mba-downloadButton6').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown6');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba-downloadLink6');
    const downloadAnchor = document.getElementById('mba-downloadAnchor6');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2020-21': './papers/MCA Int 1st Sem (2020-21).pdf',
        // '2021-22': './papers/MCA Int 1st Sem (2021-22).pdf',
        // '2022-23': './course curriculum/MCA_Integrated_4_Year.pdf',
        // '2019': './course curriculum/MCA 5th year 2021-22.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 7

document.getElementById('mba-downloadButton7').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown7');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba-downloadLink7');
    const downloadAnchor = document.getElementById('mba-downloadAnchor7');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2020-21': './papers/MCA Int 1st Sem (2020-21).pdf',
        // '2021-22': './papers/MCA Int 7th Sem (2021-22).pdf',
        // '2022-23': './course curriculum/MCA_Integrated_4_Year.pdf',
        // '2019': './course curriculum/MCA 5th year 2021-22.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 8

document.getElementById('mba-downloadButton8').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown8');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba-downloadLink8');
    const downloadAnchor = document.getElementById('mba-downloadAnchor8');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2020-21': './papers/MCA Int 1st Sem (2020-21).pdf',
        // '2021-22': './papers/MCA Int 8th Sem (2021-22).pdf',
        // '2022-23': './course curriculum/MCA_Integrated_4_Year.pdf',
        // '2019': './course curriculum/MCA 5th year 2021-22.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});

// semester 9

document.getElementById('mba-downloadButton9').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown9');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba-downloadLink9');
    const downloadAnchor = document.getElementById('mba-downloadAnchor9');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2020-21': './papers/MCA Int 1st Sem (2020-21).pdf',
        // '2021-22': './papers/MCA Int 8th Sem (2021-22).pdf',
        // '2022-23': './course curriculum/MCA_Integrated_4_Year.pdf',
        // '2019': './course curriculum/MCA 5th year 2021-22.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('coming soon');
    }
});