const musicians = {
  bassist: {
    name: 'Басист «Низкий старт»',
    role: 'Басист',
    tag: 'Ритм-секция',
    image: 'images/C5c76N-HrTAWyQALBl1UpixUZkx-raJ-Tl_er656OcRDaP6fOX1V6azt7tPZlbWthEpL6r8Ikw8HPE1coKctyVgnbZYaBQ.jpg',
    description: 'Самый бесполезный, листайте дальше',
    price: '99',
    experience: '5 лет на сцене',
    specialty: 'Самый бесполезный, листайте дальше',
    availability: 'Свободен для репетиций и концертов'
  },
  guitarist: {
    name: 'Гитарист «Деменция»',
    role: 'Гитарист',
    tag: 'Сиги в комплекте',
    image: 'images/IR6JgF6nQx6B3-r15J_LUInFx4rtfj2k2N6dJb64IFMHHAVC-M3W0xW_TmhrTQRWi4MoXEFRdZWsp-QUNtMh-0CV.jpg',
    description: 'Знает 4 аккорда. Просто 4.',
    price: '5 200',
    experience: '7 лет на сцене',
    specialty: 'Знает 4 аккорда. Просто 4.',
    availability: 'Свободен для репетиций и концертов'
  },
  vocalist: {
    name: 'Вокалистка «Саня»',
    role: 'Вокалистка',
    tag: 'Голос группы',
    image: 'images/DXUW-sRUgsZepZ3qooO-U-hAPdtS4dElcLRRxuF-lGPFXOrFBmKS07ooecHa3zkLA9tExopixnR4mnrCUozcDhoGyxMf-Q.jpg',
    description: 'Расскажет волшебные истории на концерте',
    price: '5 800',
    experience: '6 лет на сцене',
    specialty: 'Расскажет волшебные истории на концерте',
    availability: 'Свободна для репетиций и концертов'
  },
  drummer: {
    name: 'Барабанщик «Киселька boy»',
    role: 'Барабанщик',
    tag: 'Стабильный алкоголизм',
    image: 'images/T3vsRoP8yxX7SLvznl7PVkWVL_Sg8cHdfqaM6n_bGIk7os62zRyeni-76R4dAPbS-bgxZSD3tf1w8TqcH0DIIS-vLiMs0g.jpg',
    description: 'У него и так много проектов',
    price: '4 900',
    experience: '4 года на сцене',
    specialty: 'У него и так много проектов',
    availability: 'Свободен для репетиций и концертов'
  }
};

const requestedMusician = new URLSearchParams(window.location.search).get('id');
const musicianId = requestedMusician && Object.hasOwn(musicians, requestedMusician)
  ? requestedMusician
  : 'bassist';
const musician = musicians[musicianId];

document.title = `${musician.name} — Муз-Раб`;
document.querySelectorAll('[data-musician-name]').forEach((element) => {
  element.textContent = musician.name;
});
document.querySelectorAll('[data-musician-role]').forEach((element) => {
  element.textContent = musician.role;
});
document.querySelector('[data-musician-tag]').textContent = musician.tag;
document.querySelector('[data-musician-description]').textContent = musician.description;
document.querySelectorAll('[data-musician-price]').forEach((element) => {
  element.textContent = `${musician.price} руб.`;
});
document.querySelector('[data-musician-image]').src = musician.image;
document.querySelector('[data-musician-image]').alt = musician.role;
document.querySelector('[data-musician-experience]').textContent = musician.experience;
document.querySelector('[data-musician-specialty]').textContent = musician.specialty;
document.querySelector('[data-musician-availability]').textContent = musician.availability;
document.querySelector('[data-order-link]').href = `order.html?product=${encodeURIComponent(musicianId)}`;
