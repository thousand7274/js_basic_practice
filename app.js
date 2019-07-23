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
  else (console.log(i));
}
  // else if (i % 5 == 0){
  //   console.log('ゴーゴー');
  // }
