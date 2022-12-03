$(document).ready( function() { 
    $('#preview').click( function () {
        var poble = document.getElementById('localitat');
        var date = document.getElementById('anyy');

        var resultat = document.getElementById('result');

        var sticker = {
            "poble": poble.value,
            "date": date.value,
            "background": " bg-sticker-yellow",
            "text": " text-sticker-yellow",
            "min": 300,
            "max": 350,
            "last": false
        }

        resultat.append(paintColorZone(sticker));

        var sticker = {
            "poble": poble.value,
            "date": date.value,
            "background": " bg-sticker-green",
            "text": " text-sticker-green",
            "min": 200,
            "max": 250,
            "last": false
        }

        resultat.append(paintColorZone(sticker));

        var sticker = {
            "poble": poble.value,
            "date": date.value,
            "background": " bg-sticker-blue",
            "text": " text-sticker-blue",
            "min": 100,
            "max": 150,
            "last": false
        }

        resultat.append(paintColorZone(sticker));

        var sticker = {
            "poble": poble.value,
            "date": date.value,
            "background": " bg-sticker-red",
            "text": " text-sticker-red",
            "min": 1,
            "max": 50,
            "last": true
        }

        resultat.append(paintColorZone(sticker));

        $("#main").remove();
        //$("#main").removeClass( "m-3 height-no-footer");

        
        $("#footer").remove();
         
    });

    function paintColorZone(sticker)
    {
        var div = document.createElement('div');
        div.className='pb-4';
        div.className = sticker.background;

        for (let index = sticker.min; index <= sticker.max; index++) {
            if(index%6==0 && index != sticker.min){
                div.append(paintSticker(sticker.poble, sticker.date, index, sticker.background, ' sixth'));
            }
            else
            {
                div.append(paintSticker(sticker.poble, sticker.date, index, sticker.background));
            }
        }
        if(!sticker.last)
            div.append(paintSticker(sticker.poble, sticker.date, 000, sticker.background, ' sixth', sticker.text, false)); 

        return div;
    }

    function paintSticker(localitat, year, number, bgcolor, sixth = '', text='', foto = true){
        var div = document.createElement('div');
        div.className = bgcolor + ' font-bold w-[49.5%] inline-block sticker'+sixth;
        
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
            var banner = document.createElement('img');
            banner.className='mt-6 mb-6';
            banner.src='img/banner.jpg';
            div.appendChild(banner);
        }
        return div;
    }
});