# Báo cáo Chi tiết Dự án Nekodustry

## 1. Giới thiệu & Tầm nhìn
**Nekodustry** được định nghĩa là một "Hệ điều hành" (Operating System) cho hệ sinh thái Mindustry. Dự án không chỉ là một website thông thường mà là một "Portal" (Cổng thông tin) tích hợp các dịch vụ, công cụ, và cộng đồng vào một giao diện hợp nhất.

- **Tên dự án:** Nekodustry Portal
- **Tác giả & Vận hành:** meohexa1a (Builder, Maintainer, System Thinker).
- **Mô tả cốt lõi:** "Experimental Ecosystem" - Một hệ sinh thái thử nghiệm nơi hạ tầng (infrastructure) phục vụ cho sự phát triển tự nhiên của văn hóa cộng đồng.
- **Trạng thái:** Đang phát triển tích cực (Active Development).

## 2. Triết lý Thiết kế & Trải nghiệm Người dùng (UX)
Dự án tuân thủ nghiêm ngặt triết lý **"Systemic Minimalist"** (Tối giản Hệ thống).

### A. Ngôn ngữ Thiết kế
- **Thẩm mỹ:** "Glass & Steel" (Kính & Thép) - Hiện đại, sắc sảo, kỹ thuật cao.
- **Màu sắc:** Sử dụng hệ màu **OKLCH** để đảm bảo độ tươi và tương phản tốt nhất trên mọi màn hình.
    - **Dark Mode:** Nền xanh đen sâu (`oklch(0.145 0 0)`) tạo cảm giác chuyên nghiệp ("Technical Aesthetic").
    - **Semantic Colors:** Sử dụng biến ngữ nghĩa (`--primary`, `--destructive`, `--status-success`) thay vì mã màu cứng.
- **Typography:**
    - **Geist Sans:** Cho nội dung chính và tiêu đề.
    - **Geist Mono:** Cho dữ liệu kỹ thuật, metadata, và các yếu tố UI (System Data).

### B. Nguyên tắc Cốt lõi
1.  **Service over Authority:** Hệ thống tồn tại để phục vụ, làm nền tảng cho cộng đồng, không phải để kiểm soát.
2.  **Abstraction over Implementation:** Ưu tiên thiết kế các lớp trừu tượng hóa (interfaces/layers) hơn là tối ưu hóa sớm các chi tiết cài đặt.
3.  **Design for Replacement:** Mọi thành phần (kể cả người vận hành) đều được thiết kế để có thể thay thế mà không làm sập hệ thống.

## 3. Kiến trúc Kỹ thuật (Technical Architecture)

### A. Tech Stack (Công nghệ lõi)
Dự án sử dụng những công nghệ mới nhất trong hệ sinh thái React:
- **Framework:** **Next.js 16** (App Router).
- **Core:** **React 19** (Sử dụng React Compiler).
- **Styling:** **Tailwind CSS v4** (Cấu hình trực tiếp qua `@theme inline` trong CSS, không dùng file config JS).
- **UI Primitives:** **Radix UI** (thông qua `shadcn/ui` base).
- **Icons:** `lucide-react`.
- **Animations:** `tw-animate-css` và `framer-motion`.

### B. Tổ chức Component
Mã nguồn được tổ chức theo cấu trúc phân cấp rõ ràng:
1.  **Route-Specific:** Component chỉ dùng cho 1 trang -> Đặt ngay trong thư mục trang đó (e.g., `src/app/(home)/hero-section.tsx`).
2.  **Domain Components (`src/components/app`):** Các component nghiệp vụ lớn, tái sử dụng trong một phạm vi (e.g., `AppSidebar`, `AppNavbar`, `AbstractBackground`).
3.  **Common Components (`src/components/common`):** Các thành phần UI nhỏ, đa dụng (e.g., `FeatureCard`, `FeatureItem`).
4.  **Base UI (`src/components/ui`):** Các thành phần cơ bản (Button, Input, Sheet) từ thư viện, được tùy biến style nhưng giữ nguyên logic.

