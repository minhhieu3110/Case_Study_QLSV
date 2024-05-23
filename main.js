let myClass = new Class("Class C03")
let listStudent = myClass.listStudents

function showListStudent() {
    document.getElementById("display").innerHTML = `
    <h3>Danh Sách Sinh Viên</h3>
    <table border="1px">
        <tr>
            <th>STT</th>
            <th>TÊN</th>
            <th>TOÁN</th>
            <th>VẬT LÝ</th>
            <th>ANH VĂN</th>
            <th>ĐIỂM TRUNG BÌNH</th>
            <th>HỌC LỰC</th> 
            <th colspan="2">Action</th>   
        </tr>
        <tbody id="listStudents" style="text-align: center"></tbody>
    </table>`;
    let str = ``
    for (let i = 0; i < listStudent.length; i++) {
        str += `<tr>
                    <td>${i+1}</td>
                    <td>${listStudent[i].name}</td>
                    <td>${listStudent[i].mathScore}</td>
                    <td>${listStudent[i].physicalScore}</td>
                    <td>${listStudent[i].englishScore}</td>
                    <td>${listStudent[i].averageScore}</td>
                    <td>${listStudent[i].rank}</td>
                    <td><button onclick="edit(${i})">EDIT</button></td>
                    <td><button onclick="deleteStudent(${i})">DELETE</button></td>
                </tr>`
    }
    document.getElementById('listStudents').innerHTML = str;
}


function formAdd() {
    document.getElementById('display').innerHTML = `
    <input id="addId" placeholder="Nhập Id">
    <input id="addName" placeholder="Nhập tên">
    <input id="addMath" placeholder="Nhập điểm toán">
    <input id="addPhysical" placeholder="Nhập điểm vật lý">
    <input id="addEnglish" placeholder="Nhập điểm anh văn">
    <button onclick="addStudent()">Thêm</button>
    `
}

function addStudent() {
    let id = document.getElementById('addId').value
    let name = document.getElementById('addName').value
    let math = parseFloat(document.getElementById('addMath').value);
    let physical = parseFloat(document.getElementById('addPhysical').value)
    let english = parseFloat(document.getElementById('addEnglish').value)
    let average = ((math + physical + english) / 3).toFixed(1)
    let rank = ""
    if (average < 5) {
        rank = "Yếu"
    } else if (average >= 5 && average < 6.5) {
        rank = "Trung Bình"
    } else if (average >= 6.5 && average < 8) {
        rank = "Khá"
    } else if (average >= 8) {
        rank = "Giỏi"
    }
    let newStudent = new Student(id, name, math, physical, english, average, rank)
    myClass.add(newStudent)
    console.log(newStudent)
    saveLocalStorage()
    showListStudent()
}

function edit(index) {
    document.getElementById('display').innerHTML = `
    <input id="editId" placeholder="Nhập Id" readonly value="${listStudent[index].id}">
    <input id="editName" placeholder="Nhập tên" value="${listStudent[index].name}">
    <input id="editMath" placeholder="Nhập điểm toán" value="${listStudent[index].mathScore}">
    <input id="editPhysical" placeholder="Nhập điểm vật lý" value="${listStudent[index].physicalScore}">
    <input id="editEnglish" placeholder="Nhập điểm anh văn" value="${listStudent[index].englishScore}">
    <button onclick="update(${index})">Cập Nhập</button>
    `
}

function update(index) {
    let id = document.getElementById('editId').value
    let name = document.getElementById('editName').value
    let updateMath = parseFloat(document.getElementById('editMath').value);
    let updatePhysical = parseFloat(document.getElementById('editPhysical').value)
    let updateEnglish = parseFloat(document.getElementById('editEnglish').value)
    let updateAverage = ((updateMath + updatePhysical + updateEnglish) / 3).toFixed(1)
    let updateRank = ''
    if (updateAverage < 5) {
        updateRank = "Yếu"
    } else if (updateAverage >= 5 && updateAverage < 6.5) {
        updateRank = "Trung Bình"
    } else if (updateAverage >= 6.5 && updateAverage < 8) {
        updateRank = "Khá"
    } else if (updateAverage >= 8) {
        updateRank = "Giỏi"
    }
    let updateStudent = new Student(id, name, updateMath, updatePhysical, updateEnglish, updateAverage, updateRank)
    myClass.update(index, updateStudent)
    saveLocalStorage()
    showListStudent()
}

function deleteStudent(index) {
    let ok = confirm("Bạn có chắc chắn xóa không ???")
    if (ok) {
        myClass.remove(index)
        saveLocalStorage()
        showListStudent()
    } else {
        alert("THao tác xóa đã hủy")
    }
}

function searchByName() {
    let name = document.getElementById('searchName').value
    let foundName = myClass.findByName(name)
    if (foundName.length > 0){
        let str = ``
        document.getElementById('display').innerHTML = `
        <h3>Kết Quả Tìn Kiếm</h3><br>
        <table border="1px">
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Toán</th>
                <th>Vật Lý</th>
                <th>Anh Văn</th>
                <th>Điểm Trung Bình</th>
                <th>Học Lực</th>
            </tr>
            <tbody id="findStu" style="text-align: center">
                
            </tbody>
        </table>`
        for (let i = 0; i < foundName.length; i++) {
            str += `
            <tr>
                <td>${foundName[i].id}</td>
                <td>${foundName[i].name}</td>
                <td>${foundName[i].mathScore}</td>
                <td>${foundName[i].physicalScore}</td>
                <td>${foundName[i].englishScore}</td>
                <td>${foundName[i].averageScore}</td>
                <td>${foundName[i].rank}</td>
            </tr>`
        }
        console.log(foundName)
        document.getElementById('findStu').innerHTML = str;
    } else {
        alert("Không tìm thấy sinh viên có tên " + name)
    }

}
function sortAlphabet(){

    listStudent = myClass.sort();
    showListStudent()
}
function saveLocalStorage(){
    listStudent = myClass.listStudents
    localStorage.setItem("data", JSON.stringify(listStudent));
}
function restoreLocalStorage(){
    if(localStorage.getItem('data')){
        listStudent = JSON.parse(localStorage.getItem('data'));
        showListStudent()
    }
}
window.onload = function() {
    restoreLocalStorage()
}
showListStudent()