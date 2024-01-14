const jobs=[
    {
        image:'../img/tech1.png',
        salary:'1000azn',
        title:'Frontend Developer',
        company:'20 academy',
    },
    
    {
        image:'../img/mark2.png',
        salary:'1400azn',
        title:'Marketin Rəhbəri',
        company:'Saloglu Mebel',
    },

    {
        image:'../img/edu3.png',
        salary:'600azn',
        title:'Ofis Meneceri',
        company:'Ferrum Capital QSC',
    },

    {
        image:'../img/tech1.png',
        salary:'1000azn',
        title:'HelpDesk (Texniki Dəstək üzrə mütəxəssis)',
        company:'Aral Group Baku',
    },

    {
        image:'../img/tech1.png',
        salary:'1000azn',
        title:'Flutter Developer',
        company:'SIP LLC',
    },

    {
        image:'../img/tech1.png',
        salary:'2500azn',
        title:' Web proqramçı (Full Stack)',
        company:'PMD Group',
    },

    {
        image:'../img/tech1.png',
        salary:'1500azn',
        title:' 1C proqramçı',
        company:'PMD Group',
    },

    {
        image:'../img/maliyye.jpg',
        salary:'1000azn',
        title:' Baş Maliyyəçi',
        company:'AVİCOM',
    },

    {
        image:'../img/cashier.png',
        salary:'800azn',
        title:' Kiçik Əməliyyatçə-Kassir',
        company:'Kapital bank',
    },
    {
        image:'../img/law2.jpg',
        salary:'900azn',
        title:'  Hüquqşünas',
        company:'Kapital bank',
    },
    {
        image:'../img/graphic designer.png',
        salary:'500-800 azn',
        title:'  Qrafik dizayn',
        company:'İnci Group of Companies',
    },
    {
        image:'../img/law2.jpg',
        salary:'1000azn',
        title:'  Vəkil',
        company:'Development MTK',
    },
]


jobs.map(x=> {
    var cardDiv=document.createElement('div');
    cardDiv.innerHTML=

    `<div class="box">
				<div class="thum">
					<img src="${x.image}" alt="">
					<h3>${x.salary}</h3>
				</div>
				<div class="content">
					<div class="card-title">
						<h4>${x.title}</h4>
						<p>${x.company}</p>
					</div>
				</div>
			</div>`

            document.getElementsByClassName("vacancy-main")[0].appendChild(cardDiv);
        })


