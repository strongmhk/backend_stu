
//15-1

// html의 파일 헤더에 <script> 태그를 사용할때는 비동기 방식인 defer를 사용하는게 좋다
// 파싱 : 문장 분석 
// html 파일은 위에서 아래로 순차적으로 파싱하기 때문에 헤더에 그냥 script 태그를 달면 body부분에 있는 클래스들와 같은 것들을 인식하기 전에
//그 안에 연결된 js 파일이 먼저 실행돼서 body부분에 있는 클래스와 같은 연결자들을 인식하지 못함.

