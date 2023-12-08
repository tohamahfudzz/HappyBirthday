var satu=document.getElementById('tulisan');
var kue=document.getElementsByClassName('kue');
var api=document.getElementById('api');

alert("hbd ya ke 19");
alert("semoga panjang umur dan sehat selalu serta selalu bahagia");
alert("tiup lilinnya :)");
alert("klik api untuk tiup lilinnya");
api.addEventListener('click',function()
{
	api.style.backgroundSize='0px';
	setTimeout(function()
	{
		window.location.href="19.html";
	},3000);
	
})
api.style.height='0 px';
//api.style.backgroundImage="url('fire1.png')";
//kue.style.backgroundColor='blue';
//satu.innerHTML='halo halo';
function warna()
{
	var banyakWarna=["red","green","blue","black"];
	var acak=banyakWarna[Math.floor(Math.random()*banyakWarna.length)];
	satu.style.color=acak;
	setTimeout(warna,1000);

}
warna();
/*function fire()
{
	var api=document.getElementById('api');
	var fires=["fire1.png","fire2.png","fire3.png","fire4.png"];
	for (var i = -1; i <fires.length; i++) {
		var apii=fires[i];
		(function(){
			
			setTimeout(function()
			{	
				api.style.backgroundImage=`url(${apii})`;
			},1000);

		})(i);
		if(i==fires.length)
		{
			fire();
		}
	}
}*/


//fire();
//satu.style.color='blue';
