bags = [
    {
        img:"https://n.nordstrommedia.com/id/sr3/3f59f295-da57-453d-a373-44fbfa34ac1d.jpeg?h=365&w=240&dpr=2",
        title:"60mm Aviator Sunglasses",
        subtitle:"Salvatore Ferragamo",
        rate:"$",
        price:63.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/511c2fde-5c7a-4306-a2c0-abd0f07e27a0.jpeg?h=365&w=240&dpr=2",
        title:"54mm Butterfly Sunglasses",
        subtitle:"Prada",
        rate:"$",
        price:124.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/b6893c24-ff49-40f3-86c6-ecc77c8508df.jpeg?h=365&w=240&dpr=2",
        title:"59mm Polarized Navigator Sunglasses",
        subtitle:"Ray-Ban",
        rate:"$",
        price:76.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/c1bab57b-66d1-4033-8188-22cb2731a02b.jpeg?h=365&w=240&dpr=2",
        title:"Skylon Ace 69mm Rectangular Sunglasses",
        subtitle:"Nike",
        rate:"$",
        price:75.97,
    },
];
localStorage.setItem("bagsdata",JSON.stringify(bags));
var bagsarr=JSON.parse(localStorage.getItem("bagsdata"))||[];

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
  display (bags);
  console.log(bags)

     function addtocart(elem){
        bagsarr.push(elem);
       localStorage.setItem("cart",JSON.stringify(bagsarr));
       alert("Product Has been added successfully")
     }
 function pricesort(giftPacks){
   var selected=document.querySelector("#SortBy").value;
   console.log(selected)


   if(selected=="Lowtohigh"){
     console.log("hi")
     bagsarr.sort(function (a,b){
      return a.price - b.price;
    });
      console.log(bagsarr)
      display(bagsarr)
  }
    if(selected=="Hightolow"){
        bagsarr.sort(function (a,b){
      return b.price - a.price;
    });
    console.log(bagsarr)
    display(bagsarr)
  
   }
}