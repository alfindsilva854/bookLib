function addBook() {
    bname=b1.value
    aname=a1.value
    dname=d1.value
    if (bname,aname,dname=="") {
        alert("fill in the blanks")
    }
    else if(bname in localStorage) {
        alert("already exist")
        
    }
    else{
        book={bname,aname,dname}
        localStorage.setItem(bname,JSON.stringify(book))
        alert("your book is added")
        window.location='search.html'
    }
}
function findBook(){

    bookname1=bn1.value
    if (bookname1 in localStorage) {


        selectedBook=JSON.parse(localStorage.getItem(bookname1))

        result.innerHTML=`
        <h3 class="text-white">Book Name    : ${selectedBook.bname}</h3>
        <h3 class="text-white">Author Name  : ${selectedBook.aname}</h3>
        <h3 class="text-white">Description  : ${selectedBook.dname}</h3>   `     
     
    }
    else{

        result.innerHTML=`<h3 class="text-dark">Book not found</h3> `
    }
}

