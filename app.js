// 上から順番に処理される
// 80点以上　合格
// 50点以　惜しい
// 30点以上　残念
// 30点以下　また来年
// 変数（命名を考える）(代入可能)
// console.logで出力
// 開発者ツールを使う


let score = 90;

if(score >= 80) {
console.log(`${score}`+'点！合格')
} else if(score >= 50) {
  console.log(`${score}`+'点！惜しい');
} else if(score >= 30) {
  console.log(`${score}`+'点,残念');
} else if(score <= 30){
  console.log(`${score}`+'点,また来年');
}

if(score >= 80) {
  console.log(`${score}点！合格`);
  } else if(score >= 50) {
    console.log(`${score}点！惜しい`);
  } else if(score >= 30) {
    console.log(`${score}点 残念`);
  } else {
    console.log(`${score}点 また来年`);
  }

// ifとforの練習
  // ３と３の倍数だけあほになる
for (let i = 1; i <= 30; i++){
  // ３で割った時の余りが0になる時
  if (i % 3 == 0 ){
    console.log(i+'あほ');
  }
  else{
  console.log(i);
  }
}

// ５の倍数と３の倍数の時にメッセージ
// それ以外は数字
// １〜１００まで
// 出力はconsole.log

console.log('====practice_for+if====')

for (let i = 1; i <= 100; i++){
  if (i % 3 == 0 || i % 5 == 0){
    console.log('サンゴ');
  }
  else {console.log(i)};
}
  // else if (i % 5 == 0){
  //   console.log('ゴーゴー');
  // }

console.log('====fizz_buzz====');

// 3で割り切れる時はFizz
// 5で割り切れる時はFuzz
// 両方で割り切れる時はFizzBuzz
// それ以外は１〜１００まで
// 値はconsole.logで出力

// １個ずつ処理する癖をつける！！

for (let i = 1; i <= 100; i++){
  if (i % 3 ==0 && i % 5 ==0){
    console.log('Fizz&Fuzz');
  } else if (i % 3 == 0){
    console.log('Fizz');
  } else if (i % 5 == 0){
    console.log('Fuzz');
  } else{
    console.log(i);
  }
}

console.log('====switch_ver.====');

for (let i = 1; i <= 100; i++){
  switch (0){
    // 値が同じ時って事でswitchの中は0
    case i % 15 :
      console.log('Fizz&Fuzz');
      break;
    case i % 3 :
      console.log('Fizz');
      break;
    case i % 5 :
      console.log('Fuzz');
      break;
    default:
      console.log(i);
      break;
    }
  }

//   let fish = confirm('あなたは魚が好きですか？');
// if (fish){
//   console.log('カルシウムたっぷり');
//   } else{
//   console.log('魚美味しいよ！')
// }
// console.log(fish)


// テンプレートリテラル
// 変数と文字を組み合わせるときはバックウォートを使う

// let fruit = prompt('あなたの好きなフルーツはなんですか？');
// console.log(`私の好きなフルーツは${fruit}です`);

// switchで切り替える
// りんご　青森さんが美味しいです
// みかん　温州ミカンがお勧めです
// バナナ　フィリピンが名産です
// 桃     といえば岡山ですね！
// その他　何かしらのメッセージ

// switch (fruit){
//   case 'りんご':
//     console.log('青森産が美味しいです');
//     break;
//   case 'みかん':
//       console.log('温州ミカンがお勧めです');
//       break;
//   case 'バナナ':
//       console.log('バナナといえばフィリピン！');
//       break;
//   case '桃':
//       console.log('ももといえば岡山！');
//       break;
//   default:
//       console.log('フルーツ美味しいよね！');
//     break;
//   }

// 生まれ年を入れたら年齢を返す
// functionで予め計算式を作ってその関数に数字代入するだけで計算してくれる
// 中で使える変数のことを引数という

function getAge (age){
  console.log(2019 - age);
}
getAge(1989);
// １〜１００の繰り返し処理
// nで割り切れる数だけを出力する関数を作る
// 出力はconsole.log
console.log('======calc======');

function calc(n){
  for (let index = 1; index <= 100; index++){
    if( index % n === 0){
    console.log(index);
    }
    // return index;
  }
}
 calc(20);








