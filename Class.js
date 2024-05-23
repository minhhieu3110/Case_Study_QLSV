class Class{
    name;
    listStudents;
    constructor(nameClass) {
        this.name = nameClass;
        let storageData = localStorage.getItem('data');
        this.listStudents = storageData ? JSON.parse(storageData) : [];

    }

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