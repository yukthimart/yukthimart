window.onload = function()
{
	var readurl = window.location.href.split('?')[1];
if (typeof readurl !== "undefined")
{
	console.log("has value");
	var repundtospace = readurl.replace(/_/g, ' ');
	if (repundtospace == "wire")
	{
		craftjs();
		wire();
	}
	if (repundtospace == "cloth")
	{
		fashionjs();
		cloth();
	}
	if (repundtospace == "jewels")
	{
		fashionjs();
		jewels();
	}
}
if (readurl == "" || (typeof readurl === "undefined"))
{
	console.log("empty");
}
else if (readurl != "" || (typeof readurl !== "undefined"))
{
	console.log("not empty");
}
}