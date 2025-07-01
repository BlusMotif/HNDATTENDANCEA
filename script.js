// Student data mapping
const studentData = {
  "04/2022/1300D": "MANFUL LOUIS OWUSU",
  "04/2022/1301D": "ADDAE DUKE KWABENA APPIAH",
  "04/2022/1302D": "LUKMAN YUNUS",
  "04/2022/1303D": "TWENEBOA RANSFORD KOFI",
  "04/2022/1304D": "DOGBE MANASE",
  "04/2022/1305D": "DENUTSUI OBED EDEM CUDZO",
  "04/2022/1306D": "SAMUEL ADZAH",
  "04/2022/1307D": "ANTWI SAMUEL BRONI",
  "04/2022/1308D": "AYEW EMMANUEL ASINOR",
  "04/2022/1309D": "ASARE-OBIRI FRANK",
  "04/2022/1310D": "BOAMAH DAVID OSEI",
  "04/2022/1311D": "AWUNOR BRIGHT KWESI",
  "04/2022/1312D": "BORKETEY CHRISTOPHER B.",
  "04/2022/1313D": "ESSUON DERRICK YAW",
  "04/2022/1314D": "DORVLO PETER",
  "04/2022/1315D": "GYAPONG SAMUEL KWAKU",
  "04/2022/1316D": "ANIM MICHAEL",
  "04/2022/1317D": "OWUSU SOLOMON AMPONSAH",
  "04/2022/1318D": "MENSAH ANANE DAVID",
  "04/2022/1319D": "OSEI OWUSU EMMANUEL",
  "04/2022/1320D": "LARKORTEY DESMOND",
  "04/2022/1321D": "AMOAH SAMUEL NYARKO",
  "04/2022/1322D": "LARBI ADUSEI AARON",
  "04/2022/1323D": "ARTHUR KWAKYE ISAAC AHENKORAH",
  "04/2022/1324D": "IKPE CHURCHILL",
  "04/2022/1325D": "DADZIE GODFRED ADJEI",
  "04/2022/1326D": "ABIAKU DANIEL SELORM",
  "04/2022/1327D": "SAMUEL BOAFO ENNIN",
  "04/2022/1328D": "OFOSU GILBERT",
  "04/2022/1329D": "BONNAH SAMUEL KWAKYE",
  "04/2022/1330D": "ISHMAEL AKUTEYE KAAJAI",
  "04/2022/1331D": "STELLA OKAISTICE GYEKYE FRIMPONG",
  "04/2022/1332D": "CASTRO NKANSAH",
  "04/2022/1333D": "APPIAH STELLA",
  "04/2022/1334D": "DANSO ROBERT OPOKU",
  "04/2022/1336D": "DANSO ALEXANDER ASEIDU",
  "04/2022/1337D": "RICHMOND DAMPTEY BOADU",
  "04/2022/1338D": "OPOKU DERRICK DANSO",
  "04/2022/1339D": "YAOTSE JULIUS",
  "04/2022/1340D": "SELASI AVI KWABLA",
  "04/2022/1341D": "BOATENG DESMOND AMON-OPOKU",
  "04/2022/1342D": "TETTEY-ENYO DONATELLO ABRAHAM AKUAFO",
  "04/2022/1344D": "OSEI HENRY",
  "04/2022/1345D": "AWU ENOCH",
  "04/2022/1346D": "LOUIS SHADRACK ASSUMANG",
  "04/2022/1347D": "MARTEIFIO EDWARD",
  "04/2022/1348D": "ASABLI LORD KWESI",
  "04/2022/1349D": "APPIAGYEI ASIEDU",
  "04/2022/1350D": "ADDO KENNETH",
  "04/2022/1351D": "ANANG OTTO AMARTEI",
  "04/2022/1353D": "AWULIKIE-KUMAH JONATHAN",
  "04/2022/1354D": "HOLLA ALEX",
  "04/2022/1355D": "DENYO SANDRA",
  "04/2022/1356D": "LAWER COLLINS",
  "04/2022/1357D": "WORLANYO GRAHAM PARKER",
  "04/2022/1358D": "BAIDOO PRINCE",
  "04/2022/1359D": "MENSAH ADDRY DERRICK",
  "04/2022/1360D": "ANOKWAH RICHARD AYENZU",
  "04/2022/1361D": "OPARE EMMANUEL AKOTO",
  "04/2022/1362D": "DZISENU MENSAH KOFI",
  "04/2022/1363D": "OWUSU PRINCE BOATENG",
  "04/2022/1365D": "AKOSAH GABRIEL OHENE",
  "04/2022/1366D": "ANAABA ALBERT",
  "04/2022/1367D": "WANTEBA GABRIEL JATO",
  "04/2022/1369D": "AGYAPONG RISS",
  "04/2022/1370D": "BAIDOO PRINCE",
  "04/2022/1371D": "WONTUMI SAMUEL JUNIOR",
  "04/2022/1372D": "TETTEH DESMOND AGBADZI",
  "04/2022/1374D": "AGBINKU EMMANUEL MAKAFUI",
  "04/2022/1375D": "DUGBATER SAMUEL TAWIAH",
  "04/2022/1376D": "AIDO0 JOSEPH AGYAPONG",
  "04/2022/1377D": "ASARE HENRIETTA BOATEMA",
  "04/2022/1379D": "AYEBENG GAD ANDERSON",
  "04/2022/1380D": "TEI-LABI LAWRENCE NUERTEY",
  "04/2022/1381D": "ARKU-DZIWORNU MARY ELINAM",
  "04/2022/1382D": "AMUZU EUGENE MAWUTOR",
  "04/2022/1383D": "OFOEDA DESMOND KWESI",
  "04/2022/1385D": "ANNOR-WIAFE SETH",
  "04/2022/1386D": "OPPONG MAXWELL",
  "04/2022/1387D": "EMMANUEL SASU ASARE",
  "04/2022/1388D": "ATSAME YONA",
  "04/2022/1389D": "YAHAYA ISHAWU",
  "04/2022/1390D": "AGBODJA MANTEY DANIEL",
  "04/2022/1391D": "ESSAH RICHARD",
  "04/2022/1392D": "DONKOR SAMUEL KYEREMANTENG",
  "04/2022/1394D": "KWETEY JOHN",
  "04/2022/1395D": "DWAMENA-MANU AARON",
  "04/2022/1396D": "BRIGHT DOKLI KWAME",
  "04/2022/1398D": "ADJOKATSE CLIFFORD LOMOTEY",
  "04/2022/1399D": "ZORH EMMANUEL NARTEY",
  "04/2022/1400D": "OFORI DANIEL AYESU",
  "04/2022/1402D": "EFFAH SAMUEL MARFO",
  "04/2022/1403D": "AKOTUAH SAMUEL OPARE",
  "04/2022/1404D": "AMPONSAH DARKO KELVIN",
  "04/2022/1406D": "JESSICA NATTER MAULD TSIANKIE NYAMEDI",
  "04/2022/1407D": "APPIAH ELAINE GYEBI",
  "04/2022/1408D": "EBIASAH PRINCE",
  "04/2022/1409D": "OSEI ALEX OBUOBY",
  "04/2022/1411D": "SAMSON ADDO KWASI",
  "04/2022/1412D": "SHOWERS KUNU",
  "04/2022/1413D": "KYEREMAH PRINCE",
  "04/2022/1414D": "BASHIRU KALANI TAYLOR",
  "04/2022/1416D": "ANIM OFORI DERRICK",
  "04/2022/1417D": "EDWIN LARTEY DJORSU",
  "04/2022/1418D": "HARRISON KPOGO",
  "04/2022/1419D": "OTUMI PRINCE NANA YAW",
  "04/2022/1420D": "AGBONYITOR ELVIS",
  "04/2022/1421D": "ACQUAH EGINISIOUS OFFEI SAMUEL",
  "04/2022/1423D": "CRABBE EBENEZER",
  "04/2022/1424D": "ISSA RAMATU IBRAHIM",
  "04/2022/1425D": "SEKYERE EDWARD ASUBOA",
  "04/2022/1426D": "BOASIAKO ASANTE-ANTWI MANDELA",
  "04/2022/1427D": "EGLOH FELIX KWAKU",
  "04/2022/1428D": "OFORI PRINCE",
  "04/2022/1429D": "SULEMAN ADIZATU",
  "04/2022/1430D": "OKLU RICH-WELL",
  "04/2022/1432D": "ADAMS FARHAN GHANDHI",
  "04/2022/1433D": "OSBORN AKOUTA JASON",
  "04/2022/1435D": "GODFRED ARHIN",
  "04/2022/1436D": "KWAKU APPEAGYEI",
  "04/2022/1437D": "ATTAKORAH ALEXANDER KOFI",
  "04/2022/1438D": "GODWIN AHIABLE YAWO",
  "04/2022/1439D": "OSAFO STEPHEN",
  "04/2022/1440D": "KONO PRINCE",
  "04/2022/1441D": "EBENEZER OPPONG",
  "04/2022/1442D": "AHENKORAH CHRISTIAN",
  "04/2022/1443D": "ARHIN PHILIP KOJO ARKOH",
  "04/2022/1444D": "ESHUN EMMANUEL",
  "04/2022/1446D": "LARBI EMMANUEL",
  "04/2022/1449D": "DOGBE DANIEL",
  "04/2022/1450D": "KWEITSU HAFSATU ABDULLAI",
  "04/2022/1452D": "MENSAH JOSEPH",
  "04/2022/1453D": "GYAMFI JOANA",
  "04/2022/1454D": "MOHAMMED HAJARA",
  "04/2022/1455D": "AMOAFO KINGSLEY DIAWUO KWABENA",
  "04/2022/1456D": "OFORI-AYESU ANITA OFORIWA",
  "04/2022/1457D": "PIOUS TAKYI",
  "04/2022/1459D": "DENNIS AKWETEY",
  "04/2022/1460D": "KONDO SIMON",
  "04/2022/1461D": "SEGLAH PETER",
  "04/2022/1463D": "ANDREWS DELA",
  "04/2022/1466D": "OSABUTEY FRANK SELASI",
  "04/2022/1467D": "ABUBAKAR RASHIDA ANABILA",
  "04/2022/1468D": "BOATENG PRINCE KWASI",
  "04/2022/1469D": "AGBOADA BENJAMIN EYRAM",
  "04/2022/1470D": "AGBENYEGAH EDMOND",
  "04/2022/1471D": "DWUMOH EBENEZER ACHEAMPONG",
  "04/2022/1473D": "ADDAE ANDREWS",
  "04/2022/1474D": "EZEKIAL AZIATEY",
  "04/2022/1475D": "AVORGAH KINGSLEY",
  "04/2022/1476D": "ODOI GODFRED"
};
// Initialize attendance records and course title from localStorage
let attendanceRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
let currentCourseTitle = localStorage.getItem('currentCourseTitle') || '';
let currentWeek = localStorage.getItem('currentWeek') || '';
const attendanceForm = document.getElementById('attendance-form');

