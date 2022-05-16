async function fetchbrewery(){
    try {
        var value=localStorage.getItem("breweryid");
        let url=`https://api.openbrewerydb.org/breweries/${value}`
        let response=await fetch(url);
        let data=await response.json();
        displaydata(data);
    } catch (error) {
        
    }
}
fetchbrewery();



function displaydata(data){
    document.querySelector("#container").innerHTML="";
    let{id,name,brewery_type,street,city,state,country_province,postal_code,country,longitude,latitude,phone,website_url,updated_at,created_at}=data;
    let card=document.createElement("div");
    let idele=document.createElement("p");
    idele.innerText=`Id:${id}`;
    let nameele=document.createElement("p");
    nameele.innerText=`Name:${name}`;
    let brewery_typeele=document.createElement("p");
    brewery_typeele.innerText=`brewery_type:${brewery_type}`;
    let streetele=document.createElement("p");
    streetele.innerText=`street:${street}`;
    let cityele=document.createElement("p");
    cityele.innerText=`city:${city}`;
    let stateele=document.createElement("p");
    stateele.innerText=`state:${state}`;
    let country_provinceele=document.createElement("p");
    country_provinceele.innerText=`country_province:${country_province}`;
    let postal_codeele=document.createElement("p");
    postal_codeele.innerText=`postal_code:${postal_code}`;
    let countryele=document.createElement("p");
    countryele.innerText=`country:${country}`;
    let longitudeele=document.createElement("p");
    longitudeele.innerText=`longitude:${longitude}`;
    let latitudeele=document.createElement("p");
    latitudeele.innerText=`latitude:${latitude}`;
    let phoneele=document.createElement("p");
    phoneele.innerText=`phone:${phone}`;
    let website_urlele=document.createElement("p");
    website_urlele.innerText=`website_url:${website_url}`;
    let updated_atele=document.createElement("p");
    updated_atele.innerText=`updated_at:${updated_at}`;
    let created_atele=document.createElement("p");
    created_atele.innerText=`created_at:${created_at}`;
    card.append(idele,nameele,brewery_typeele,streetele,cityele,stateele,country_provinceele,postal_codeele,countryele,longitudeele,latitudeele,phoneele,website_urlele,updated_atele,created_atele);
    document.querySelector("#container").append(card);
}