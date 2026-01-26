# Báo cáo Tổng quan Dự án Nekodustry

## 1. Giới thiệu chung
**Nekodustry** là một nền tảng "Hệ điều hành" (Operating System) cho cộng đồng Mindustry, đóng vai trò là lớp dịch vụ (service layer) tập trung. Dự án này kết hợp các chế độ chơi (Game Modes), công cụ phát triển (Tools), và quản lý cộng đồng (Community Management) vào một giao diện thống nhất, hiện đại.

- **Tên dự án:** Nekodustry Portal
- **Tác giả:** meohexa1a (Builder, Maintainer, System Thinker)
- **Công nghệ chính:** Next.js 16, React 19, Tailwind CSS v4, Radix UI.
- **Mô tả:** "Experimental Ecosystem" - Một hệ sinh thái thử nghiệm cung cấp cấu trúc hạ tầng cho cộng đồng phát triển tự nhiên thay vì áp đặt hướng đi cứng nhắc.

## 2. Triết lý thiết kế (Design Philosophy)
Dự án theo đuổi phong cách **"Systemic Minimalist"** (Tối giản hệ thống):
- **Thẩm mỹ:** Kỹ thuật, độ tương phản cao, phong cách "Glass & Steel" (Kính và Thép).
- **Cảm giác:** Tin cậy, Công nghiệp, Tương lai (Reliable, Industrial, Futuristic).
- **Nguyên tắc cốt lõi:**
    - **Service over authority:** Hạ tầng tồn tại để phục vụ, không phải để cai trị.
    - **Design for replacement:** Mọi thành phần đều được thiết kế với giả định sẽ bị thay thế.
    - **Abstraction over implementation:** Ưu tiên các lớp trừu tượng hóa và ranh giới dịch vụ.

## 3. Các Phân Hệ Chính (Service Nodes)

### A. MintyMDT (Version 3)
Đây là framework máy chủ siêu nhẹ (ultra-lightweight) dành cho Mindustry, tập trung vào trải nghiệm nhà phát triển.
- **Tính năng nổi bật:**
    - **Dependency Injection:** Sử dụng thư viện Feather để quản lý phụ thuộc, loại bỏ code rác (boilerplate) và trạng thái tĩnh (static state).
    - **Siêu nhẹ:** ~64KB, không sử dụng reflection nặng nề.
    - **Native Java 21:** Tận dụng các tính năng hiện đại của Java.
    - **Anti-Boilerplate:** Giảm thiểu code thừa, tập trung vào logic nghiệp vụ.

### B. Game Modes (Chế độ chơi)
Hệ thống cung cấp các môi trường gameplay đa dạng, được tối ưu hóa cho hiệu suất cao:

1.  **Common Game Mode (Core Operation Modules):**
    - Chế độ chơi tiêu chuẩn với các cải tiến về UX (Giao diện lệnh, Trạng thái nhàn rỗi thông minh, Mini-game trong menu).
    - Bao gồm: Survival, Attack, PvP, và Sandbox.

2.  **Catali.io (Project_Catali // Version_2.0):**
    - Thể loại: Tactical RPG Warfare (PvPvE).
    - Đặc điểm: Hệ thống lớp nhân vật (Vanguard, Phantom, Marksman, Architect), nền kinh tế trong game, và hệ thống kỹ năng tùy chỉnh.
    - Phong cách: Cyberpunk, Neon.

3.  **Ranked (Season 0: Pre-Alpha):**
    - Thể loại: 1v1 Competitive.
    - Đặc điểm: Tập trung vào sự công bằng tuyệt đối (True Fairness), mô hình sát thương xác định (deterministic), hệ thống ELO và xếp hạng theo mùa.
    - Phong cách: Gold/Amber (Vinh quang).

4.  **Onslaught Protocol:**
    - Thể loại: Hardcore PvP/PvE.
    - Đặc điểm: Chiến đấu đồng đội chiến thuật, chế độ Permadeath (chết vĩnh viễn), các sự kiện hỗn loạn do AI hỗ trợ.
    - Trạng thái: Đang phát triển (Development).

### C. Events (Sự kiện)
- Phân hệ quản lý các dịch vụ thời gian (temporal services) như giải đấu.
- **Trạng thái hiện tại:** Đang bảo trì (MAINTAINCE).

### D. About Neko (Thông tin tác giả)
- **meohexa1a:** Định vị bản thân là người xây dựng và vận hành hệ thống.
- **Quan điểm:** Xây dựng các hệ thống có thể tồn tại lâu hơn người tạo ra nó. Hệ thống (Nekodustry) cung cấp hạ tầng, Cộng đồng (Mindustry Tool) tạo nên văn hóa, và Tác giả (Operator) chỉ là người vận hành bảo trì.

## 4. Cấu trúc kỹ thuật
- **Frontend:** Sử dụng Next.js App Router.
- **Styling:** Tailwind CSS v4 với các biến màu semantic (OKLCH) và animations từ `tw-animate-css`.
- **Icons:** `lucide-react`.
- **Cấu hình:** Các cấu hình tĩnh (sidebar, navigation) được tách biệt trong thư mục `src/config`.
