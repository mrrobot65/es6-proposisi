
const nilai_p = ['1','1','0','0']
const nilai_q = ['1','0','1','0']


let hasil=[100]


const proses = () =>
{
	let term = `Variabel p memiliki nilai: ${nilai_p}
			<br>Sedangkan, variabel q memiliki nilai: ${nilai_q}`
	document.getElementById("term").innerHTML=term;

	let inputan = document.getElementById("input").value

	if(inputan == 'konjungsi')
	{
		operasi_konjungsi()
	}
	else if (inputan == 'disjungsi')
	{
		operasi_disjungsi()
	}
	else if (inputan == 'implikasi')
	{
		operasi_implikasi()
	}
	else if (inputan == 'biimplikasi')
	{
		operasi_biimplikasi()
	}
}

const operasi_konjungsi = () =>
{	

	for (i=0; i<4; i++)
	{
		if(nilai_p[i] == 1 && nilai_q[i] == 1)
		{
        hasil[i]= nilai_q[i]
    	}
         else if(nilai_p[i] == 1 && nilai_q[i] == 0)
        {
        hasil[i]= nilai_q[i]
    	}
         else if(nilai_p[i] == 0 && nilai_q[i] == 1)
        {
        hasil[i] = nilai_p[i]
    	}
         else if(nilai_p[i] == 0 && nilai_q[i] == 0)
        {	
        hasil[i] = nilai_q[i]
        }
       document.getElementById("final").innerHTML = `Hasil nilai kebenaran P konjungsi Q adalah <br>${hasil[0]}
       <br> ${hasil[1]}<br> ${hasil[2]}<br> ${hasil[3]}`
    	 
	}	
	
}


const operasi_disjungsi = () =>
{	

	for (let i=0; i<4; i++)
	{
		if(nilai_p[i] == 1 && nilai_q[i] == 1)
		{
        hasil[i]= nilai_q[i]
    	}
         else if(nilai_p[i] == 1 && nilai_q[i] == 0)
        {
        hasil[i]= nilai_p[i]
        }
         else if(nilai_p[i] == 0 && nilai_q[i] == 1)
        { 	
        hasil[i] = nilai_q[i]
    	}
         else if(nilai_p[i] == 0 && nilai_q[i] == 0)
        {
        hasil[i] = nilai_q[i]
        }
    	document.getElementById("final").innerHTML = `Hasil nilai kebenaran P disjungsi Q adalah <br>${hasil[0]}
       <br> ${hasil[1]}<br> ${hasil[2]}<br> ${hasil[3]}`
	}
	
	
}

const operasi_implikasi = () =>
{	

	for (let i=0; i<4; i++)
	{
		if(nilai_p[i] == 1 && nilai_q[i] == 1)
		{
        hasil[i] = nilai_p[i]
    	}
         else if(nilai_p[i] == 1 && nilai_q[i] == 0)
        {
        hasil[i] = nilai_q[i]
        }
         else if(nilai_p[i] == 0 && nilai_q[i] == 1)
        {
        hasil[i] = nilai_q[i]
    	}
         else if(nilai_p[i] == 0 && nilai_q[i] == 0)
        {
        hasil[i] = '1'
    }
    	document.getElementById("final").innerHTML = `Hasil nilai kebenaran P implikasi Q adalah <br>${hasil[0]}
       <br> ${hasil[1]}<br> ${hasil[2]}<br> ${hasil[3]}`
	}
	
	
}

const operasi_biimplikasi = () =>
{	

	for (let i=0; i<4; i++)
	{
		if(nilai_p[i] == 1 && nilai_q[i] == 1)
        hasil[i]= nilai_p[i]
         else if(nilai_p[i] == 1 && nilai_q[i] == 0)
        hasil[i]= nilai_q[i]
         else if(nilai_p[i] == 0 && nilai_q[i] == 1)
        hasil[i] = nilai_p[i]
        
        else if(nilai_p[i] == 0 && nilai_q[i] == 0)
        hasil[i] = '1'

    	document.getElementById("final").innerHTML = `Hasil nilai kebenaran P biimplikasi Q adalah <br>${hasil[0]}
       <br> ${hasil[1]}<br> ${hasil[2]}<br> ${hasil[3]}`
	}
	
	
}