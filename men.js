men = [
    {
        img:"https://n.nordstrommedia.com/id/sr3/91fc8f9a-910c-4e99-b089-e2ea6578228b.jpeg?h=365&w=240&dpr=2",
        title:"Dri-FIT Training T-Shirt",
        subtitle:"Nike",
        rate:"$",
        price:71.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/6ddfacbb-cf1b-4b34-99ff-75b78c861e4f.jpeg?h=365&w=240&dpr=2",
        title:"Shoreline Surf Polo Shirt",
        subtitle:"Tommy Bahama",
        rate:"$",
        price:39.97,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/559f07c9-2119-4d47-af7b-804588537ccd.jpeg?h=365&w=240&dpr=2",
        title:"Dri-FIT Basketball Shorts",
        subtitle:"Nike",
        rate:"$",
        price:20.77,
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/070d30a9-f1fa-433b-a161-81da6ab5f7d0.jpeg?h=365&w=240&dpr=2",
        title:"Button Notch Neck T-Shirt",
        subtitle:"Lucky Brand",
        rate:"$",
        price:14.97,
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
localStorage.setItem("mendata",JSON.stringify(men));
var menearr=JSON.parse(localStorage.getItem("mendata"))||[];

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
  display (men);
  console.log(men)

     function addtocart(elem){
        menearr.push(elem);
       localStorage.setItem("cart",JSON.stringify(menearr));
       alert("Product Has been added successfully")
     }
 function pricesort(giftPacks){
   var selected=document.querySelector("#SortBy").value;
   console.log(selected)


   if(selected=="Lowtohigh"){
     console.log("hi")
     menearr.sort(function (a,b){
      return a.price - b.price;
    });
      console.log(menearr)
      display(menearr)
  }
    if(selected=="Hightolow"){
        menearr.sort(function (a,b){
      return b.price - a.price;
    });
    console.log(menearr)
    display(menearr)
  
   }
}