### C. Tiêu chuẩn Phát triển (Coding Standards)
- **Formatting:** Prettier + prettier-plugin-tailwindcss.
- **Quy tắc File:** Giới hạn mềm ~400 dòng/file. Tách file khi logic quá phức tạp.
- **Hydration:** Tránh render không xác định (random/date) trực tiếp. Sử dụng `useEffect` hoặc `suppressHydrationWarning`.
- **Accessibility:** Các yếu tố trang trí bắt buộc có `aria-hidden="true"`.

## 4. Chi tiết Các Phân Hệ (Service Nodes)

### A. MintyMDT (Version 3)
Framework máy chủ Mindustry thế hệ mới, giải quyết vấn đề "Spaghetti Code" của các server truyền thống.
- **Kiến trúc:** Dependency Injection (DI) dựa trên thư viện **Feather**.
- **Đặc điểm:**
    - **Ultra Lightweight:** ~64KB.
    - **Native Java 21:** Sử dụng Records, Pattern Matching.
    - **Anti-Boilerplate:** Loại bỏ việc khởi tạo thủ công và biến static toàn cục.
    - **Ecosystem:** Tích hợp sẵn State Manager và Event System.

### B. Game Modes (Chế độ chơi)
Hệ thống các máy chủ game với trải nghiệm được tùy biến sâu:

#### 1. Common Game Mode (Core Modules)
- **Chủ đề:** Neon / System Override.
- **Tính năng UX:**
    - **Command Interface:** Giao diện lệnh trực quan (GUI Layer).
    - **Smart Idle State:** Tự động tối ưu hóa tài nguyên khi treo máy.
    - **Menu Mini Game:** Giải trí ngay trong menu.
- **Các chế độ con:** Survival (Amber), Attack (Rose), PvP (Violet), Sandbox (Cyan).

#### 2. Catali.io (Project_Catali // Version_2.0)
- **Thể loại:** Tactical RPG Warfare (PvPvE).
- **Phong cách:** Cyberpunk / High-Tech.
- **Hệ thống Lớp nhân vật (Classes):**
    - **The Vanguard:** Tank / Crowd Control (Cam).
    - **The Phantom:** Assassin / Burst (Tím).
    - **The Marksman:** DPS / Range (Đỏ).
    - **The Architect:** Support / Utility (Xanh lục).
- **Cơ chế:** Hệ thống kinh nghiệm (XP), Cây kỹ năng, và Shop vật phẩm trong game.

#### 3. Ranked (Season 0: Pre-Alpha)
- **Thể loại:** 1v1 Competitive.
- **Phong cách:** Gold / Glory (Vàng kim).
- **Tính năng:**
    - **True Fairness:** Loại bỏ yếu tố ngẫu nhiên (RNG), sát thương xác định.
    - **ELO System:** Hệ thống xếp hạng leo rank từ Bronze đến Grandmaster.
    - **Seasonal Glory:** Reset theo mùa giải, phần thưởng vinh danh.

#### 4. Onslaught Protocol
- **Thể loại:** Hardcore Team Combat.
- **Phong cách:** Red / Danger (Đỏ báo động).
- **Tính năng:**
    - **Permadeath:** Chế độ chết vĩnh viễn trong lượt chơi.
    - **AI-Assisted Chaos:** Sự kiện ngẫu nhiên do AI điều khiển.
    - **Live Feed:** Theo dõi diễn biến trận đấu thời gian thực (Sector 7).

### C. Community & Events
- **Events:** Đang trong trạng thái bảo trì.
- **About Neko:** Trang giới thiệu cá nhân nhưng được trình bày như một giao thức định danh ("Identity Protocol"), nhấn mạnh vào vai trò vận hành hệ thống bền vững.

## 5. Kết luận
Nekodustry không chỉ là một trang web giới thiệu game server, mà là một **nền tảng kỹ thuật số hoàn chỉnh**. Nó áp dụng tư duy thiết kế phần mềm hiện đại (Service-Oriented, Modular, High-Performance) vào việc quản lý và vận hành cộng đồng game, tạo ra một trải nghiệm người dùng nhất quán, chuyên nghiệp và đầy cảm hứng.
