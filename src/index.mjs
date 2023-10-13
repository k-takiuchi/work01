//-------const、let等の変数宣言-------
//従来の変数宣言
var val1 = "var変数";
console.log(val1);

//var変数は上書き可能
val1 = "上書き";
console.log(val1);

//var変数は再宣言も可能
var val1 = "再宣言";
console.log(val1);

//letの変数宣言
let val2 = "let変数";
console.log(val2);

// //let変数は上書き可能
val2 = "上書き";
console.log(val2);

//let変数は再宣言は不可能
// let val2 = "再宣言";

//constの変数宣言
const val3 = "const変数";
console.log(val3);

//constは上書きも再宣言も不可能
// val3 = "上書き";
// const val3 = "再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "takiuchi",
  age:25,
}
//nameの変更
val4.name = "takiuchi";
// プロパティの追加
val4.address = "nagano";
console.log(val4);

// constで定義した配列もプロパティの変更が可能
const val5 = ['dog','cat'];
// 一つ目の要素を変更
val5[0] = "bird";
// 配列に追加
val5.push("bird");
console.log(val5);
//-------const、let等の変数宣言-------


//-------テンプレート文字列-------
const strName = "瀧内";
const strAge = 25;
//作りたいメッセージ→「私の名前は瀧内です。年齢は25歳です。」

// 従来の文字列連結
const message1 = "私の名前は" + strName + "です。年齢は" + strAge + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${strName}です。年齢は${strAge}です。`;
console.log(message2);
//-------テンプレート文字列-------


//----------アロー関数----------
const arrowFunc1 = function(str) {
  return str;
};
console.log(arrowFunc1("func1です"));

const arrowFunc2 = str => str;
console.log(arrowFunc2("func2です"));

const arrowFunc3 = (num1,num2) => num1 + num2;
console.log(arrowFunc3(10,20));
//----------アロー関数----------


//----------分割代入----------
//オブジェクトを定義
const myProfile = {
  splitName: "kai",
  splitage: 25,
};

//分割代入を使わずにメッセージ作成
const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message3);

//分割代入を用いてメッセージ作成
const {splitName, splitAge} = myProfile;
const message4 = `名前は${splitName}です。年齢は${splitAge}歳です。`;
console.log(message4);

//配列を宣言
const myProfile2 = ['瀧内', 25];
//分割代入を使わずにメッセージ作成
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(message5);

//分割代入を用いてメッセージ作成
const [splitName2, splitAge2] = myProfile2;
const message6 = `名前は${splitName2}です。年齢は${splitAge2}歳です。`;
console.log(message6);
//----------分割代入----------

//----------デフォルト値----------
const sayHello = (name = "def") => console.log(`こんにちは${name}さん！`);
// デフォルト値を設定することで引数が空の場合デフォルト値が表示される
sayHello();
//----------デフォルト値----------

//----------スプレッド構文----------
const arr1 = [1,2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1,num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
console.log(arr8);
//----------スプレッド構文----------

//----------mapやfilterを使った配列の処理----------
const nameArr = ["田中", "山田", "瀧内"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2 = nameArr.map((name)=>{
  return name;
})
console.log(nameArr2);

nameArr.map((name) => console.log(name));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "瀧内") {
    return name
  } else{
    return `${name}さん`
  }
});
console.log(newNameArr);
//----------mapやfilterを使った配列の処理----------


//------------------三項演算子------------------
//ある条件 ？条件がtrueの時 ：条件がfqlseの時
const val6 = 1 < 0 ? 'true' : 'false';
console.log(val6);

const num = "1500";
const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数詞を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えています' : '許容範囲内'
}
console.log(checkSum(50, 80));

//------------------三項演算子------------------


//---------------論理演算氏の本当の意味---------------

const flg1 = true;
const flg2 = false;

if (flg1 || flg2) {
  console.log("1か2はTrueになる");
}

if (flg1 && flg2) {
  console.log("1も2もTrueになる");
}

// ||は左がfalseなら右を返す
const num01 = 100;
const fee = num01 || "金額未設定です";
console.log(fee);

// &&は左がtrueなら右を返す
const num02 = null;
const fee2 = num02 && "金額未設定です";
console.log(fee2);

//---------------論理演算氏の本当の意味---------------
