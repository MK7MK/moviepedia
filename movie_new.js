$document.ready(()=>{
    $('search').on('submit',(e)=>
    {
        let t=$('search').val();
        console.log(t);
    })
}
)

let a=document.getElementById('search').nodeValue;
document.write(a);