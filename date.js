//module.exports is shortcut to exports only
// exports=module.exports

exports.getDate=function(){
  const today = new Date();
  let day = "";
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
return today.toLocaleDateString("gu-IN", options);

}

exports.getDay=function(){
  const today = new Date();
  let day = "";
  const options = {
    weekday: "long",

  };
  return today.toLocaleDateString("gu-IN", options);
}
