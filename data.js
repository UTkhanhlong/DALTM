const posts = [
  {
    id: 1,
    title: "Giới thiệu về Java – Ngôn ngữ lập trình đa nền tảng",
    category: "Lập trình",
    date: "10/12/2025",
    image:
      "https://th.bing.com/th/id/OIP.h71v8V2lnEWDsYr9m4-WrQHaE8?w=279&h=186&c=7&r=0&o=5&cb=ucfimg2&dpr=1.3&pid=1.7&ucfimg=1",
    excerpt:
      "Khám phá ngôn ngữ Java — nền tảng vững chắc cho các ứng dụng web, di động và backend.",
    content: `
            <p>Chào các bạn! Mình là sinh viên năm 4, đang vật lộn với đồ án chuyên nghành và chuẩn bị CV apply đây. Java là ngôn ngữ đầu tiên mình học nghiêm túc ở trường (môn Lập trình hướng đối tượng), ban đầu thấy dài dòng khó chịu nhưng giờ quen rồi thì thấy ổn áp lắm.</p>

            <p><strong>Java</strong> được tạo ra năm 1995 bởi Sun Microsystems (giờ thuộc Oracle). Điểm đặc biệt nhất là <em>"Write Once, Run Anywhere"</em> – viết code một lần, chạy được ở mọi nơi nhờ JVM (Java Virtual Machine).</p>
            
            <h3>Tại sao mình đang học Java?</h3>
            <ul>
                <li><strong>Đa nền tảng:</strong> Code chạy được trên Windows, Mac, Linux mà không cần sửa gì nhiều.</li>
                <li><strong>Nhiều tài liệu:</strong> Sách, video, bài tập trên mạng đầy ra, đặc biệt là mấy kênh YouTube tiếng Việt dạy Java cơ bản.</li>
                <li><strong>Dễ tìm đồ án mẫu:</strong> Làm đồ án quản lý thư viện, quán cà phê, shop quần áo... toàn dùng Java Swing hoặc JavaFX.</li>
                <li><strong>Cơ bản vững:</strong> Học Java kỹ giúp mình dễ hiểu các ngôn ngữ khác sau này.</li>
            </ul>

            <h3>Hello World đầu tiên của mình</h3>
            <pre><code class="language-java">public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Xin chào Java! Mình đang học đây ạ 🙈");
        
        int a = 5;
        int b = 10;
        System.out.println("Tổng là: " + (a + b));
        
        // Mình hay thêm mấy dòng in ra để kiểm tra
        for(int i = 1; i <= 5; i++) {
            System.out.println("Lặp lần " + i);
        }
    }
}</code></pre>

            <blockquote>Mình hay bị quên dấu chấm phẩy (;), lỗi đỏ lòm cả màn hình luôn. Giờ thì cài IntelliJ IDEA, nó gợi ý sẵn nên đỡ hơn nhiều.</blockquote>

            <h3>Mẹo cho sinh viên mới học Java</h3>
            <ul>
                <li>Dùng IntelliJ IDEA Community (miễn phí) hoặc NetBeans – dễ dùng hơn Eclipse.</li>
                <li>Làm thật nhiều bài tập cơ bản: tính tổng, kiểm tra số nguyên tố, sắp xếp mảng...</li>
                <li>Đừng sợ lỗi, cứ run thử rồi sửa dần là quen.</li>
            </ul>

            <p>Java không phải ngôn ngữ “dễ thương” nhất nhưng học xong phần cơ bản là mình tự tin làm đồ án lắm rồi. Các bạn năm nhất năm hai đang học thì cố lên nhé!</p>
        `,
  },
  {
    id: 2,
    title: "Lập trình hướng đối tượng trong Java (OOP)",
    category: "Java",
    date: "12/12/2025",
    image:
      "https://th.bing.com/th/id/OIP.jOGXYwkPX1KlKVpAZbREHwHaEo?w=245&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.3&pid=1.7&ucfimg=1",
    excerpt:
      "Tìm hiểu 4 nguyên lý cơ bản của OOP trong Java và ví dụ thực hành.",
    content: `
            <p>Hồi năm 2 học môn OOP mình suýt rớt luôn vì không hiểu sao phải chia nhỏ code thành class. Giờ làm đồ án mới thấy nếu không có OOP thì code loạn xạ, sửa một chỗ hỏng cả thế giới luôn.</p>

            <p>Java bắt buộc phải dùng OOP, nên nắm 4 nguyên lý này là “sống sót” được môn học và đồ án.</p>
            
            <h3>1. Đóng gói (Encapsulation)</h3>
            <p>Giấu dữ liệu, chỉ cho phép truy cập qua getter/setter.</p>
            <pre><code class="language-java">class SinhVien {
    private String hoTen;
    private double diemTB;

    public void setHoTen(String ten) {
        if(ten != null && !ten.isEmpty()) this.hoTen = ten;
    }
    public String getHoTen() { return hoTen; }

    public void setDiemTB(double diem) {
        if(diem >= 0 && diem <= 10) this.diemTB = diem;
    }
    public double getDiemTB() { return diemTB; }
}</code></pre>

            <h3>2. Kế thừa (Inheritance)</h3>
            <pre><code class="language-java">class DongVat {
    void keu() { System.out.println("Ơ... ơ..."); }
}

class Cho extends DongVat {
    void keu() { System.out.println("Gâu gâu!"); } // override
    void veDuoi() { System.out.println("Vẫy đuôi ing ỏi"); }
}</code></pre>

            <h3>3. Đa hình (Polymorphism)</h3>
            <p>Cùng một phương thức nhưng hành vi khác nhau (thường qua override).</p>

            <h3>4. Trừu tượng (Abstraction)</h3>
            <pre><code class="language-java">abstract class HinhHoc {
    abstract double tinhDienTich();
}

class HinhTron extends HinhHoc {
    double banKinh;
    double tinhDienTich() { return Math.PI * banKinh * banKinh; }
}</code></pre>

            <p>Trong đồ án mình hay dùng class SinhVien, LopHoc, MonHoc... kế thừa và đóng gói rõ ràng để thầy cô chấm dễ thấy cấu trúc.</p>

            <p>Mẹo: Vẽ sơ đồ class (UML) trước khi code, thầy cô thích lắm, điểm cao hơn hẳn!</p>
        `,
  },
  {
    id: 3,
    title: "So sánh Java và Python: Nên chọn ngôn ngữ nào?",
    category: "Phân tích",
    date: "15/12/2025",
    image: "https://static.topcv.vn/cms/ngon-ngu-lap-trinh-python-765b9eded15410.png",
    excerpt:
      "Cùng xem điểm mạnh và yếu của Java và Python để lựa chọn phù hợp.",
    content: `
            <p>Mình học Java ở trường chính, còn Python tự học thêm để làm mấy bài tập Machine Learning. Hai đứa bạn cùng lớp cãi nhau suốt “Java tốt hơn” vs “Python dễ hơn”, mình thì thấy tùy mục đích thôi.</p>

            <h3>Bảng so sánh đơn giản cho sinh viên</h3>
            <table border="1" style="width:100%; border-collapse: collapse;">
                <tr>
                    <th style="padding: 8px;">Tiêu chí</th>
                    <th style="padding: 8px;">Java</th>
                    <th style="padding: 8px;">Python</th>
                </tr>
                <tr>
                    <td style="padding: 8px;">Cú pháp</td>
                    <td style="padding: 8px;">Dài dòng, nhiều dấu {} ;</td>
                    <td style="padding: 8px;">Ngắn gọn, dễ đọc</td>
                </tr>
                <tr>
                    <td style="padding: 8px;">Tốc độ chạy</td>
                    <td style="padding: 8px;">Nhanh hơn</td>
                    <td style="padding: 8px;">Chậm hơn</td>
                </tr>
                <tr>
                    <td style="padding: 8px;">Dùng trong trường</td>
                    <td style="padding: 8px;">Đồ án quản lý, desktop app</td>
                    <td style="padding: 8px;">Xử lý dữ liệu, AI cơ bản</td>
                </tr>
                <tr>
                    <td style="padding: 8px;">Thời gian học</td>
                    <td style="padding: 8px;">Lâu hơn vì phải học OOP kỹ</td>
                    <td style="padding: 8px;">Nhanh, code vài dòng là chạy</td>
                </tr>
            </table>

            <h3>Mình chọn thế nào?</h3>
            <p>Đồ án tốt nghiệp bắt buộc Java → phải học Java.<br>
            Muốn thử AI, phân tích dữ liệu Excel → học thêm Python.<br>
            Không cần chọn một, học cả hai cũng được, thời gian rảnh thì tự học trên YouTube thôi.</p>

            <p>Các bạn đừng stress quá chuyện “ngôn ngữ nào hot hơn”. Ở trường cứ học tốt cái thầy dạy là ổn, còn lại tự học thêm dần dần nha!</p>
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
            <p>Mình học JavaScript khi làm đồ án web môn Công nghệ Web. Ban đầu chỉ biết HTML/CSS là trang tĩnh cứng đơ, thêm JS vào mới thấy web “sống” thật sự.</p>

            <h3>JS làm được gì hay ho?</h3>
            <ul>
                <li>Thay đổi nội dung, màu sắc khi click.</li>
                <li>Validate form (kiểm tra email, mật khẩu).</li>
                <li>Hiện thông báo, popup.</li>
                <li>Làm slider ảnh, menu dropdown.</li>
            </ul>

            <h3>Ví dụ mình hay dùng trong đồ án</h3>
            <pre><code class="language-javascript">const nut = document.querySelector('#nutBam');
const thongBao = document.querySelector('#thongbao');

nut.addEventListener('click', () => {
    thongBao.textContent = 'Bạn vừa bấm nút nè! 🎉';
    thongBao.style.color = 'green';
    thongBao.style.fontSize = '20px';
});

// Validate form đăng ký
document.querySelector('form').addEventListener('submit', (e) => {
    const email = document.querySelector('#email').value;
    if (!email.includes('@')) {
        alert('Email phải có @ chứ bộ!');
        e.preventDefault(); // ngăn submit
    }
});</code></pre>

            <h3>Biến trong JS</h3>
            <pre><code class="language-javascript">let ten = "Nam";     // có thể thay đổi
const tuoi = 22;     // không thay đổi
var diem = 8.5;      // cũ rồi, tránh dùng

let monHoc = ['Java', 'Web', 'Database'];</code></pre>

            <p>Mẹo: Dùng console.log() thật nhiều để xem giá trị biến, đỡ phải đoán mò.</p>

            <p>JS là ngôn ngữ dễ học nhất để làm web động. Làm đồ án xong mình tự tin hơn hẳn phần frontend luôn!</p>
        `,
  },
  {
    id: 5,
    title: "ES6 và những tính năng hiện đại trong JavaScript",
    category: "JavaScript",
    date: "18/12/2025",
    image:
      "https://th.bing.com/th/id/OIP.g0eeZ_1DymnLoAHlR1-uHgHaEK?w=296&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.3&pid=1.7&ucfimg=1",
    excerpt:
      "Nâng cấp kỹ năng JS của bạn với Arrow Functions, Template Literals và Destructuring.",
    content: `
            <p>ES6 làm code JS đẹp hơn rất nhiều. Trước khi biết ES6 mình code dài dòng lắm, giờ dùng mấy tính năng mới thấy “pro” hơn hẳn.</p>

            <h3>Arrow Function – viết ngắn hơn</h3>
            <pre><code class="language-javascript">// Cũ
function cong(a, b) { return a + b; }

// Mới
const cong = (a, b) => a + b;

const binhPhuong = x => x * x;</code></pre>

            <h3>Template Literals – chèn biến dễ</h3>
            <pre><code class="language-javascript">const ten = "Nam";
const diem = 8.5;
console.log(\`Chào \${ten}, điểm của bạn là \${diem}\`);</code></pre>

            <h3>Destructuring – lấy dữ liệu nhanh</h3>
            <pre><code class="language-javascript">const sv = { ten: 'Lan', lop: 'K64', diem: 9.0 };
const { ten, diem } = sv; // lấy riêng ten và diem

const mang = [10, 20, 30];
const [dau, hai] = mang; // dau = 10, hai = 20</code></pre>

            <h3>Spread Operator</h3>
            <pre><code class="language-javascript">const mang1 = [1, 2];
const mang2 = [...mang1, 3, 4]; // [1,2,3,4]</code></pre>

            <p>Mấy cái này mình dùng suốt trong đồ án web, code sạch hơn, thầy cô nhìn cũng thích.</p>

            <p>Tip: Học ES6 xong là đủ làm đồ án frontend cơ bản rồi, không cần học framework phức tạp quá sớm đâu.</p>
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
            <p>Phần này mình thấy khó nhất khi học JS vì liên quan đến gọi API (lấy dữ liệu từ server). Đồ án cần hiển thị danh sách sinh viên từ database là phải dùng cái này.</p>

            <h3>Tại sao cần bất đồng bộ?</h3>
            <p>Khi gọi API lấy dữ liệu, trình duyệt không chờ mà tiếp tục chạy code → cần Promise hoặc async/await để “chờ” dữ liệu về.</p>

            <h3>Promise cơ bản</h3>
            <pre><code class="language-javascript">fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log('Lỗi rồi:', err));</code></pre>

            <h3>Async/Await – đẹp hơn</h3>
            <pre><code class="language-javascript">const layDuLieu = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Có lỗi:', error);
    }
};

layDuLieu();</code></pre>

            <p>Mình dùng async/await trong đồ án để lấy danh sách sản phẩm từ backend về hiển thị trên web. Code dễ đọc hơn nhiều!</p>

            <p>Mẹo: Luôn có try-catch khi dùng await, không là lỗi crash web luôn.</p>
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
            <p>Mình mới học Spring Boot để làm project cá nhân nhỏ, chưa làm dự án công ty gì đâu. Nhưng thấy thầy cô khuyên dùng vì dễ làm API nhanh.</p>

            <p>Spring Boot giúp tạo backend Java nhanh, không cần config phức tạp như Spring cũ.</p>

            <h3>Bắt đầu siêu dễ</h3>
            <p>Vào start.spring.io → chọn Web, JPA, MySQL → Generate → mở bằng IntelliJ → chạy luôn!</p>

            <h3>Ví dụ API đơn giản mình làm trong đồ án</h3>
            <pre><code class="language-java">@RestController
@RequestMapping("/api/sinhvien")
public class SinhVienController {

    @Autowired
    private SinhVienRepository repo;

    @GetMapping
    public List<SinhVien> layTatCa() {
        return repo.findAll();
    }

    @PostMapping
    public SinhVien them(@RequestBody SinhVien sv) {
        return repo.save(sv);
    }
}</code></pre>

            <p>Chỉ vài dòng là có API thêm/sửa/xóa sinh viên rồi, kết nối MySQL dễ dàng.</p>

            <p>Mẹo cho sinh viên:</p>
            <ul>
                <li>Dùng Lombok (@Data, @Entity) để giảm code lặp.</li>
                <li>Xem tutorial trên YouTube “Spring Boot đồ án quản lý” – nhiều lắm.</li>
                <li>Đừng sợ, cứ làm theo hướng dẫn là chạy được.</li>
            </ul>

            <p>Học Spring Boot giúp đồ án backend “xịn” hơn hẳn so với dùng servlet thuần.</p>
        `,
  },
  {
    id: 8,
    title: "Node.js: Chạy JavaScript ở phía Server",
    category: "Backend",
    date: "24/12/2025",
    image:
      "https://asd.mediacdn.vn/adt/tuyendungvccorp/khai-niem-nodejs_dbfb494e-d749-410d-b19e-884f2edf0359.jpg",
    excerpt:
      "Không chỉ ở frontend, JavaScript còn thống trị backend nhờ môi trường Node.js.",
    content: `
            <p>Mình học Node.js tự học để làm project cá nhân nhỏ, thấy dễ hơn Spring Boot vì dùng JS luôn.</p>

            <p>Node.js cho phép chạy JS ở backend, dùng Express để tạo API nhanh.</p>

            <h3>Tạo server cơ bản</h3>
            <pre><code class="language-javascript">const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello từ Node.js backend!');
});

app.get('/api/monhoc', (req, res) => {
    res.json([
        { ma: 'JAVA', ten: 'Lập trình Java' },
        { ma: 'WEB', ten: 'Công nghệ Web' }
    ]);
});

app.listen(3000, () => {
    console.log('Server chạy ở port 3000');
});</code></pre>

            <p>Chỉ cần npm init → npm install express → node index.js là chạy.</p>

            <p>Mình dùng Node.js cho đồ án nhỏ vì nhanh, còn đồ án chính thì dùng Spring Boot theo yêu cầu thầy.</p>

            <p>Ưu điểm: Code frontend backend cùng ngôn ngữ JS, đỡ phải chuyển qua chuyển lại.</p>
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
            <p>Đồ án chuyên ngành của mình đang làm kiểu này: Spring Boot backend + frontend thuần JS (hoặc React cơ bản). Chưa dám nhảy sâu vào React full vì sợ không kịp deadline.</p>

            <h3>Cách mình làm fullstack đơn giản</h3>
            <ul>
                <li>Backend Spring Boot: tạo API JSON.</li>
                <li>Frontend: HTML + JS thuần hoặc React cơ bản, dùng fetch gọi API.</li>
            </ul>

            <h3>Ví dụ gọi API từ frontend</h3>
            <pre><code class="language-javascript">async function layDanhSach() {
    try {
        const response = await fetch('http://localhost:8080/api/sinhvien');
        const data = await response.json();
        console.log(data);
        // Hiển thị lên table HTML
    } catch (err) {
        console.log('Lỗi kết nối');
    }
}</code></pre>

            <p>Lợi ích: Backend lo logic + database, frontend lo giao diện đẹp.</p>

            <p>Mẹo cho sinh viên: Làm đồ án thì tách riêng backend/frontend cho thầy cô thấy rõ cấu trúc, điểm cao hơn.</p>

            <p>Mình chưa đi làm nên chỉ biết đến mức này thôi, nhưng thấy cách làm này phổ biến trong đồ án trường mình lắm!</p>
        `,
  },
];