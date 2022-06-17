shoes = [
    {
        img:"https://n.nordstrommedia.com/id/sr3/28516edf-723e-4071-a0f0-9d6a1667f037.jpeg?h=365&w=240&dpr=2",
        title:"Nairi Braided Strappy Sandal (Women)",
        subtitle:"Dolce Vita",
        rate:"$",
        price:47.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/3be57b3f-a79a-47a8-a367-34428878f098.jpeg?h=365&w=240&dpr=2",
        title:"Gotie Laser Cut & Studded Sandal",
        subtitle:"DV by Dolce Vita",
        rate:"$",
        price:15.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/9c6a6f90-b116-4558-87d6-94f759401458.jpeg?h=365&w=240&dpr=2",
        title:"Revolution 6 Running Shoe (Women)",
        subtitle:"Nike",
        rate:"$",
        price:55.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"4.0",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/99ba86f5-ef98-4409-a6a6-84c27842c602.jpeg?h=365&w=240&dpr=2",
        title:"Latrice Wedge Mule Sandal",
        subtitle:"Charles by Charles David",
        rate:"$",
        price:31.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/106f3d68-4503-403c-9ae9-adc7f7a41e66.jpeg?h=365&w=240&dpr=2",
        title:"Court Vision Mid Sneaker (Men)",
        subtitle:"Nike",
        rate:"$",
        price:64.00,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/209b924e-38c5-4063-9b11-0c2fb6011727.jpeg?h=365&w=240&dpr=2",
        title:"Japan S Sneaker (Men)",
        subtitle:"ASICS",
        rate:"$",
        price:54.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/cb789ad4-f916-4c9a-9459-aeaf7447ec6e.jpeg?h=365&w=240&dpr=2",
        title:"GEL-Venture 8 Running Sneaker",
        subtitle:"ASICS®",
        rate:"$",
        price:49.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/228bc79d-b124-4651-aabd-4678c32c55a8.jpeg?h=365&w=240&dpr=2",
        title:"Adilette Comfort Footbed Slide Sandal (Men)",
        subtitle:"Adidas",
        rate:"$",
        price:20.97,
    },
];
localStorage.setItem("shoesdata",JSON.stringify(shoes));
var shoesarr=JSON.parse(localStorage.getItem("shoesdata"))||[];

var container=document.querySelector("#container");
  function display(data){
    container.innerHTML=null;
    data.forEach(function (elem){
      var box=document.createElement("div");
      box.addEventListener("click",function(){
        productdis(elem);
     })
      var avatar=document.createElement("img");
      
      var name=document.createElement("h3");
      var subname=document.createElement("h4");
      var ratingbox=document.createElement("div")
      ratingbox.classList.add("modal");
      var star=document.createElement("img");
      var ratings=document.createElement("p");
      var pricebox=document.createElement("div")
      var val=document.createElement("h5")
      var price=document.createElement("h5");

      pricebox.append(val,price)
      console.log(pricebox)
      ratingbox.append(star,ratings)
      var btn=document.createElement("button");
      btn.innerText="ADD TO CART"
       btn.addEventListener("click",function(){
        addtocart(elem);
     })
     avatar.setAttribute("src",elem.img);
     name.innerText=elem.title;
     subname.innerText=elem.subtitle;
     star.setAttribute("src",elem.img2);
     ratings.innerText=elem.rating;
     val.innerText=elem.rate;
     price.innerText=elem.price;
    
     box.append(avatar,name,subname,pricebox,btn);
     document.querySelector("#container").append(box);
    })
  }
  display (shoes);
  console.log(shoes)

     function addtocart(elem){
        shoesarr.push(elem);
       localStorage.setItem("cart",JSON.stringify(shoesarr));
       alert("Product Has been added successfully")
     }
 function pricesort(giftPacks){
   var selected=document.querySelector("#SortBy").value;
   console.log(selected)


   if(selected=="Lowtohigh"){
     console.log("hi")
     shoesarr.sort(function (a,b){
      return a.price - b.price;
    });
      console.log(shoesarr)
      display(shoesarr)
  }
    if(selected=="Hightolow"){
        shoesarr.sort(function (a,b){
      return b.price - a.price;
    });
    console.log(shoesarr)
    display(shoesarr)
  
   }
}