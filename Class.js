class Class{
    name;
    listStudents;
    constructor(nameClass) {
        this.name = nameClass;
        this.listStudents = []
        // this.listStudents = localStorage
    }
    // localStorage(){
    //     localStorage.setItem("data", JSON.stringify(this.listStudents));
    // }
    // restoreLocalStorage(){
    //     localStorage.getItem('data')
    // }
    add(newStudent){
        this.listStudents.push(newStudent);
    }
    update(index, newStudent){
        this.listStudents[index] = newStudent;
    }
    remove(index){
        this.listStudents.splice(index, 1);
    }
    findByName(name){
        return this.listStudents.filter( value => (value.name.toUpperCase().includes(name.toUpperCase())))
    }
}