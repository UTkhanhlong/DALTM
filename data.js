const posts = [
  {
    id: 1,
    title: "Giới thiệu về Java – Ngôn ngữ lập trình đa nền tảng",
    category: "Lập trình",
    date: "10/12/2025",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Khám phá ngôn ngữ Java — nền tảng vững chắc cho các ứng dụng web, di động và backend.",
    content: `
            <p><strong>Java</strong> là một trong những ngôn ngữ lập trình phổ biến nhất thế giới, được phát triển bởi Sun Microsystems (hiện nay thuộc Oracle). Với triết lý <em>"Write Once, Run Anywhere"</em> (Viết một lần, chạy mọi nơi), Java hoạt động nhờ vào máy ảo Java (JVM).</p>
            
            <h3>Tại sao nên học Java?</h3>
            <ul>
                <li><strong>Đa nền tảng:</strong> Chạy trên Windows, Mac, Linux mà không cần biên dịch lại.</li>
                <li><strong>Cộng đồng lớn:</strong> Hàng triệu lập trình viên và thư viện hỗ trợ (Spring, Hibernate).</li>
                <li><strong>Bảo mật cao:</strong> Được các ngân hàng và tập đoàn lớn tin dùng.</li>
            </ul>

            <h3>Cấu trúc chương trình cơ bản</h3>
            <p>Mọi mã nguồn Java đều phải nằm trong một <code>class</code>. Dưới đây là ví dụ kinh điển:</p>
            
            <pre><code class="language-java">public class HelloWorld {
    // Hàm main là điểm bắt đầu của chương trình
    public static void main(String[] args) {
        System.out.println("Xin chào, Java!");
        
        int a = 10;
        int b = 20;
        System.out.println("Tổng là: " + (a + b));
    }
}</code></pre>
            
            <blockquote>Java là ngôn ngữ định kiểu tĩnh (statically typed), nghĩa là bạn phải khai báo kiểu dữ liệu cho biến trước khi sử dụng.</blockquote>
        `,
  },
  {
    id: 2,
    title: "Lập trình hướng đối tượng trong Java (OOP)",
    category: "Java",
    date: "12/12/2025",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Tìm hiểu 4 nguyên lý cơ bản của OOP trong Java và ví dụ thực hành.",
    content: `
            <p>Java là ngôn ngữ thuần hướng đối tượng. Để làm chủ Java, bạn cần hiểu rõ 4 trụ cột của OOP:</p>
            
            <h3>1. Đóng gói (Encapsulation)</h3>
            <p>Giấu thông tin chi tiết và chỉ hiển thị những gì cần thiết. Chúng ta sử dụng các từ khóa như <code>private</code>, <code>public</code>.</p>
            <pre><code class="language-java">class Student {
    private String name; // Dữ liệu được bảo vệ

    // Getter và Setter để truy cập an toàn
    public void setName(String n) { 
        if(n != null) this.name = n; 
    }
    public String getName() { return name; }
}</code></pre>

            <h3>2. Kế thừa (Inheritance)</h3>
            <p>Cho phép một lớp mới (con) kế thừa các thuộc tính và phương thức của lớp cũ (cha).</p>
            <pre><code class="language-java">class Animal {
    void eat() { System.out.println("Đang ăn..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("Gâu gâu!"); }
}</code></pre>

            <h3>3. Đa hình (Polymorphism) & Trừu tượng (Abstraction)</h3>
            <p>Đa hình cho phép một hành động có thể thực hiện theo nhiều cách khác nhau. Trừu tượng giúp ẩn đi sự phức tạp của hệ thống thông qua <code>interface</code> hoặc <code>abstract class</code>.</p>
        `,
  },
  {
    id: 3,
    title: "So sánh Java và Python: Nên chọn ngôn ngữ nào?",
    category: "Phân tích",
    date: "15/12/2025",
    image: "https://topdev.vn/blog/wp-content/uploads/2019/03/JAVA_TopDev.png",
    excerpt:
      "Cùng xem điểm mạnh và yếu của Java và Python để lựa chọn phù hợp.",
    content: `
            <p>Việc lựa chọn giữa Java và Python phụ thuộc lớn vào mục đích sử dụng của dự án. Dưới đây là bảng so sánh chi tiết:</p>

            <h3>Bảng so sánh</h3>
            <table border="1" style="width:100%; border-collapse: collapse;">
                <tr>
                    <th style="padding: 8px;">Tiêu chí</th>
                    <th style="padding: 8px;">Java</th>
                    <th style="padding: 8px;">Python</th>
                </tr>
                <tr>
                    <td style="padding: 8px;">Cú pháp</td>
                    <td style="padding: 8px;">Chặt chẽ, dài dòng (ngoặc nhọn, chấm phẩy)</td>
                    <td style="padding: 8px;">Ngắn gọn, giống tiếng Anh (thụt đầu dòng)</td>
                </tr>
                <tr>
                    <td style="padding: 8px;">Hiệu suất</td>
                    <td style="padding: 8px;">Nhanh hơn nhờ biên dịch JIT</td>
                    <td style="padding: 8px;">Chậm hơn (thông dịch)</td>
                </tr>
                <tr>
                    <td style="padding: 8px;">Ứng dụng</td>
                    <td style="padding: 8px;">Backend doanh nghiệp, Android, Big Data</td>
                    <td style="padding: 8px;">AI, Machine Learning, Data Science, Scripting</td>
                </tr>
            </table>

            <h3>Kết luận</h3>
            <p>Nếu bạn muốn xây dựng hệ thống ngân hàng lớn, chọn <strong>Java</strong>. Nếu bạn làm về trí tuệ nhân tạo hoặc muốn code nhanh một tool nhỏ, chọn <strong>Python</strong>.</p>
        `,
  },
  {
    id: 4,
    title: "Nhập môn JavaScript – Ngôn ngữ của Web",
    category: "JavaScript",
    date: "16/12/2025",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "JavaScript (JS) là ngôn ngữ không thể thiếu để tạo nên các website tương tác.",
    content: `
            <p><strong>JavaScript</strong> là ngôn ngữ lập trình duy nhất chạy được trực tiếp trên trình duyệt web, giúp biến các trang web tĩnh (HTML/CSS) trở nên sống động.</p>

            <h3>JavaScript làm được gì?</h3>
            <ul>
                <li>Thay đổi nội dung HTML động.</li>
                <li>Xử lý sự kiện click chuột, bàn phím.</li>
                <li>Gửi yêu cầu đến máy chủ (AJAX/Fetch) mà không cần load lại trang.</li>
            </ul>

            <h3>Ví dụ tương tác DOM</h3>
            <p>Đây là cách JS thay đổi màu sắc của một phần tử:</p>
            <pre><code class="language-javascript">// Chọn phần tử
const title = document.getElementById('main-title');

// Thay đổi style
title.style.color = 'red';
title.innerText = 'Nội dung đã được thay đổi bởi JS!';</code></pre>

            <h3>Biến và Kiểu dữ liệu</h3>
            <p>JS là ngôn ngữ <em>dynamic typing</em>, bạn không cần khai báo kiểu dữ liệu:</p>
            <pre><code class="language-javascript">let name = "Dev"; // String
let age = 25;     // Number
let isStudent = true; // Boolean</code></pre>
        `,
  },
  {
    id: 5,
    title: "ES6 và những tính năng hiện đại trong JavaScript",
    category: "JavaScript",
    date: "18/12/2025",
    image:
      "https://images.unsplash.com/photo-1627398242450-274d0c714568?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Nâng cấp kỹ năng JS của bạn với Arrow Functions, Template Literals và Destructuring.",
    content: `
            <p>Phiên bản ES6 (ECMAScript 2015) là bước nhảy vọt của JavaScript. Dưới đây là những tính năng bạn bắt buộc phải biết.</p>

            <h3>1. Arrow Function</h3>
            <p>Cú pháp ngắn gọn hơn, đặc biệt hữu ích khi làm việc với hàm callback.</p>
            <pre><code class="language-javascript">// Cách cũ
function sum(a, b) { return a + b; }

// ES6 Arrow Function
const sum = (a, b) => a + b;</code></pre>

            <h3>2. Template Literals</h3>
            <p>Sử dụng dấu backtick (\`) để chèn biến dễ dàng hơn:</p>
            <pre><code class="language-javascript">let name = "Nam";
console.log(\`Xin chào \${name}, chào mừng bạn!\`);</code></pre>

            <h3>3. Destructuring (Phân rã)</h3>
            <p>Trích xuất dữ liệu từ Array hoặc Object cực nhanh:</p>
            <pre><code class="language-javascript">const user = { id: 1, username: 'admin' };
const { username } = user; // Lấy biến username ra riêng

const colors = ['red', 'blue'];
const [firstColor] = colors; // Lấy 'red'</code></pre>
        `,
  },
  {
    id: 6,
    title: "Xử lý bất đồng bộ: Promise và Async/Await trong JS",
    category: "JavaScript",
    date: "20/12/2025",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Làm chủ việc gọi API và xử lý dữ liệu không đồng bộ một cách mượt mà.",
    content: `
            <p>JavaScript là ngôn ngữ đơn luồng (single-threaded), vì vậy việc xử lý các tác vụ tốn thời gian (như gọi API, đọc file) cần cơ chế bất đồng bộ để không làm treo giao diện.</p>

            <h3>Vấn đề của Callback Hell</h3>
            <p>Trước đây, chúng ta lồng quá nhiều callback vào nhau khiến code khó đọc. Promise ra đời để giải quyết việc này, và sau đó là <strong>Async/Await</strong>.</p>

            <h3>Ví dụ thực tế: Gọi API</h3>
            <pre><code class="language-javascript">const getUser = async (id) => {
    try {
        // Chờ dữ liệu trả về
        let response = await fetch(\`https://api.example.com/users/\${id}\`);
        
        // Chờ convert sang JSON
        let data = await response.json();
        
        console.log("Dữ liệu user:", data);
        return data;
    } catch (error) {
        console.error("Có lỗi xảy ra:", error);
    }
};

getUser(1);</code></pre>
            <p>Với <code>async/await</code>, code trông tuần tự và dễ hiểu như code đồng bộ thông thường.</p>
        `,
  },
  {
    id: 7,
    title: "Spring Boot – Framework mạnh mẽ cho Java Backend",
    category: "Java Framework",
    date: "22/12/2025",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Tại sao Spring Boot lại là lựa chọn số 1 cho các lập trình viên Java Backend?",
    content: `
            <p><strong>Spring Boot</strong> được xây dựng trên nền tảng Spring Framework nhưng loại bỏ các cấu hình XML rườm rà. Nó tích hợp sẵn Server (Tomcat) giúp ứng dụng có thể chạy ngay lập tức (Stand-alone).</p>

            <h3>Các thành phần cốt lõi</h3>
            <ul>
                <li><strong>Spring Web:</strong> Xây dựng RESTful API.</li>
                <li><strong>Spring Data JPA:</strong> Làm việc với Database dễ dàng.</li>
                <li><strong>Spring Security:</strong> Bảo mật và phân quyền.</li>
            </ul>

            <h3>Ví dụ tạo API đơn giản</h3>
            <pre><code class="language-java">@RestController
@RequestMapping("/api")
public class ProductController {

    @GetMapping("/products")
    public List<String> getProducts() {
        return Arrays.asList("Laptop", "Mouse", "Keyboard");
    }
}</code></pre>
            <p>Chỉ với vài dòng code trên, bạn đã có một API trả về danh sách sản phẩm định dạng JSON.</p>
        `,
  },
  {
    id: 8,
    title: "Node.js: Chạy JavaScript ở phía Server",
    category: "Backend",
    date: "24/12/2025",
    image:
      "https://images.unsplash.com/photo-1607799275518-d58665d48862?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Không chỉ ở frontend, JavaScript còn thống trị backend nhờ môi trường Node.js.",
    content: `
            <p><strong>Node.js</strong> là môi trường chạy JavaScript (Runtime Environment) bên ngoài trình duyệt, sử dụng V8 Engine của Google. Nó nổi tiếng với kiến trúc hướng sự kiện (Event-driven) và Non-blocking I/O.</p>

            <h3>Ưu điểm của Node.js</h3>
            <ul>
                <li><strong>Tốc độ cao:</strong> Xử lý hàng nghìn kết nối đồng thời rất tốt (Real-time application).</li>
                <li><strong>Fullstack JS:</strong> Dùng chung 1 ngôn ngữ cho cả Frontend và Backend.</li>
                <li><strong>NPM:</strong> Kho thư viện mã nguồn mở lớn nhất thế giới.</li>
            </ul>

            <h3>Tạo Server với Express.js</h3>
            <pre><code class="language-javascript">const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
});

app.listen(port, () => {
  console.log(\`Server đang chạy tại http://localhost:\${port}\`);
});</code></pre>
        `,
  },
  {
    id: 9,
    title: "Fullstack: Kết hợp Java Backend và ReactJS Frontend",
    category: "Fullstack",
    date: "26/12/2025",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Mô hình phổ biến tại các doanh nghiệp lớn: Spring Boot làm API và React/Vue xử lý giao diện.",
    content: `
            <p>Một trong những kiến trúc phổ biến nhất trong các dự án doanh nghiệp lớn (Enterprise) là tách biệt hoàn toàn Frontend và Backend.</p>

            <h3>Kiến trúc hệ thống</h3>
            <ul>
                <li><strong>Backend (Java Spring Boot):</strong> Chịu trách nhiệm xử lý Logic nghiệp vụ phức tạp, tính toán, tương tác với Database (MySQL/PostgreSQL) và trả về dữ liệu dạng JSON.</li>
                <li><strong>Frontend (ReactJS/VueJS):</strong> Gọi API từ Backend, render giao diện người dùng (SPA - Single Page Application).</li>
            </ul>

            <h3>Quy trình hoạt động</h3>
            <ol>
                <li>Người dùng bấm nút "Xem danh sách" trên React.</li>
                <li>React dùng <code>axios</code> hoặc <code>fetch</code> gửi request đến <code>localhost:8080/api/users</code>.</li>
                <li>Spring Boot nhận request, truy vấn DB, trả về JSON.</li>
                <li>React nhận JSON và cập nhật giao diện mà không load lại trang.</li>
            </ol>
            
            <blockquote>Sự kết hợp này tận dụng sự an toàn, chặt chẽ của Java và tính linh hoạt, trải nghiệm người dùng mượt mà của JavaScript hiện đại.</blockquote>
        `,
  },
];
