$(document).ready( function() { 
    $('#preview').click( function () {
        var poble = document.getElementById('localitat');
        var date = document.getElementById('anyy');

        //var data = [poble.value, anyy.value];

        var resultat = document.getElementById('result');

        //$(".grid:not(:empty)").prepend('<h1>title</h1>');
        //div.empty();
            /*
            Grocs: 300-350
            Verd: 200-250
            Blau: 100-150
            Vermell: 1-50
            */
        var background = ['bg-sticker-red', 'bg-sticker-blue', 'bg-sticker-green', 'bg-sticker-yellow'];
        
        var cheese = document.createElement('div');
        cheese.className='pb-4';
        cheese.className = background[3];

        for (let index = 300; index <= 350; index++) {
            if(index%6==0 && index != 300){
                cheese.append(paintSticker(poble.value, date.value, index, background[3], ' sixth'));
            }
            else
            {
                cheese.append(paintSticker(poble.value, date.value, index, background[3]));
            }
        }
        cheese.append(paintSticker(poble.value, date.value, 000, background[3], ' sixth', ' text-sticker-yellow', false)); 

        resultat.append(cheese);

        var pepper = document.createElement('div');
        pepper.className='pb-4';
        pepper.className = background[2];
        
        for (let index = 200; index <= 250; index++) {
            if(index%6==0 && index != 200){
                pepper.append(paintSticker(poble.value, date.value, index, background[2], ' sixth'));
            }
            else{
                pepper.append(paintSticker(poble.value, date.value, index, background[2])); 
            }
            
        }
        pepper.append(paintSticker(' ', ' ', ' ', background[2], ' sixth', ' text-sticker-green', false));
        resultat.append(pepper);
        
        var blueberry = document.createElement('div');
        blueberry.className='pb-4';
        blueberry.className = background[1];
        
        for (let index = 100; index <= 150; index++) {
            if(index%6==0 && index != 100){
                blueberry.append(paintSticker(poble.value, date.value, index, background[1], ' sixth'));
            }
            else{
                blueberry.append(paintSticker(poble.value, date.value, index, background[1])); 
            }
        }
        blueberry.append(paintSticker(' ', ' ', ' ', background[1], ' sixth', ' text-sticker-blue', false));
        resultat.append(blueberry); 
        

        var tomato = document.createElement('div');
        tomato.className='pb-4';
        tomato.className = background[0];
        for (let index = 1; index <= 50; index++) {
            if(index%6==0 && index != 500){
                tomato.append(paintSticker(poble.value, date.value, index, background[0], ' sixth'));
            }
            else{
                tomato.append(paintSticker(poble.value, date.value, index, background[0])); 
            }
        }
        resultat.append(tomato); 


        
        //var body = document.getElementById('eem');
        $("#eem").empty();
        $("#eem").removeClass( "m-3" );
        //body.empty();
        
        
    });

    function paintSticker(localitat, year, number, bgcolor, sixth = '', text='', foto = true){
        var div = document.createElement('div');
        div.className = bgcolor + ' font-bold w-[49.5%] inline-block sticker'+sixth;
        //div.id = data.cardID;
        //div.textContent = 'card ' + handCards;
        
        var place = document.createElement('div');
        place.className='text-4xl mt-8'+text;
        place.textContent = localitat.toUpperCase();
        div.appendChild(place);
        
        var season = document.createElement('div');
        season.className='text-4xl'+text;
        season.textContent = year;
        div.appendChild(season);
        
        var runner = document.createElement('div');
        runner.className='text-9xl mt-2 mb-6'+text;
        runner.textContent = number;
        div.appendChild(runner);

        if(foto)
        {
            /*var promos = document.createElement('div');
            promos.className='bg-white min-h-[90px]';
            promos.textContent = 'FOTOOS';*/
            //$('#book1 .picture').attr("src",book1.pictureURL);
            /*<img class="max-h-20 mx-auto" src="img/fedcm.png" alt="Federació catalana de motociclisme">
                        <img class="max-h-20 mx-auto" src="img/taxisponent_sm.jpg" alt="Taxis Ponent">
                        <img class="max-h-20 mx-auto" src="img/aralleida.png" alt="Ara Lleida - Diputació de Lleida">*/
            /*var fed = document.createElement('img');
            fed.className='max-h-20 mx-auto';
            fed.src='img/fedcm.png';
            promos.appendChild(fed);*/
    
            /*var taxis = document.createElement('img');
            taxis.className='max-h-20 mx-auto';
            taxis.src='img/taxisponent_sm.jpg';
            promos.appendChild(taxis);
            
            var aralleida = document.createElement('img');
            aralleida.className='max-h-20 mx-auto';
            aralleida.src='img/aralleida.png';
            promos.appendChild(aralleida);*/

            var banner = document.createElement('img');
            banner.className='mt-6 mb-6';
            banner.src='img/banner.jpg';
            //promos.appendChild(aralleida);

            
            div.appendChild(banner);
        }
        return div;
    }

    $('#download-button').click( function () {

        // Choose the element that your content will be rendered to.
        const element = document.getElementById('result');
        // Choose the element and save the PDF for your user.
        /*html2pdf()
            .set({ html2canvas: { scale: 4 } })
            .from(element)
            .save();*/

        var opt = {
            margin:       0,
            filename:     'dorsals.pdf',
            //image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 4 },
            //jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            //pagebreak: { mode: 'avoid-all'}
            pagebreak: { before: ['.sixth'] }
        };
            
        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();
        /*html2pdf(element, opt).then(function () {
            console.log('done!');
        });*/
    });
});