// Add event listener for index number input
document.getElementById('index-number').addEventListener('input', function(e) {
    e.target.value = e.target.value.toUpperCase();
    const indexNumber = e.target.value.trim();
    const studentNameInput = document.getElementById('student-name');

    if (studentData[indexNumber]) {
        studentNameInput.value = studentData[indexNumber];
    } else {
        studentNameInput.value = '';
    }
});

// Set course title and week if they exist and lock them
if (currentCourseTitle) {
    document.getElementById('course-title').value = currentCourseTitle;
    document.getElementById('course-title').disabled = true;
    document.getElementById('week-number').value = currentWeek;
    document.getElementById('week-number').disabled = true;
} else {
    document.getElementById('course-title').disabled = false;
    document.getElementById('week-number').disabled = false;
}
const recordsList = document.getElementById('records');
const exportBtn = document.getElementById('export-btn');
const clearBtn = document.getElementById('clear-btn');
const saveBtn = document.getElementById('save-btn');
const searchInput = document.getElementById('search-input');

// Set default date to today
document.getElementById('attendance-date').valueAsDate = new Date();

// Show notification
function showToast(message, type = 'success') {
    swal({
        title: type === 'success' ? "Success!" : "Error!",
        text: message,
        icon: type,
        buttons: false,
        timer: 2500,
        className: "sweet-alert-custom",
        closeOnClickOutside: true
    });
}

