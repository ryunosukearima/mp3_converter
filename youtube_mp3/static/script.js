// // ボタンクリック確認
// document.getElementById('input-btn').onclick = function() {
//     alert('Hello');
// }

// 変換時のローディングアニメーション
// htmlが読み込まれたらプログラム実行を開始する
$(document).ready(function(){
    $('.convert-btn').on('click', function(){
        $('#loading').addClass('loading');
        setTimeout(function(){
            $('.loading').removeClass('loading');}, 7000);
        $('#loading-item').addClass('loading-item');
        setTimeout(function(){
            $('.loading-item').removeClass('loading-item');}, 7000);
    });
});

// drawer
document.getElementById('drawerOpen').addEventListener('click', () => {
    document.getElementById("drawerNavi").style.width = "25%";
  });
  
  document.getElementById('drawerClose').addEventListener('click', () => {
    document.getElementById("drawerNavi").style.width = "0%";
  });

// ボタンタップ時、テキスト削除

document.getElementById('convert-btn').onclick = function() {
    CreateText();
};

function CreateText() {
    setTimeout( ()=>{
        // youtubeURL
        var textForm = document.getElementById('create-youtube');
        textForm.value = '';
        // fileNAME
        var textForm = document.getElementById('create-output');
        textForm.value = '';
    }, 1);
}