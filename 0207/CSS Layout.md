## ๐**CSS Layout**

- ##### ๋ธ๋ก > ๋ง์ง ์ฐ์ธก auto

  - div, h1,p(๋ฌธ๋จ)

- ##### ์ธ๋ผ์ธ > ์ปจํ์ธ ๋ก ์ฌ์ด์ฆ ์ง์  / ๋์ด ๋๋น ์ง์  ์ ์ฉ ์๋จ 

  - span, input, img

- ##### positioning

  - absoulte : static์ด ์๋ ๋ถ๋ชจ
  - fixed : ๋ธ๋ผ์ฐ์  (viewpoint)
  - relative

- ##### 10rem => 160px (root - > 16px)

---

##### 1. float - ๋ฐ์ค๋ฅผ ์ผ์ชฝ ํน์ ์ค๋ฅธ์ชฝ์ผ๋ก ์ด๋์์ผ ํ์คํธ๋ฅผ ํฌํจ ์ธ๋ผ์ธ์์๋ค์ด ์ฃผ๋ณ์ wrapping ํ๋๋ก ํจ

- ์์๊ฐ Normal flow๋ฅผ ๋ฒ์ด๋๋๋ก ํจ > ๋ถ๋ชจ ์์ ๋์ด 0์ด ๋๊ฒ ํจ = > clearing

- left : ์์๋ฅผ ์ผ์ชฝ์ผ๋ก ๋์

- right : ์์๋ฅผ ์ค๋ฅธ์ชฝ์ผ๋ก ๋์

- ###### **`float clearing` > float ์์์ ๋ถ๋ชจ๋ก div ์์ ๋ฃ์ด์ฃผ๊ณ  <u>๋ถ๋ชจ์๊ฒ .clearfix ํด๋์ค ๋ถ์ฌ</u>**

  -  ๋ถ๋ชจ ๋์ด ์ง์ ํ๊ฒ ํด์ค

  - ``` css
    .clearfix::after {
    	content: "";
    	display: block;
    	clear: both;
    }
    ```

---



##### 2. Flexbox โญ

- ํ๊ณผ ์ด ํํ๋ก ์์ดํ๋ค์ ๋ฐฐ์นํ๋ 1์ฐจ์ ๋ ์ด์์ ๋ชจ๋ธ

- ์ถ

  - ๋ฉ์ธ ์ถ
  - ๊ต์ฐจ ์ถ

- ๊ตฌ์ฑ ์์

  - Flex Container(๋ถ๋ชจ ์์)
  - Flex Item(์์ ์์)

  

##### 	<๋ฐฐ์น ์ค์ >

- ###### `flex-direction`

  -  row / row-reverse
  - column (์ถ๋ผ๋ฆฌ ๋ฐ๋) / column-reverse

- ###### `flex-wrap` :  ์์ดํ์ด ์ปจํ์ด๋๋ฅผ ๋ฒ์ด๋๋ ๊ฒฝ์ฐ ํด๋น ์์ญ ๋ด์ ๋ฐฐ์น๋๋๋ก ์ค์ 

  - wrap : ๋์น๋ฉด ๋ค์ ์ค๋ก ๋ฐฐ์น / nowrap(๊ธฐ๋ณธ๊ฐ) : ํ ์ค์ ๋ฐฐ์น

- `flex-flow` : direction๊ณผ wrap์ ๋ํ ์ค์  ๊ฐ์ ์ฐจ๋ก๋ก ์์ฑ



##### 	<๊ณต๊ฐ ๋๋๊ธฐ>

- ###### `justify-content` : ๋ฉ์ธ์ถ ๊ธฐ์ค

- ###### `align-content` : ํฌ๋ก์ค์ถ ๊ธฐ์ค

  - flex-start / end / center
  - space-between : ์์ดํ ์ฌ์ด ๊ท ๋ฑํ ๊ณต๋ฐฑ 
  - space-around :  ์์ดํ ๋๋ฌ์ผ ์์ญ์ ๊ท ์ผํ๊ฒ ๋ถ๋ฐฐ (๊ฐ์ง ์ ์๋ ์์ญ์ ๋ฐ์ผ๋ก ๋๋ ์ ์์ชฝ์ผ๋ก)
  - space-evenly : ์ ์ฒด ์์ญ์์ ๊ท ๋ฑํ๊ฒ ๋ถ๋ฐฐ



##### 	<์ ๋ ฌ>

- ###### `align-items` : ๋ชจ๋  ์์ดํ์ ์ ์ฉ

- ###### `align-self` : ๊ฐ๋ณ ์์ดํ์ ์ ์ฉ

  - stretch : ์ปจํ์ด๋๋ฅผ ๊ฐ๋ ์ฑ์ / flex-start / end / center / baseline : ํ์คํธ baseline์ ๊ธฐ์ค์ ์ ๋ง์ถค



- ์์ง ์ํ ๊ฐ์ด๋ฐ ์ ๋ ฌ

``` css
.container {
    display: flex;
    justify-content : center;
    align-items : center;
}

/* ๋ฐฉ๋ฒ 2 */
.container {
    display: flex;
}
.item {
    margin: auto;
}
```

- ์นด๋ ๋ฐฐ์น

``` css
/* ๋ฐ์๊ณ 2*3*/
layout {
    display : flex;
    flex-direction : column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
}

/* ์๊ณ 3*2*/
layout {
    display : flex;
    flex-direction : row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
}
```



- `flex-grow `: ๋จ์ ์์ญ์ ์์ดํ์ ๋ถ๋ฐฐ
- order : ๋ฐฐ์น ์์

``` css
order -3
order 1
...
order 0 > ๊ธฐ๋ณธ
```







