var citiesByState =
{
  Gachibowli: ["-- Select a type --","NorthIndian","SouthIndian","FastFood","Chaat","Veg","NonVeg"],
  Jubileehills: ["-- Select a type --","Northindian","Southindian","Fastfood","chaat","veg","nonveg"],
  Manikonda:["-- Select a type --","northindian","southindian","fastfood","chat","VEG","Nonveg"]
}
function cityList(value)
{
  if(value.length == 0)
  {
    document.getElementById("s2").innerHTML = "<option></option>";
  }
  else
  {
    var citiesOptions="";
    for(i in citiesByState[value])
    {
      citiesOptions += "<option>"+citiesByState[value][i]+"</option>";
    }
    document.getElementById("s2").innerHTML = citiesOptions;
  }
}