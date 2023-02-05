function available() {
  var cities={NorthIndian,SouthIndian,FastFood,Chaat,Veg,NonVeg,Northindian,Southindian,Fastfood,chaat,veg,nonveg,northindian,southindian,fastfood,chat,VEG,Nonveg};
  var city = document.getElementById("s2").value;
  for(i in cities)
  {
    if(document.getElementById(i).style.display=="block")
    {
      document.getElementById(i).style.display="none";
    }
  }
  document.getElementById(city).style.display="block";
}