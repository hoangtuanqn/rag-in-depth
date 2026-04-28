# MST Software — Tổng quan từ tài liệu chính thức

Giờ tôi có đủ dữ liệu để trình bày. Đây là những gì tôi biết về MST Software dựa trên hồ sơ công ty Q1/2026:

---

## 1. Thông tin pháp lý

|                       |                                                                  |
| --------------------- | ---------------------------------------------------------------- |
| **Tên đầy đủ**        | CÔNG TY TNHH MST SOFTWARE                                        |
| **Mã số thuế**        | 4300926254                                                       |
| **Ngày thành lập**    | 17/03/2026                                                       |
| **Địa chỉ**           | Khu dân cư 16, Thôn Thạch Trụ Tây, Xã Lân Phong, Tỉnh Quảng Ngãi |
| **Loại hình**         | Công ty TNHH 2 thành viên trở lên ngoài Nhà nước                 |
| **Ngành nghề (VSIC)** | 6219 — Lập trình máy tính khác                                   |

---

## 2. Ban sáng lập

| Họ tên          | Vai trò                                                      |
| --------------- | ------------------------------------------------------------ |
| Phạm Hoàng Tuấn | Founder & CEO — Người đại diện pháp luật                     |
| Vũ Việt Quang   | Co-Founder — Chiến lược sản phẩm & phát triển thị trường     |
| Mai Trung Hậu   | Co-Founder — Xây dựng tổ chức & định hình văn hóa chất lượng |

---

## 3. Sứ mệnh & Định vị

MST Software định vị rõ là **nhà cung cấp giải pháp phần mềm chuyên biệt cho thị trường MMO** — không phải một software house đa ngành. Triết lý cốt lõi là **Depth over Breadth**: thà làm ít mà sâu, còn hơn phủ rộng mà nông. Tầm nhìn là trở thành nhà cung cấp MMO Software hàng đầu Việt Nam và Đông Nam Á.

---

## 4. Danh mục sản phẩm

**4.1. Shop Acc Game** — Nền tảng thương mại điện tử chuyên mua bán tài khoản game, yêu cầu cao về bảo mật và xử lý giao dịch đồng thời.

**4.2. Website Check Scam** — Hệ thống kiểm tra tín nhiệm giao dịch trong cộng đồng MMO, chống lừa đảo, dữ liệu crowd-sourced kết hợp thuật toán phân tích.

**4.3. Logo & Brand Identity** — Thiết kế thương hiệu cho cá nhân/tổ chức trong ngách MMO và công nghệ.

**4.4. Custom Web Development** — Phát triển website theo yêu cầu, từ landing page đến platform phức tạp.

---

## 5. Technology Stack

| Tầng               | Công nghệ                                      |
| ------------------ | ---------------------------------------------- |
| **Backend**        | PHP (Laravel), TypeScript (NestJS, Express.js) |
| **Frontend**       | ReactJS, NextJS, Vanilla JS                    |
| **Database**       | MySQL, PostgreSQL, Redis                       |
| **Infrastructure** | Linux, Docker, Nginx                           |
| **Tooling**        | VS Code, GitHub, Notion, Lark                  |

---

## 6. Tiêu chuẩn kỹ thuật nội bộ

Đây là điểm đáng chú ý — MST Software áp dụng bộ chuẩn kỹ thuật nghiêm từ ngày đầu, không phải đợi đủ lớn mới làm:

- Code Review bắt buộc trước khi merge vào production
- Kiến trúc module hóa, giảm coupling
- Technical Debt được kiểm soát chủ động theo từng chu kỳ
- Unified coding standard toàn dự án
- Ưu tiên tối ưu query database cho nghiệp vụ giao dịch khối lượng lớn

---

## 7. Lộ trình phát triển

- **2026:** Hoàn thiện sản phẩm cốt lõi, chuẩn hóa CI/CD, xây dựng đội ngũ, thu thập product-market fit signal
- **2027–2028:** Mở rộng danh mục, xây dựng API/SDK cho bên thứ ba, mở rộng sang Đông Nam Á, xem xét mô hình SaaS
- **Dài hạn:** Hệ sinh thái MMO Software khép kín — one-stop platform cho toàn bộ nhu cầu của người vận hành MMO
