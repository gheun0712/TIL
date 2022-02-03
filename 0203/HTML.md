### Inline / Block 요소

- 한줄 띄기가 자동으로 되는지
- 한줄 내에 모두 작성, 띄워쓰기 안되는 요소 > Inline



### 텍스트

- `<a href="link"></a>`
- `<a></a>`
- `<u></u>`
- `<i></i>`
- 중요한거 강조  > `<strong></strong>`
- `<img src="link, path">` : 상대경로
- `<span style="test:bold"></span>`

<hr>

### 그룹 ::: Block 요소

- `<p></p>` > 자동적으로 한 줄 띄워짐
- `<hr>` : 디바이더
- `<br>` : 다음줄로 이동

#### 리스트

- `<ol></ol>` : 순서자동 리스트
- `<ul>부모태그</ul>` :  순서 없는 리스트 
  - `<li>자식태그</li>` 
- `<div></div>` : 

<hr>

### 테이블

```html
<table>
	<thead>
		<tr>
			<th>ID</th>
			<th>NAME</th>
			<th>MAJOR</th>
		</tr>
	</thead>
    
	<tbody>
		<tr>
            <td>1</td>
            <td>지은</td>
            <td>베트남어</td>
        </tr>
        <tr>
            <td>2</td>
            <td>상현</td>
            <td>심리학과</td>
        </tr>
    </tbody>
    
    <tfoot>
        <tr>
    		<td>TOTAL</td>
        	<td colspan="2">2명</td>
        </tr>
    </tfoot>
    <caption>반짝이는 2반</caption>
</table>
```



- 태그 기본 구성
  - thead
    - tr > th
  - tbody
    - tr > td
  - tfoot
    - tr > td
  - caption

