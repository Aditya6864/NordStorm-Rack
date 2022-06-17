clearance = [
    {
        img:"https://n.nordstrommedia.com/id/sr3/b5a06f61-be8f-4785-b648-f1173032321e.jpeg?h=365&w=240&dpr=2",
        title:"Kailey Slide Scandal (Women)",
        subtitle:"Steve Madden",
        rate:"$",
        price:35.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"4.1",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/97c03b64-2ebd-4b4a-ac40-2e2e5ab8da05.jpeg?h=365&w=240&dpr=2",
        title:"Slim Glitter Flip Flop (Women)",
        subtitle:"Havaianas",
        rate:"$",
        price:19.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"3.7",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/f2838a6a-74f3-4213-9f14-ef206b37e2d7.jpeg?h=365&w=240&dpr=2",
        title:"Intense Therapy Lip Balm SPF 25",
        subtitle:"Jack Black",
        rate:"$",
        price:8.00,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"4.8",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/2494e478-3e12-4942-9296-135010961cd5.jpeg?h=365&w=240&dpr=2",
        title:"14K Italian Gold Paperclip Chain Necklace",
        subtitle:"Sterling Forever Fine",
        rate:"$",
        price:219.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"3.9",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/597fdd5e-9d68-4919-a745-e84738e32878.jpeg?h=365&w=240&dpr=2",
        title:"Scoop Neck Slub T-Shirt (Regular & Petite)",
        subtitle:"NordStrom Rack",
        rate:"$",
        price:10.37,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"3.9",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/7c284a0a-f199-46eb-9211-d1c5415b3ebb.jpeg?h=365&w=240&dpr=2",
        title:"14K Gold Plated Beaded Stretch Bracelet Set",
        subtitle:"Sterling Forever",
        rate:"$",
        price:23.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"4.2",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/5ccc5522-6377-4a19-9f9c-7b0bc5e1b1df.jpeg?h=365&w=240&dpr=2",
        title:"62mm Rectangle Sunglasses",
        subtitle:"Ray-Ban",
        rate:"$",
        price:55.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"4.0",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/469846ae-74ce-4b04-9f3d-63be24563939.jpeg?h=365&w=240&dpr=2",
        title:"54mm Polarized Wayfarer Sunglasses",
        subtitle:"Ray-Ban",
        rate:"$",
        price:59.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"4.1",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/ee5561cd-45d9-44f8-a9f0-b0caddd3963b.jpeg?h=365&w=240&dpr=2",
        title:"DV Dolce Vita Laser-Cut Flip-Flop Footbed Sandal",
        subtitle:"DV by Dolce Vita",
        rate:"$",
        price:27.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"4.1",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/3f11ac9d-257f-4591-9df8-46c6b607de43.jpeg?h=365&w=240&dpr=2",
        title:"Superflex Elastic Free Waistband Bike Shorts",
        subtitle:"90 Degree By Reflex",
        rate:"$",
        price:11.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"4.9",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/c2a245a8-f097-4c18-8afd-a650f4f67846.jpeg?h=365&w=240&dpr=2",
        title:"Harlien Croc Embossed Slide Sandal",
        subtitle:"Steven New York",
        rate:"$",
        price:31.97,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"3.0",
    },
    {
        img:"https://n.nordstrommedia.com/id/sr3/511c2fde-5c7a-4306-a2c0-abd0f07e27a0.jpeg?h=365&w=240&dpr=2",
        title:"54mm Butterfly Sunglasses",
        subtitle:"Prada",
        rate:"$",
        price:124.77,
        img2:"https://mamaearth.in/static/mamaearth/star.svg",
        rating:"4.1",
    },
];
localStorage.setItem("clearancedata",JSON.stringify(clearance));
var clearancearr=JSON.parse(localStorage.getItem("clearancedata"))||[];

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
  display (clearance);
  console.log(clearance)

     function addtocart(elem){
        clearancearr.push(elem);
       localStorage.setItem("cart",JSON.stringify(clearancearr));
       alert("Product Has been added successfully")
     }
 function pricesort(giftPacks){
   var selected=document.querySelector("#SortBy").value;
   console.log(selected)


   if(selected=="Lowtohigh"){
     console.log("hi")
     clearancearr.sort(function (a,b){
      return a.price - b.price;
    });
      console.log(clearancearr)
      display(clearancearr)
  }
    if(selected=="Hightolow"){
        clearancearr.sort(function (a,b){
      return b.price - a.price;
    });
    console.log(clearancearr)
    display(clearancearr)
  
   }
}