// Update table with records
function updateTable(records = attendanceRecords) {
    recordsList.innerHTML = '';
    records.forEach((record, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>
                <div style="font-weight: bold">${record.indexNumber}</div>
                <div style="color: #666; font-size: 0.9em">${record.studentName}</div>
            </td>
            <td>${new Date(record.attendanceDate).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'})}</td>
            <td><span class="status-badge present">Present</span></td>
            <td>
                <button class="edit-btn" onclick="editRecord(${index})">✎</button>
                <button class="delete-btn" onclick="deleteRecord(${index})">×</button>
            </td>
        `;
        recordsList.appendChild(tr);
    });
}

// Handle form submission
attendanceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('student-name').value.trim();
    const indexNumber = document.getElementById('index-number').value.trim();
    const attendanceDate = document.getElementById('attendance-date').value;
    const originalName = studentData[indexNumber];
    const isEdited = originalName && originalName !== studentName;

    // Check for duplicates
    const isDuplicate = attendanceRecords.some(record => 
        record.indexNumber === indexNumber && 
        record.attendanceDate === attendanceDate
    );

    if (isDuplicate) {
        showToast("This student has already marked attendance for this date.", "error");
        return;
    }

    // Add new record
    const courseTitle = document.getElementById('course-title').value.trim();
    const weekNumber = document.getElementById('week-number').value.trim();
    currentCourseTitle = courseTitle;
    currentWeek = weekNumber;
    localStorage.setItem('currentCourseTitle', courseTitle);
    localStorage.setItem('currentWeek', weekNumber);
    attendanceRecords.push({ 
        studentName, 
        indexNumber, 
        attendanceDate, 
        courseTitle, 
        weekNumber,
        isEdited,
        originalName: isEdited ? originalName : undefined
    });

    // Hide course title and week fields after first entry
    document.getElementById('course-title').parentElement.parentElement.style.display = 'none';

    updateTable();
    swal("Congrats!", "Attendance marked successfully!", "success");
    // Reset form but keep course title
    document.getElementById('student-name').value = '';
    document.getElementById('index-number').value = '04/2022/';
    document.getElementById('attendance-date').valueAsDate = new Date();
    saveToLocalStorage();
});

// Search functionality
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecords = attendanceRecords.filter(record => 
        record.studentName.toLowerCase().includes(searchTerm) ||
        record.indexNumber.includes(searchTerm)
    );
    updateTable(filteredRecords);
});

// Delete record
function deleteRecord(index) {
    if (confirm('Are you sure you want to delete this record?')) {
        attendanceRecords.splice(index, 1);
        updateTable();
        saveToLocalStorage();
        showToast("Record deleted successfully!");
    }
}

// Edit record
function editRecord(index) {
    const record = attendanceRecords[index];
    document.getElementById('student-name').value = record.studentName;
    document.getElementById('index-number').value = record.indexNumber;
    document.getElementById('attendance-date').value = record.attendanceDate;
    document.getElementById('course-title').value = record.courseTitle;

    attendanceRecords.splice(index, 1);
    updateTable();
    saveToLocalStorage();
    showToast("Edit the record and submit to update");
}

// Clear all records
clearBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to clear all records?')) {
        attendanceRecords = [];
        currentCourseTitle = '';
        currentWeek = '';
        localStorage.removeItem('currentCourseTitle');
        localStorage.removeItem('currentWeek');
        document.getElementById('course-title').value = '';
        document.getElementById('week-number').value = '';
        document.getElementById('course-title').disabled = false;
        document.getElementById('week-number').disabled = false;
        document.getElementById('course-title').parentElement.parentElement.style.display = 'block';
        updateTable();
        saveToLocalStorage();
        showToast("All records cleared!");
    }
});

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords));
}

saveBtn.addEventListener('click', function() {
    saveToLocalStorage();
    showToast("Data saved successfully!");
});

// Export functionality
exportBtn.addEventListener('click', function() {
    // Get all students from studentData
    const today = new Date().toISOString().split('T')[0];
    const allStudents = Object.entries(studentData).map(([indexNumber, name]) => ({
        indexNumber,
        studentName: name,
        status: 'Absent',
        attendanceDate: today
    }));

    // Mark present students and update their dates
    const presentStudents = new Set();
    attendanceRecords.forEach(record => {
        presentStudents.add(record.indexNumber);
        const student = allStudents.find(s => s.indexNumber === record.indexNumber);
        if (student) {
            student.status = 'Present';
            student.attendanceDate = record.attendanceDate;
        }
    });

    // Sort students (Present first, then Absent)
    allStudents.sort((a, b) => {
        if (a.status === b.status) return 0;
        return a.status === 'Present' ? -1 : 1;
    });

    // Calculate totals
    const totalPresent = allStudents.filter(s => s.status === 'Present').length;
    const totalAbsent = allStudents.filter(s => s.status === 'Absent').length;

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
        <html>
            <head>
                <title>Attendance Records</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { 
                        border: 1px solid #ddd; 
                        padding: 8px; 
                        text-align: left;
                        font-size: 14px;
                        line-height: 1.4;
                    }
                    th { 
                        background-color: #f2f2f2;
                        font-weight: bold;
                    }
                    td { white-space: nowrap; }
                    .date-column { width: 120px; }
                    h1 { text-align: center; color: #007bff; }
                    .present, .absent { 
                        padding: 5px 10px;
                        border-radius: 15px;
                        color: white;
                        font-weight: 700;
                        display: inline-block;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .present { background-color: #28a745; }
                    .absent { background-color: #dc3545; }
                </style>
            </head>
            <body>
                <div style="text-align: center; margin-bottom: 20px;">
                    <img src="KTU LOGO.PNG" alt="School Logo" style="max-width: 150px;">
                    <h1 style="margin: 15px 0; font-size: 24px;">KOFORIDUA TECHNICAL UNIVERSITY</h1>
                    <h2 style="margin: 10px 0; font-size: 20px;">Faculty of Applied Science and Technology</h2>
                    <h3 style="margin: 10px 0; font-size: 18px;">Department of Computer Science</h3>
                    <h4 style="margin: 10px 0; font-size: 16px;">HND NETWORKING B (300)</h4>
                    <div style="margin: 20px 0; padding: 10px; border: 2px solid #333; display: inline-block;">
                        <h2 style="margin: 0;">ATTENDANCE SHEET</h2>
                    </div>
                </div>
                <div style="margin: 20px 0; font-size: 16px;">
                    <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; margin-bottom: 10px;">
                        <strong>Course Title:</strong>
                        <span>${attendanceRecords[0]?.courseTitle || 'N/A'}</span>
                        <strong>Week:</strong>
                        <span>${attendanceRecords[0]?.weekNumber || 'N/A'}</span>
                        <strong>Date:</strong>
                        <span>${new Date().toLocaleDateString('en-GB')}</span>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th style="font-size: 14px; font-weight: bold;">#</th>
                            <th style="font-size: 14px; font-weight: bold;">Full Name</th>
                            <th style="font-size: 14px; font-weight: bold;">Index Num</th>
                            <th style="font-size: 14px; font-weight: bold;">Date</th>
                            <th style="font-size: 14px; font-weight: bold;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${allStudents.map((student, index) => `
                            <tr>
                                <td style="font-size: 14px;">${index + 1}</td>
                                <td style="font-size: 14px;">${student.studentName}${student.isEdited ? 
                                    ` <span style="color: #dc3545;">(Edited from: ${student.originalName})</span>` 
                                    : ''}</td>
                                <td style="font-size: 14px;">${student.indexNumber}</td>
                                <td style="font-size: 14px;">${student.status === 'Present' ? 
                                    new Date(attendanceRecords.find(r => r.indexNumber === student.indexNumber)?.attendanceDate).toLocaleDateString('en-GB')
                                    : new Date().toLocaleDateString('en-GB')}</td>
                                <td><span class="${student.status.toLowerCase()}">${student.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <div style="margin-top: 30px; border-top: 1px solid #333; padding-top: 20px;">
                    <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: bold;">
                        <div>
                            <p>Total Students Present: ${totalPresent}</p>
                            <p>Total Students Absent: ${totalAbsent}</p>
                            <p>Total Class Size: ${totalPresent + totalAbsent}</p>
                        </div>
                        <div style="text-align: right;">
                            <p style="margin-bottom: 50px;">___________________</p>
                            <p>Course Lecturer's Signature</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
});

// Initial table update
updateTable();

// Prevent right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Prevent keyboard shortcuts and dev tools
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (

        e.keyCode === 73 || // I key
        e.keyCode === 74 || // J key
        e.keyCode === 75 || // K key
        e.keyCode === 83 || // S key
        e.keyCode === 85 || // U key
        e.keyCode === 86    // V key
    )) {
        e.preventDefault();
    }
    // Prevent F12
    if(e.keyCode === 123) {
        e.preventDefault();
    }
});

// Disable source viewing
document.addEventListener('keypress', function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
    }
});
