//ID名toggleをクリックしたとき
document.getElementById('toggle').addEventListener('click' , () => {

    //ID名bodyにクラス名is-openをつける
        document.getElementById('BODY').classList.toggle('is-open');
    } );
    
    
    
    //クラス名closeがついている要素にtargetsという変数を宣言
    const targets = document.getElementsByClassName('close');
    
    //クリックする要素が複数あって、どこをクリックされても同じ処理をするために
    //forで要素数分ループ処理
    for(let i = 0; i < targets.length; i = i + 1){
      
        targets[i].addEventListener('click', () => {
            document.getElementById('BODY').classList.remove('is-open');
          
      }, false);
        
    }


$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 7000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});

// スクロール用
let fadeInTarget = document.querySelectorAll('.fade_in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll_in');
    }
  }
});