
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
        alert('Will upload soon');
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
        alert('Will upload soon');
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
        alert('Will upload soon');
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
        alert('Will upload soon');
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
        alert('Will upload soon');
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
        alert('Will upload soon');
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
        alert('Will upload soon');
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
        alert('Will upload soon');
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
        alert('Will upload soon');
    }
});


// mba integrated section starts 




// semester 1

document.getElementById('mba-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba-yearDropdown1');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba-downloadLink1');
    const downloadAnchor = document.getElementById('mba-downloadAnchor1');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2019-20': './papers/',
        // '2021-22': './papers/MCA Int 1st Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1yKUDVNbcdi_cxn88QV9uoteZILqzpkDa/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
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
        // '2021-22': './papers/MCA Int 1st Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1NIfxBFA-PsHladEh5NaGhpNAtuzvCi6G/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
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
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/13NBMhuE3mZqeJbLQdiPLQ60y-hGn_WNd/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
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
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1Gd4IBAZQluF6vTcvk_2CgAxBo4epFzAy/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
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
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1lBzce6iaKgOp84QiQrHDvvQvtlgRNitQ/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
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
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/15hkfAYoVmqdW36NrvBi4Y33TwTpBbhU7/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';

        alert('coming soon');
        alert('Will upload soon');
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
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1IEL2W9NBeXWYT-hty81RNsuCgZ9nTN2S/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
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
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1XvVUYS-SO87snulTL3409WXJgrLrtaAy/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
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
        // '2021-22': './papers/MCA Int 4th Sem (2021-22).pdf',
        '2022-23': 'https://drive.google.com/file/d/1c7vsMmo6azZyKZDdR7_nX5zskrzeAguT/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});


// mba section starts 

document.getElementById('mba1-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown1');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba1-downloadLink1');
    const downloadAnchor = document.getElementById('mba1-downloadAnchor1');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2019-20': 'https://drive.google.com/file/d/1iSXv2oisPA8fobEMc7WR6UmaGaOOULOM/view?usp=sharing',
        '2020-21': 'https://drive.google.com/drive/folders/1Aw7Yh0VLGZQz7LIJCjWvceCxx0XJcre1?usp=sharing',
        '2021-22': 'https://drive.google.com/drive/folders/1Eut8TCuii-RFFLR6zpEeOrgmHZSIQDey?usp=sharing'
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 2

document.getElementById('mba1-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown2');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba1-downloadLink2');
    const downloadAnchor = document.getElementById('mba1-downloadAnchor2');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://drive.google.com/drive/folders/1GVmFey4QoQJieMHFkiCZeiOpUawhVGu7?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 3

document.getElementById('mba1-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown3');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba1-downloadLink3');
    const downloadAnchor = document.getElementById('mba1-downloadAnchor3');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2017-18': 'https://drive.google.com/file/d/1y4weml9idfx2UgRhJFh0Haki5q_eZHnf/view?usp=sharing',
        '2022-23': 'https://drive.google.com/drive/folders/1SFX_0Uz272aRhCNTReTTEnA_QnHHqUwq?usp=sharing'
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 4

document.getElementById('mba1-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mba1-yearDropdown4');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mba1-downloadLink4');
    const downloadAnchor = document.getElementById('mba1-downloadAnchor4');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2022-23': 'https://drive.google.com/drive/folders/1vdVfxK4tsUV1EQkmL7jw_Vx6rmy14ML1?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// mba section ends 

// mca section starts 

// 1st semester 
document.getElementById('mca-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown1');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mca-downloadLink1');
    const downloadAnchor = document.getElementById('mca-downloadAnchor1');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://drive.google.com/file/d/1dNjmi_Fh4XdUtznoBTb51sxigkqTFeQc/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 2

document.getElementById('mca-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown2');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mca-downloadLink2');
    const downloadAnchor = document.getElementById('mca-downloadAnchor2');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://drive.google.com/drive/folders/1_SYMkXfyaCkcewJgR-GFpIeISdzcPAk0?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 3

document.getElementById('mca-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown3');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mca-downloadLink3');
    const downloadAnchor = document.getElementById('mca-downloadAnchor3');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        '2021-22': 'https://drive.google.com/drive/folders/1autd2by7HOIflGEYPWJiDLPrDFqsX8F3?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 4

