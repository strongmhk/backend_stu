public class typeandvariable{
	public static void main(String[] args) {
		// 대표적인 타입 정수, 실수, 문자열
		System.out.println(6+2);
		System.out.println(6-2);
		System.out.println(6/2);
		System.out.println(6*2);
		System.out.println(Math.PI); // 파이 3.14
		System.out.println(Math.floor(Math.PI)); // 파이 3.14
		System.out.println(Math.E);
		System.out.println(Math.ceil(Math.E)); // 자연상수

		System.out.println("Hello World!"); // String
		//  System.out.println('Hello World!');  작은 따옴표는 Character(한글자)의미
		System.out.println("H"); // String(한글자여도 큰따옴표로 감싸면 문자열로 판단)
		System.out.println("Hello " + "World");
		System.out.println("Hello \nWorld"); // c언어와 동일하게 줄바꿈은 역슬래시
		System.out.println("Hello \"World\""); // 큰따옴표 안에 큰따옴표 넣고싶을때 역슬래시를 앞에 붙여줌(이스케이프=> 큰따옴표로부터 도망친다)

		System.out.println("Hello World".length()); // 문자열의 길이
		System.out.println("Hello, [[[name]]] ... bye.".replace("[[[name]]]", "minhyung"));
		int a = 1; // Number -> integer
		System.out.println(a);
		
		double b = 1.1; // real number -> double
		System.out.println(b);
		
		String c = "Hello World!";
		System.out.println(c);
		
		
		String name = "minhyung";
		System.out.println("Hello, "+name+" ... "+name+" ... bye" ); // 변수의 값만 바뀌면 출력하는 문장을 바꿀수있음~~
		double VAT = 10.0;
		System.out.println(VAT);
	}
}
