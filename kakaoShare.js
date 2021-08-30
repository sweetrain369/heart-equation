var sharebutton=document.getElementsByClassName("favorite");
$('favorite').on("clcik", async()=>{
    console.log('!!!!')
    try{
        await navigator.share({
            title:'하이',
            text:'사랑해!',
            url:'',   
        });
        console.log('공유 성공')

    }
    catch(e){
        console.log(e);
    }
});