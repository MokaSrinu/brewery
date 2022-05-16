async function fetchbrewery(){
    try {
        var value=document.querySelector("#searchinput").value;
        let url=`https://api.openbrewerydb.org/breweries/search?query=${value}`
        let response=await fetch(url);
        let data=await response.json();
        displaydata(data);
    } catch (error) {
        
    }
}




function displaydata(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach((ele)=>{
        let {name,brewery_type,city,state,id}=ele;
        let row=document.createElement("tr");
        let nameEle=document.createElement("td");
        nameEle.innerText=name;
        let brewerytypeEle=document.createElement("td");
        brewerytypeEle.innerText=brewery_type;
        let cityEle=document.createElement("td");
        cityEle.innerText=city;
        let stateEle=document.createElement("td");
        stateEle.innerText=state;
        let buttonele=document.createElement("td");
        let button=document.createElement("button");
        button.innerText="MORE DETAILS"
        button.addEventListener("click",()=>{
            localStorage.clear();
            localStorage.setItem("breweryid",id);
            window.location.href="./individualpage.html"
        })
        buttonele.append(button);
        row.append(nameEle,brewerytypeEle,cityEle,stateEle,buttonele);
        document.querySelector("tbody").append(row);
    })
    
}
let  timerid;
function debounce(func,delay){
   if(timerid){
       clearTimeout(timerid);
   }
   timerid=setTimeout(()=>{
       func();
   },delay);
}