// 서브메뉴, 갤러리 숨기기
$('.sub').hide()
$('.c2').hide()

// 메인 메뉴 중 하나에 마우스를 올리면(mouse over) 하이라이트 되고, 벗어나면 (mouse out) 하이라이트를 해제한다. 메인 메뉴를 마우스로 올리면(mouse over) 서브 메뉴 영역이 부드럽게 나타나면서, 서브 메뉴가 보이도록 한다. 
$('nav').on('mouseover',function(){
    $('.sub').stop().slideDown();
})
// 메인 메뉴에서 마우스커서가 벗어나면(mouse out) 서브 메뉴 영역은 부드럽게 사라져야 한다.
$('nav').on('mouseout',function(){
    $('.sub').stop().slideUp();
})

//  공지사항의 첫 번째 콘텐츠를 클릭(Click)할 경우 레이어 팝업창(Layer Pop_ up)이 나타나며, 
$('.c12 .contents .c1 a:nth-child(1)').on('click',function(){
    $('.popup').show();
})

// 
$('.popup a').on('click',function(){
    $('.popup').hide();
})

// 공지사항이 켜진 상태에서 갤러리를 클릭 했을 시 갤러리 반응
$('.c12 .title a:nth-child(1)').on('click',function(){
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').show()
    $('.c2').hide()
})
// 갤러리가 켜진 상태에서 공지사항을 클릭 했을 시 공지사항 반응
$('.c12 .title a:nth-child(2)').on('click',function(){
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').hide()
    $('.c2').show()
})

$('.sns a:nth-child(1)').on('click',function(){
    $('.popup').hide();
})

// slide
//
let count = 0
// 0, 300, 600

setInterval(function(){
    // console.log(count++)
    count++
    if(count>2){count=0}
    let total = count * 300
    console.log(total)
    $('.slide_contents').css('transform',`translateY(-${total}px)`)
},3000)