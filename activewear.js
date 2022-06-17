activewear = [
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
    {
        img:"https://n.nordstrommedia.com/id/sr3/91fc8f9a-910c-4e99-b089-e2ea6578228b.jpeg?h=365&w=240&dpr=2",
        title:"Dri-FIT Training T-Shirt",
        subtitle:"Nike",
        rate:"$",
        price:71.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/559f07c9-2119-4d47-af7b-804588537ccd.jpeg?h=365&w=240&dpr=2",
        title:"Dri-FIT Basketball Shorts",
        subtitle:"Nike",
        rate:"$",
        price:20.77,
    },
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
];
localStorage.setItem("activeweardata",JSON.stringify(activewear));
var activeweararr=JSON.parse(localStorage.getItem("activewaerdata"))||[];

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
  display (activewear);
  console.log(activewear)

     function addtocart(elem){
        activeweararr.push(elem);
       localStorage.setItem("cart",JSON.stringify(activeweararr));
       alert("Product Has been added successfully")
     }
 function pricesort(giftPacks){
   var selected=document.querySelector("#SortBy").value;
   console.log(selected)


   if(selected=="Lowtohigh"){
     console.log("hi")
     activeweararr.sort(function (a,b){
      return a.price - b.price;
    });
      console.log(activeweararr)
      display(activeweararr)
  }
    if(selected=="Hightolow"){
        activeweararr.sort(function (a,b){
      return b.price - a.price;
    });
    console.log(activeweararr)
    display(activeweararr)
  
   }
}