kids = [
    {
        img:"https://n.nordstrommedia.com/id/sr3/e2877812-77c8-4d61-991d-9fe57594ecd4.jpeg?h=365&w=240&dpr=2",
        title:"Colorblock T-Shirt & Shorts Set (Baby Girls)",
        subtitle:"Petit Lem",
        rate:"$",
        price:71.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/17579e98-53cf-44b6-bb38-312e4f9f35cd.jpeg?h=365&w=240&dpr=2",
        title:"Kids' Z by Zella Girl High Waist Printed Pocket Leggings (Little Girls & Big Girls)",
        subtitle:"Z by Zella Girl",
        rate:"$",
        price:14.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/d386c4f5-46a9-493d-8cbc-32df51446954.jpeg?h=365&w=240&dpr=2",
        title:"Kids' Z by Zella Girl Freedom Running Shorts (Big Girls)",
        subtitle:"Z by Zella Girl",
        rate:"$",
        price:54.57,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/241ad39f-4e4d-4fe8-a290-4a92aeebce7c.jpeg?h=365&w=240&dpr=2",
        title:"Floral Print Pajama and Sock Set (Baby)",
        subtitle:"SLEEP ON IT",
        rate:"$",
        price:10.17,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/df9759fd-cf1f-4d73-9f40-fcaeb44c09de.jpeg?h=365&w=240&dpr=2",
        title:"Kids' Dri-FIT Graphic Tee (Big Boy)",
        subtitle:"Nike",
        rate:"$",
        price:88.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/7c16d006-4a52-4f44-b704-23bd8a11e15b.jpeg?h=365&w=240&dpr=2",
        title:"Kids' Heathered Crew Neck T-Shirt (Toddler & Little Boys)",
        subtitle:"NORDSTROM RACK",
        rate:"$",
        price:4.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/d6d3782d-387e-4eb5-a9fc-9246acb6a6ea.jpeg?h=365&w=240&dpr=2",
        title:"Solid Board Shorts (Big Boy)",
        subtitle:"BEACH BROS",
        rate:"$",
        price:22.56,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/cebd432a-ba7e-48c2-bb85-8be51313231f.jpeg?h=365&w=240&dpr=2",
        title:"Amplify Tee & Knit Shorts Set (Little Boy)",
        subtitle:"Nike",
        rate:"$",
        price:71.00,
    },
];
localStorage.setItem("kidsdata",JSON.stringify(kids));
var kidsarr=JSON.parse(localStorage.getItem("kidsdata"))||[];

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
  display (kids);
  console.log(kids)

     function addtocart(elem){
        kidsarr.push(elem);
       localStorage.setItem("cart",JSON.stringify(kidsarr));
       alert("Product Has been added successfully")
     }
 function pricesort(giftPacks){
   var selected=document.querySelector("#SortBy").value;
   console.log(selected)


   if(selected=="Lowtohigh"){
     console.log("hi")
     kidsarr.sort(function (a,b){
      return a.price - b.price;
    });
      console.log(kidsarr)
      display(kidsarr)
  }
    if(selected=="Hightolow"){
        kidsarr.sort(function (a,b){
      return b.price - a.price;
    });
    console.log(kidsarr)
    display(kidsarr)
  
   }
}