document.getElementById('mca-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('mca-yearDropdown4');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('mca-downloadLink4');
    const downloadAnchor = document.getElementById('mca-downloadAnchor4');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// mca section ends 

//BCA Start
// semester 1

document.getElementById('bca-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown1');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bca-downloadLink1');
    const downloadAnchor = document.getElementById('bca-downloadAnchor1');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2021': 'https://drive.google.com/file/d/1zgwTtFcTiPqousYe9hagH3dAFeyknSV6/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 2

document.getElementById('bca-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown2');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bca-downloadLink2');
    const downloadAnchor = document.getElementById('bca-downloadAnchor2');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 3

document.getElementById('bca-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown3');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bca-downloadLink3');
    const downloadAnchor = document.getElementById('bca-downloadAnchor3');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2022': 'https://drive.google.com/file/d/12e2wBtSzq5NMaSzcd-doYvX2DAEdzp4w/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 4

document.getElementById('bca-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown4');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bca-downloadLink4');
    const downloadAnchor = document.getElementById('bca-downloadAnchor4');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2022': 'https://drive.google.com/file/d/11Z8roIJjmcWUa2JwEGAtZBLgYH_iA_oL/view?usp=sharing',
        '2023': 'https://drive.google.com/file/d/1umn49ZW6Mpxz3pbEI_PASaiQdwtfLNLb/view?usp=sharing'
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 5

document.getElementById('bca-downloadButton5').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown5');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bca-downloadLink5');
    const downloadAnchor = document.getElementById('bca-downloadAnchor5');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 6

document.getElementById('bca-downloadButton6').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bca-yearDropdown6');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bca-downloadLink6');
    const downloadAnchor = document.getElementById('bca-downloadAnchor6');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// BCA end




//BBA Start
// semester 1

document.getElementById('bba-downloadButton1').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown1');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bba-downloadLink1');
    const downloadAnchor = document.getElementById('bba-downloadAnchor1');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2019': 'https://drive.google.com/file/d/17qfwbUSdHlECKcscsLBI-xjHn2b_KCif/view?usp=sharing',
        '2020': 'https://drive.google.com/file/d/1skjqjl2XHVcpdrZcDeq8MRpW49rLSBq4/view?usp=sharing',
        '2021': 'https://drive.google.com/file/d/1yi_bjIZQEloBBLvQaeDockKFsRNenadO/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 2

document.getElementById('bba-downloadButton2').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown2');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bba-downloadLink2');
    const downloadAnchor = document.getElementById('bba-downloadAnchor2');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 3

document.getElementById('bba-downloadButton3').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown3');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bba-downloadLink3');
    const downloadAnchor = document.getElementById('bba-downloadAnchor3');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 4

document.getElementById('bba-downloadButton4').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown4');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bba-downloadLink4');
    const downloadAnchor = document.getElementById('bba-downloadAnchor4');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 5

document.getElementById('bba-downloadButton5').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown5');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bba-downloadLink5');
    const downloadAnchor = document.getElementById('bba-downloadAnchor5');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2021': 'https://drive.google.com/file/d/15ey016-rHdawKntAmoTiYkdxzmuDZHqh/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// semester 6

document.getElementById('bba-downloadButton6').addEventListener('click', function () {
    const yearDropdown = document.getElementById('bba-yearDropdown6');
    const selectedYear = yearDropdown.value;
    const downloadLink = document.getElementById('bba-downloadLink6');
    const downloadAnchor = document.getElementById('bba-downloadAnchor6');

    // Define the curriculum file URLs for each year
    const curriculumFiles = {
        // '2022-23': './papers/BCA.pdf',
        '2022': 'https://drive.google.com/file/d/1mcd1-AGYdQYFrd82fP-jN3G2EdYzjkpN/view?usp=sharing',
    };

    if (curriculumFiles[selectedYear]) {
        downloadAnchor.href = curriculumFiles[selectedYear];
        downloadLink.style.display = 'block';
    } else {
        downloadLink.style.display = 'none';
        alert('Will upload soon');
    }
});

// BBA end
