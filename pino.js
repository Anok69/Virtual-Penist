const keys = {
    'q':'c',
    'w':'d',
    'e':'e',
    'r':'f',
    't':'g',
    'y':'a',
    'u':'b',
    'i':'c1',
    'o':'d1',
    'p':'e1',
    '2':'cs',
    '3':'eb',
    '5':'fs',
    '6':'ab',
    '7':'bb',
    '9':'cs1',
    '0':'eb1'
};

const prelude = {}

for(let apple in keys){
    let meow = keys[apple];
    prelude[meow] = new Audio(`sou/${meow}.mp3`)
    }

document.addEventListener('keydown',(e)=>{
    const keyid = keys[e.key.toLowerCase()];
    if(!keyid) return;

    const meow = document.getElementById(keyid);
    meow.classList.add('playing')


    const sound = prelude[keyid]

    sound.play();
});

document.addEventListener('keyup',(e)=>{
    const keyid = keys[e.key.toLowerCase()];
    if(!keyid) return;

    const meow = document.getElementById(keyid);
    meow.classList.remove('playing')
    
    const sound = prelude[keyid]

    setTimeout(()=>{
    sound.pause();
    sound.currentTime=0;
    },100);
});

document.addEventListener('pointerdown',(e)=>{
    const keyid = e.target.id;
    if(!keyid) return;

    const meow = document.getElementById(keyid);
    meow.classList.add('playing')


    const sound = prelude[keyid]

    sound.play();    
});

document.addEventListener('pointerup',(e)=>{
        const keyid = e.target.id;
    if(!keyid) return;

    const meow = document.getElementById(keyid);
    meow.classList.remove('playing')
    
    const sound = prelude[keyid]

    setTimeout(()=>{
    sound.pause();
    sound.currentTime=0;
    },100);
});