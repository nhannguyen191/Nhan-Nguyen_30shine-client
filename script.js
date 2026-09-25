(function () {
  "use strict";

  var A = "assets/";
  var CHEVRON = '<svg viewBox="0 0 7 11" aria-hidden="true"><path d="M1.2 1 5.6 5.5 1.2 10" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

  // Visible content transcribed from the supplied screenshots. Captions cut off by the
  // container edge in the screenshots are completed with the live 30shine.com copy.
  var DATA = {
    hair: [
      { img: "svc-1.jpg", name: "Cắt tóc", price: "Giá từ 94.000VNĐ" },
      { img: "svc-2.jpg", name: "Uốn định hình", price: "Giá từ 386.000VNĐ" },
      { img: "svc-3.jpg", name: "Thay đổi màu tóc", price: "Giá từ 199.000VNĐ" }
    ],
    spa: [
      { img: "spa-1.jpg", name: "Gội dưỡng sinh thư giãn", price: "Giá từ 59.000VNĐ" },
      { img: "spa-2.jpg", name: "Lấy ráy tai êm", price: "Giá 70.000VNĐ" }
    ],
    collection: [
      { img: "collection-1.jpg", alt: "Bộ sưu tập Anh trai say hair" },
      { img: "collection-2.jpg", alt: "BTS K-Perm – Ready for new game" },
      { img: "collection-3.jpg", alt: "“Bad Boy”" }
    ],
    stars: [
      { img: "star-1.jpg", name: "Trần Quốc Anh", role: "Diễn viên điện ảnh Việt Nam" },
      { img: "star-2.jpg", name: "Dương Gió Tai", role: "Hot tiktoker Việt Nam" },
      { img: "star-3.jpg", name: "Nguyễn Bình An", role: "Diễn viên điện ảnh Việt Nam" },
      { img: "star-4.jpg", slice: 160 / 363, name: "Dương Quốc Hoàng", role: "Cơ thủ Bi A số 1 Việt Nam" }
    ],
    smile: [
      { img: "smile-1.jpg", caption: "Bí Quyết Dịch Vụ Đỉnh Cao tại 30Shine" },
      { img: "smile-2.jpg", caption: "Nụ Cười Dịch Vụ: Cam Kết Trên Cả Mong Đợi" },
      { img: "smile-3.jpg", caption: "Từ Trái Tim Đến Hành Động: Hài Lòng Trên Từng Điểm Chạm" },
      { img: "smile-4.jpg", slice: 173 / 374, caption: "30Shine: Nỗ Lực Từng Ngày Để Làm Hài Lòng Khách Hàng" }
    ],
    contest: [
      { img: "contest-1.jpg", name: "Hiếu Ngô", role: "Số báo danh: 13448" },
      { img: "contest-2.jpg", name: "Tư Đào", role: "Số báo danh: 1691" },
      { img: "contest-3.jpg", name: "Thành Lê", role: "Số báo danh: 13016" },
      { img: "contest-4.jpg", slice: 160 / 363, name: "Tân Phạm", role: "Số báo danh: 1870" }
    ],
    news: [
      { img: "news-1.jpg", caption: "CEO 30Shine kể chuyện từ bỏ công nghiệp hóa tay nghề stylist, khẳng định không phải cứ có tiền là mua được nhượng quyền", clamp: 3 },
      { img: "news-2.jpg", caption: "30Shine đặt mục tiêu 100 triệu USD doanh thu vào 2028", clamp: 3 },
      { img: "news-3.jpg", caption: "Thói quen bình thường tạo ra những điều phi thường ở 30Shine", clamp: 3 },
      { img: "news-4.jpg", slice: 173 / 374, caption: "Chuỗi cắt tóc nam lớn nhất Việt Nam với 1000 thợ: Đi 1 vòng thế giới tìm đường xuất ngoại, sắp thuê Giám đốc sáng tạo ngoại quốc", clamp: 3 }
    ],
    angels: [
      { img: "angel-1.jpg", name: "408 Nguyễn Thị Thập, Quận 7, TP.HCM" },
      { img: "angel-2.jpg", name: "36 Nguyễn Ảnh Thủ, Quận 12, TP HCM" },
      { img: "angel-3.jpg", name: "420 Huỳnh Tấn Phát, Quận 7, TP.HCM" },
      { img: "angel-4.jpg", slice: 160 / 363, name: "1361 Phạm Văn Thuận, Phường Thống Nhất, TP. Biên Hoà" }
    ],
    brands: [
      { img: "brand-1.png", name: "Glanzen", role: "Sản phẩm tạo kiểu đạt chứng nhận FDA Hoa Kỳ" },
      { img: "brand-2.png", name: "Dr for Skin", role: "Thương hiệu mỹ phẩm có 11 năm nghiên cứu từ các chuyên gia đầu ngành về da mụn tại Hàn Quốc" },
      { img: "brand-3.png", name: "Laborie", role: "Chăm tóc khoa học, khỏe chuẩn salon" },
      { img: "brand-4.png", slice: 160 / 363, name: "Vichy", role: "Với hơn 200 bằng sáng chế, 80 năm kinh nghiệm, 3000 kiểm nghiệm lâm sàng và bảng tự đánh giá và đang có mặt tại 5 Châu lục" }
    ],
    products: [
      { img: "product-1.jpg", name: "Tinh chất dưỡng da Dr For Skin All In One Serum For Men 120ml", price: "599.000 VNĐ" },
      { img: "product-2.jpg", name: "Xịt tạo kiểu tóc Glanzen X2 Booster 2025 tạo phồng dành cho tóc mỏng, xẹp", price: "279.000 VNĐ" },
      { img: "product-3.jpg", name: "Sữa Rửa Mặt Tràm Trà Dr.FORSKIN Tea tree 100g - 100g", price: "299.000 VNĐ" },
      { img: "product-4.jpg", name: "Sáp vuốt tóc nam Kevin Murphy Rough Rider không bóng giữ nếp tóc suốt - 30Shine phân phối chính hãng", price: "329.000 VNĐ" },
      { img: "product-5.jpg", name: "Sáp vuốt tóc Glanzen Clay Wax - Giữ nếp tới 12 giờ", price: "199.000 VNĐ" },
      { img: "product-6.jpg", slice: 99 / 228, name: "Gôm xịt giữ nếp tóc Glanzen 30Shine phân phối chính hãng giữ nếp tạo kiểu 380ml", price: "198.000 VNĐ" }
    ],
    best: [
      { img: "best-1.jpg", name: "Combo Giữ nếp X2", price: "618.000 VNĐ" },
      { img: "best-2.jpg", name: "Combo Giữ nếp X2", price: "488.000 VNĐ" },
      { img: "best-3.jpg", name: "Combo Tóc bồng bềnh Giữ nếp nhẹ tênh", price: "498.000 VNĐ" },
      { img: "best-4.jpg", slice: 173 / 374, name: "Combo Tóc bồng bềnh Giữ nếp nhẹ tênh", price: "558.000 VNĐ" }
    ],
    trust: [
      { img: "trust-1.jpg", caption: "Những câu hỏi thường gặp" },
      { img: "trust-2.jpg", caption: "Nói gì để có kiểu tóc ưng ý" },
      { img: "trust-3.jpg", caption: "Bảo quản xe cộ, đồ đạc" }
    ],
    space: [
      { img: "space-1.jpg", caption: "Không gian thoáng, mát, sạch" },
      { img: "space-2.jpg", caption: "Trang thiết bị hiện đại" },
      { img: "space-3.jpg", caption: "Ứng dụng đặt lịch độc quyền" }
    ],
    cities: [
      { img: "city-1.jpg", name: "Hà Nội", count: "20+ Salon" },
      { img: "city-2.jpg", name: "TP. Hồ Chí Minh", count: "50+ Salon" },
      { img: "city-3.jpg", name: "Đà Nẵng", count: "2+ Salon" },
      { img: "city-4.jpg", name: "Các Thành phố khác", count: "20+ Salon", dots: true }
    ]
  };

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function img(src, alt, lazy) {
    return '<img src="' + A + src + '" alt="' + esc(alt || "") + '"' + (lazy === false ? "" : ' loading="lazy"') + ">";
  }

  // ---------- Grids ----------
  var grids = {
    hair: serviceCard,
    spa: serviceCard,
    collection: function (d) { return img(d.img, d.alt); },
    trust: captionCard,
    space: captionCard,
    cities: function (d) {
      return '<a class="city-card" href="#" data-inert>' + img(d.img, "") +
        '<span class="sr-only">' + esc(d.name) + " – " + esc(d.count) + "</span></a>";
    }
  };

  function serviceCard(d) {
    return '<article class="service-card">' + img(d.img, d.name) +
      '<div class="service-card__body"><h3 class="service-card__name">' + esc(d.name) + "</h3>" +
      '<div class="service-card__meta"><span class="service-card__price">' + esc(d.price) + "</span>" +
      '<a class="more-link" href="#" data-inert aria-label="Tìm hiểu thêm về ' + esc(d.name) + '">Tìm hiểu thêm ' + CHEVRON + "</a></div></div></article>";
  }

  function captionCard(d) {
    return "<figure>" + img(d.img, "") + '<figcaption class="grid-caption">' + esc(d.caption) + "</figcaption></figure>";
  }

  document.querySelectorAll("[data-render]").forEach(function (el) {
    var key = el.getAttribute("data-render");
    el.innerHTML = DATA[key].map(grids[key]).join("");
  });

  // ---------- Rails ----------
  function railItem(d) {
    var media = '<div class="rail-media' + (d.slice ? " is-partial" : "") + '"' +
      (d.slice ? ' style="--slice:' + (d.slice * 100).toFixed(2) + '%"' : "") + ">" +
      img(d.img, d.name || d.caption) + "</div>";
    var text = "";
    if (d.caption) text += '<p class="rail-caption clamp-' + (d.clamp || 2) + '">' + esc(d.caption) + "</p>";
    if (d.name) text += '<p class="rail-name clamp-2">' + esc(d.name) + "</p>";
    if (d.role) text += '<p class="rail-role clamp-2">' + esc(d.role) + "</p>";
    if (d.price) text += '<p class="rail-price">' + esc(d.price) + "</p>";
    return '<article class="rail-item">' + media + text + "</article>";
  }

  var ARROW_L = '<svg viewBox="0 0 16 30" aria-hidden="true"><path d="M14 2 2 15l12 13" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>';
  var ARROW_R = '<svg viewBox="0 0 16 30" aria-hidden="true"><path d="m2 2 12 13L2 28" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>';

  document.querySelectorAll("[data-rail]").forEach(function (rail) {
    var key = rail.getAttribute("data-rail");
    rail.innerHTML =
      '<button type="button" class="rail-btn rail-btn--prev" aria-label="Trước">' + ARROW_L + "</button>" +
      '<div class="rail-track">' + DATA[key].map(railItem).join("") + "</div>" +
      '<button type="button" class="rail-btn rail-btn--next" aria-label="Tiếp">' + ARROW_R + "</button>";
    var track = rail.querySelector(".rail-track");
    var prev = rail.querySelector(".rail-btn--prev");
    var next = rail.querySelector(".rail-btn--next");
    function step() {
      var item = track.querySelector(".rail-item");
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return item ? item.getBoundingClientRect().width + gap : 300;
    }
    function place() {
      var media = track.querySelector(".rail-media");
      if (media) rail.style.setProperty("--media-h", media.offsetHeight + "px");
    }
    function update() {
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    }
    prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", function () { place(); update(); });
    window.addEventListener("load", place);
    place();
    update();
  });

  // ---------- Hero dots (13 slides visible in the screenshot, 2nd active) ----------
  var dots = document.querySelector(".hero-dots");
  for (var i = 0; i < 13; i++) {
    var s = document.createElement("span");
    if (i === 1) s.className = "is-active";
    dots.appendChild(s);
  }

  // ---------- Rating stars (3 of 5 filled, as shown) ----------
  var STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="COLOR" d="M12 1.8l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.9l-6.4 3.5L7 14.3l-5.3-5 7.2-.9z"/></svg>';
  var starsEl = document.querySelector(".stars");
  var sh = "";
  for (var j = 0; j < 5; j++) sh += STAR.replace("COLOR", j < 3 ? "#fadb14" : "#ececec");
  starsEl.innerHTML = sh;

  // ---------- Mobile menu ----------
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("primary-nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });

  // ---------- Scroll to top ----------
  document.querySelector(".fab--top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });

  // ---------- Inert prototype controls ----------
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-inert]");
    if (a) e.preventDefault();
  });
  document.getElementById("booking-form").addEventListener("submit", function (e) { e.preventDefault(); });
})();
