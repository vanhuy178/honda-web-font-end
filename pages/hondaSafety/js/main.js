// society
{
    let htmLContent = '';
    LIST_SOCIETY.map((item, index) => {
        htmLContent += `<p class = 'mt-5 detail-desc-item '>${item}</p>`
    })
    document.querySelector('.detail-desc').innerHTML = htmLContent;
}

// cherish
{
    let htmLContent = '';

    LIST_CHERISH.map((item, index) => {
        htmLContent += `
        <p class="cherish__desc-item mt-5" key = ${index}>${item}</p>

        `
    })

    $('.cherish__desc').html(htmLContent);
}

// render collison conten desc
{
    let htmlContent = '';
    LIST_COLLISIONS.map((item, index) => {
        htmlContent += `
        
        <div class="collision__container mt-5 d-flex justify-content-between" data-id =${index + 1}>
        <div class="collisions__image">
            <img src="../../pages/hondaSafety/img/img-collision0${index + 1}.jpg" alt="" style="width: 550px;">
        </div>
        <div class="collisions__content ml-5">
            <h2>${item.title}</h2>
            <p class="mt-4">${item.content}</p>
        </div>
    </div>
        
        `
    })

    $('.collision').html(htmlContent);
}

// RENDER LOGO

{
    const renderLogo = $('.renderLogo-safety');
    let htmlContent = ''
    let listNumberOfPicture = [1, 2, 3, 4, 5, 6, 7, 8];
    htmlContent = listNumberOfPicture.map((item, index) => {
        return `<img src="../../../images/footer-logo-${item}.jpg" alt="footer logo ${item}">`

    });

    renderLogo.html(htmlContent)
}
