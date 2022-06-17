women = [
    {
        img:"https://n.nordstrommedia.com/id/sr3/aef6939b-5c6a-44b7-8189-30fbe1e29fa0.jpeg?h=365&w=240&dpr=2",
        title:"Double V Knit Tank Top (Regular & Petite)",
        subtitle:"Caslon®",
        rate:"$",
        price:7.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/426a8536-7ff1-4b93-99e5-84ac02e616d7.jpeg?h=365&w=240&dpr=2",
        title:"Ruched Shirtdress",
        subtitle:"ASTR the Label",
        rate:"$",
        price:44.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/777583e7-508d-408f-bdbd-5313c023a91e.jpeg?h=365&w=240&dpr=2",
        title:"Astr Poplin Puff Sleeve Tiered Midi Dress",
        subtitle:"ASTR the Label",
        rate:"$",
        price:49.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/ff7e2cf1-2065-4449-8a68-d327a53be3b6.jpeg?h=365&w=240&dpr=2",
        title:"Ruched Body-Con Tank Dress",
        subtitle:"Leith",
        rate:"$",
        price:34.97,
    },
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
        img:"https://n.nordstrommedia.com/id/sr3/5f4d8849-d606-4f0e-9b18-2647d01e3db9.jpeg?h=365&w=240&dpr=2",
        title:"Superflex High Rise Elastic Free Pocket Ankle Leggings",
        subtitle:"90 DEGREE BY REFLEX",
        rate:"$",
        price:19.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/1152c22c-cf2a-4554-a373-05e9d2cde6e3.jpeg?h=365&w=240&dpr=2",
        title:"Attack Sport Shorts",
        subtitle:"Nike",
        rate:"$",
        price:66.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/49bdc3cc-89ff-44bf-b429-f4ed2d24a5d5.jpeg?h=365&w=240&dpr=2",
        title:"2-in-1 Running Shorts",
        subtitle:"90 DEGREE BY REFLEX",
        rate:"$",
        price:13.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"3.0",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/6cb34920-857e-4771-8967-cebb086be54b.jpeg?h=365&w=240&dpr=2",
        title:"Interval Woven Run Shorts",
        subtitle:"Z by Zella",
        rate:"$",
        price:19.37,
    },
];
localStorage.setItem("womendata",JSON.stringify(women));
var womenearr=JSON.parse(localStorage.getItem("womendata"))||[];

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
  display (women);
  console.log(women)

     function addtocart(elem){
        womenearr.push(elem);
       localStorage.setItem("cart",JSON.stringify(womenearr));
       alert("Product Has been added successfully")
     }
 function pricesort(giftPacks){
   var selected=document.querySelector("#SortBy").value;
   console.log(selected)


   if(selected=="Lowtohigh"){
     console.log("hi")
     womenearr.sort(function (a,b){
      return a.price - b.price;
    });
      console.log(womenearr)
      display(womenearr)
  }
    if(selected=="Hightolow"){
        womenearr.sort(function (a,b){
      return b.price - a.price;
    });
    console.log(womenearr)
    display(womenearr)
  
   }
}