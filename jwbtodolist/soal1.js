// task minggu ke 4: membuat simulasi todo list

// 1.⁠ ⁠buat variable untuk menyimpan todo list nntinya, biarkan array kosong pada awal
let todolist = []

// 2.⁠ ⁠buat fitur tambah todo list, format todo list harus mengandung, {task:string,status:boolean}
function tambahtodolist(task,status){
    const list = {
        todo: task,
        status: status 
    }
    if(list){ 
        todolist.push(list)
        console.log("to do berhasil ditambahkan")
    }else{
        console.log("to do tidak ditambahkan")
    }
}
tambahtodolist("kerjain dashboard amtiss", false)
tambahtodolist("kerjain tugas back end", true)
tambahtodolist("beberes kamar", false)
tambahtodolist("cek kecambah", true)


// 3.⁠ ⁠buat fitur menampilkan list todo
function tampilkantodolist(){  
    console.table(todolist) 
}
tampilkantodolist()

// 4.⁠ ⁠buat fitur menampilkan list todo berdasarkan status
function tampilkantodobystatus(status){
    const todo = todolist.filter((todolist) => todolist.status === status)
    console.table(todo)
}
tampilkantodobystatus(true)

// 5.⁠ ⁠buat fitur update status todo
function updatestatustodo(index,status){
    if(todolist[index]){
        todolist[index].status = status
        console.log("status berhasil diupdate")
    }else{
        console.log("status tidak berhasil diupdate")
    }
}
updatestatustodo(0,true)
updatestatustodo(2,true)

// gausah bikin function lagi langsung panggil ulang aja ini
tampilkantodolist()


// 6.⁠ ⁠buat fitur hapus todo
function hapustodolist(index){
    todolist.splice(index,1)
    console.log("list berhasil dihapus index",index)   
}
hapustodolist(1)
hapustodolist(0)
tampilkantodolist()

// 7.⁠ ⁠note:tampilkan list todo diestiap function tambah,hapus,update, 
// clue: panggil ulang function nomor 3 di setiap function tambah,hapus,update
