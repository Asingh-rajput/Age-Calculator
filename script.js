const form = document.querySelector('form')
const resultDiv = document.getElementById('result')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const date=document.getElementById('date').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    if(date<1||date>31 ||month<1 || month>12 || year<1900 || year>9999){
        alert('Please enter valid date');
    }
    else{
        const birthday=new Date(year, month-1,date);
        const today=new Date();
        let diff = today-birthday;
        const years=Math.floor(diff/(1000*60*60*24*365));
        diff-=years*(1000*60*60*24*365);
        const months=Math.floor(diff/(1000*60*60*24*30));
        diff-=months*(1000*60*60*24*30);
        const days=Math.floor(diff/(1000*60*60*24));
        resultDiv.innerHTML='Your Age is ' + years +'Years ' + months +' Months '+ days+ ' Days'  
    }
})