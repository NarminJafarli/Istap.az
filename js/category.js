const categories=[
    {
        img:'../img/education.png',
        title:'Təhsil',
        vacancy:'120 vakansiya',
    },

    {
        img:'../img/martketing.png',
        title:'Marketing',
        vacancy:'110 vakansiya',
    },

    {
        img:'../img/part_time.png',
        title:'Part time',
        vacancy:'90 vakansiya',
    },

    {
        img:'../img/technology.png',
        title:'Texnologiya',
        vacancy:'70 vakansiya',
    },
];

categories.map(y=> {
    var cardDiv=document.createElement('div');
    cardDiv.innerHTML=

`<div class="category-box">
    <div class="category-img">
        <img src="${y.img}" alt="">
    </div>
<h4>${y.title}</h4>
<p>${y.vacancy}</p>
</div>`

            document.getElementsByClassName("row-items")[0].appendChild(cardDiv);
        })
