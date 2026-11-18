# Kaldırılan başlıklar — yedek

Bu dosya siteden **linklenmez**. Kaldırılan her başlık/etiket, bulunduğu dosya ve tam HTML parçasıyla saklanır. “Şu kalsın” denirse ilgili madde `original_html` ile tek tek geri konabilir.

- Kaynak commit (ilk tur, kaldırmadan önceki hali): `49f24a889bcc9e9f175ab90276843540451d06fa`
- İkinci tur kaynak commit (bu maddelerin kaldırmadan önceki hali): `d93db4f6d79b69da2a628f53166f127bed013cf1`
- İkinci tur yedek tarihi: 2026-11-18 17:02 Europe/Istanbul
- Yedek tarihi: 2026-11-18 16:33 Europe/Istanbul
- Geri ekleme: aşağıdaki her maddede **Yeni HTML** geçen yeri **Orijinal HTML** ile değiştirin.

---

## `index-tr-40412-card-sessiz`

- **Kaldırılan metin:** Sınıfının en sessizi
- **Dosya:** `index.html`
- **Satır (commit 49f24a8):** 59
- **Dil:** tr
- **Konum / bağlam:** Ana sayfa ürün kaydırıcısı, ASHT-40412 kartı açıklama satırı

Orijinal HTML:

```html
<p>1250 Nm · 5500 r.p.m · Sınıfının en sessizi</p>
```

Yeni HTML (yerine konan):

```html
<p>1250 Nm · 5500 r.p.m</p>
```

---

## `index-en-40412-card-quietest`

- **Kaldırılan metin:** The quietest in its class
- **Dosya:** `index-en.html`
- **Satır (commit 49f24a8):** 59
- **Dil:** en
- **Konum / bağlam:** Homepage product carousel, ASHT-40412 card description line

Orijinal HTML:

```html
<p>1250 Nm · 5500 r.p.m · The quietest in its class</p>
```

Yeni HTML (yerine konan):

```html
<p>1250 Nm · 5500 r.p.m</p>
```

---

## `index-tr-inceleme-card`

- **Kaldırılan metin:** Derin bakış / İçini görün
- **Dosya:** `index.html`
- **Satır (commit 49f24a8):** 75
- **Dil:** tr
- **Konum / bağlam:** Ana sayfa ürün kaydırıcısı, inceleme.html’e giden patlatılmış görünüm kartı (başlık ve etiket)

Orijinal HTML:

```html
<div class="meta"><div class="tag">Derin bakış</div><h3>İçini görün</h3><p>Patlatılmış görünüm ve yakın plan detaylar.</p><span class="btn ghost">İncelemeye git ›</span></div>
```

Yeni HTML (yerine konan):

```html
<div class="meta"><div class="tag">1/2" · Çift Çekiç</div><h3>ASHT‑4050012</h3><p>Patlatılmış görünüm</p><span class="btn ghost">İncelemeye git ›</span></div>
```

---

## `index-en-inceleme-card`

- **Kaldırılan metin:** Deep dive / See inside
- **Dosya:** `index-en.html`
- **Satır (commit 49f24a8):** 75
- **Dil:** en
- **Konum / bağlam:** Homepage product carousel, card linking to the exploded-view page (heading and eyebrow tag)

Orijinal HTML:

```html
<div class="meta"><div class="tag">Deep dive</div><h3>See inside</h3><p>Exploded view and close-up details.</p><span class="btn ghost">View ›</span></div>
```

Yeni HTML (yerine konan):

```html
<div class="meta"><div class="tag">1/2" · Twin Hammer</div><h3>ASHT‑4050012</h3><p>Exploded view</p><span class="btn ghost">View ›</span></div>
```

---

## `index-tr-video-heading`

- **Kaldırılan metin:** Kullanım kolaylığı / Çocuk bile sökebiliyor.
- **Dosya:** `index.html`
- **Satır (commit 49f24a8):** 106
- **Dil:** tr
- **Konum / bağlam:** Ana sayfa saha videosu bölümü (eyebrow + H2). Video ve ‘tekerlek somunu / kullanıcı videosu’ açıklaması duruyor. Eyebrow, başlık kalkınca yetim kalmasın diye birlikte yedeklendi.

Orijinal HTML:

```html
      <p class="eyebrow">Kullanım kolaylığı</p>
      <h2>Çocuk bile sökebiliyor.</h2>
```

Yeni HTML (yerine konan):

```html
      <h2>Videolar</h2>
```

---

## `index-en-video-heading`

- **Kaldırılan metin:** Easy to use / Even a child can do it.
- **Dosya:** `index-en.html`
- **Satır (commit 49f24a8):** 106
- **Dil:** en
- **Konum / bağlam:** Homepage field-video section (eyebrow + H2). Video and factual lead kept. Eyebrow backed up so it is not left orphaned.

Orijinal HTML:

```html
      <p class="eyebrow">Easy to use</p>
      <h2>Even a child can do it.</h2>
```

Yeni HTML (yerine konan):

```html
      <h2>Videos</h2>
```

---

## `index-tr-rakamlarla`

- **Kaldırılan metin:** Rakamlarla
- **Dosya:** `index.html`
- **Satır (commit 49f24a8):** 118
- **Dil:** tr
- **Konum / bağlam:** Ana sayfa kırmızı bant, ASHT-4050012 katalog rakamları. Başlık yerine ürün kodu kullanıldı (katalog/resmi ürün adı; yeni slogan üretilmedi).

Orijinal HTML:

```html
    <h2 class="reveal">Rakamlarla</h2>
```

Yeni HTML (yerine konan):

```html
    <h2 class="reveal">ASHT‑4050012</h2>
```

---

## `index-en-by-the-numbers`

- **Kaldırılan metin:** By the numbers
- **Dosya:** `index-en.html`
- **Satır (commit 49f24a8):** 118
- **Dil:** en
- **Konum / bağlam:** Homepage red stats band for ASHT-4050012 catalog figures. Heading replaced with the product code.

Orijinal HTML:

```html
    <h2 class="reveal">By the numbers</h2>
```

Yeni HTML (yerine konan):

```html
    <h2 class="reveal">ASHT‑4050012</h2>
```

---

## `index-tr-fuarlar-heading`

- **Kaldırılan metin:** Fuarlarda ASEL.
- **Dosya:** `index.html`
- **Satır (commit 49f24a8):** 132
- **Dil:** tr
- **Konum / bağlam:** Ana sayfa fuar videosu bölümü. H2 kaldırıldı; mevcut ‘Fuarlar’ etiketi H2 yapıldı (videolar sayfasındaki bölüm etiketi). Eyebrow yetim kalmasın diye birlikte yedeklendi. Fuar videoları ve açıklama duruyor.

Orijinal HTML:

```html
      <p class="eyebrow">Fuarlar</p>
      <h2>Fuarlarda ASEL.</h2>
```

Yeni HTML (yerine konan):

```html
      <h2>Fuarlar</h2>
```

---

## `index-en-fuarlar-heading`

- **Kaldırılan metin:** ASEL at the fairs.
- **Dosya:** `index-en.html`
- **Satır (commit 49f24a8):** 132
- **Dil:** en
- **Konum / bağlam:** Homepage fair-video section. H2 removed; existing ‘Fairs’ label promoted to H2 so the eyebrow is not orphaned. Videos and factual lead kept.

Orijinal HTML:

```html
      <p class="eyebrow">Fairs</p>
      <h2>ASEL at the fairs.</h2>
```

Yeni HTML (yerine konan):

```html
      <h2>Fairs</h2>
```

---

## `index-tr-atolye-heading`

- **Kaldırılan metin:** Ankara’da, kendi atölyemizde.
- **Dosya:** `index.html`
- **Satır (commit 49f24a8):** 143
- **Dil:** tr
- **Konum / bağlam:** Ana sayfa atölye/üretim bölümü. H2 kaldırıldı; mevcut ‘Üretim’ etiketi H2 yapıldı. Fotoğraf, ‘Ankara'daki atölyemizden kareler.’ açıklaması ve Hakkımızda linki duruyor.

Orijinal HTML:

```html
      <p class="eyebrow">Üretim</p>
      <h2>Ankara’da, kendi atölyemizde.</h2>
```

Yeni HTML (yerine konan):

```html
      <h2>Üretim</h2>
```

---

## `index-en-atolye-heading`

- **Kaldırılan metin:** In our own workshop in Ankara.
- **Dosya:** `index-en.html`
- **Satır (commit 49f24a8):** 143
- **Dil:** en
- **Konum / bağlam:** Homepage workshop section. H2 removed; existing ‘Production’ label promoted to H2. Photo, lead and About link kept.

Orijinal HTML:

```html
      <p class="eyebrow">Production</p>
      <h2>In our own workshop in Ankara.</h2>
```

Yeni HTML (yerine konan):

```html
      <h2>Production</h2>
```

---

## `urun-asht-40412-meta-description`

- **Kaldırılan metin:** Sınıfının en sessizi.
- **Dosya:** `urun-asht-40412.html`
- **Satır (commit 49f24a8):** 7
- **Dil:** tr
- **Konum / bağlam:** ASHT-40412 sayfası meta description (üç etiket: description, og:description, twitter:description)

Orijinal HTML:

```html
content="ASHT‑40412 1/2" havalı somun sökme — 1250 Nm, çift çekiç, 1,78 kg. Sınıfının en sessizi."
```

Yeni HTML (yerine konan):

```html
content="ASHT‑40412 1/2" havalı somun sökme — 1250 Nm, çift çekiç, 1,78 kg."
```

---

## `urun-asht-40412-lead`

- **Kaldırılan metin:** Sınıfının en sessizi.
- **Dosya:** `urun-asht-40412.html`
- **Satır (commit 49f24a8):** 43
- **Dil:** tr
- **Konum / bağlam:** ASHT-40412 ürün sayfası hero açıklama satırı

Orijinal HTML:

```html
  <p class="lead reveal">Çift çekiç. 1250 Nm. Sınıfının en sessizi.</p>
```

Yeni HTML (yerine konan):

```html
  <p class="lead reveal">Çift çekiç. 1250 Nm.</p>
```

---

## `inceleme-eyebrow-derin-bakis`

- **Kaldırılan metin:** Derin bakış
- **Dosya:** `inceleme.html`
- **Satır (commit 49f24a8):** 44
- **Dil:** tr
- **Konum / bağlam:** inceleme.html hero eyebrow. H1 ‘ASHT‑4050012 inceleme’ duruyor; etiket kaldırıldı ki yetim kalmasın.

Orijinal HTML:

```html
  <p class="eyebrow reveal">Derin bakış</p>
```

Yeni HTML (yerine konan):

```html
(kaldırıldı, yerine bir şey konmadı)
```

---

## `videolar-tr-caption-cocuk`

- **Kaldırılan metin:** Çocuk bile sökebiliyor
- **Dosya:** `videolar.html`
- **Satır (commit 49f24a8):** 55
- **Dil:** tr
- **Konum / bağlam:** Videolar sayfası saha bölümü, cocuk-bile-sokuyor.mp4 figcaption başlığı. Slogan kaldırıldı; mevcut ‘Kullanıcı videosu’ etiketi bırakıldı.

Orijinal HTML:

```html
<figcaption><b>Çocuk bile sökebiliyor</b><span>Kullanıcı videosu</span></figcaption>
```

Yeni HTML (yerine konan):

```html
<figcaption><span>Kullanıcı videosu</span></figcaption>
```

---

## `videolar-en-caption-child`

- **Kaldırılan metin:** Even a child can do it
- **Dosya:** `videolar-en.html`
- **Satır (commit 49f24a8):** 55
- **Dil:** en
- **Konum / bağlam:** Videos page, field section, cocuk-bile-sokuyor.mp4 figcaption heading. Slogan removed; existing ‘User video’ label kept.

Orijinal HTML:

```html
<figcaption><b>Even a child can do it</b><span>User video</span></figcaption>
```

Yeni HTML (yerine konan):

```html
<figcaption><span>User video</span></figcaption>
```

---

<!-- ikinci tur -->

## `index-tr-atolye-lead`

- **Kaldırılan metin:** Ankara'daki atölyemizden kareler.
- **Dosya:** `index.html`
- **Satır (commit d93db4f):** 142
- **Dil:** tr
- **Konum / bağlam:** Ana sayfa üretim bölümü lead cümlesi. H2 ‘Üretim’, fotoğraf ve ‘Fabrikamızı görün’ düğmesi duruyor.

Orijinal HTML:

```html
      <p class="lead" style="margin-left:0">Ankara'daki atölyemizden kareler.</p>
```

Yeni HTML (yerine konan):

```html
(kaldırıldı, yerine bir şey konmadı)
```

---

## `index-en-atolye-lead`

- **Kaldırılan metin:** Moments from our workshop in Ankara.
- **Dosya:** `index-en.html`
- **Satır (commit d93db4f):** 142
- **Dil:** en
- **Konum / bağlam:** Homepage production section lead. H2 ‘Production’, photo and ‘See our factory’ button kept.

Orijinal HTML:

```html
      <p class="lead" style="margin-left:0">Moments from our workshop in Ankara.</p>
```

Yeni HTML (yerine konan):

```html
(kaldırıldı, yerine bir şey konmadı)
```

---

## `hakkimizda-tr-atolye-lead`

- **Kaldırılan metin:** Ankara'daki atölyemizden kareler.
- **Dosya:** `hakkimizda.html`
- **Satır (commit d93db4f):** 67
- **Dil:** tr
- **Konum / bağlam:** Hakkımızda üretim bölümü lead cümlesi. Eyebrow ‘Üretim’, H2 ‘Fabrikamız.’ ve fotoğraf ızgarası duruyor.

Orijinal HTML:

```html
      <p class="lead">Ankara'daki atölyemizden kareler.</p>
```

Yeni HTML (yerine konan):

```html
(kaldırıldı, yerine bir şey konmadı)
```

---

## `hakkimizda-en-atolye-lead`

- **Kaldırılan metin:** Moments from our workshop in Ankara.
- **Dosya:** `hakkimizda-en.html`
- **Satır (commit d93db4f):** 67
- **Dil:** en
- **Konum / bağlam:** About page production section lead. Eyebrow ‘Production’, H2 ‘Our factory.’ and photo grid kept.

Orijinal HTML:

```html
      <p class="lead">Moments from our workshop in Ankara.</p>
```

Yeni HTML (yerine konan):

```html
(kaldırıldı, yerine bir şey konmadı)
```

---

## `videolar-tr-saha-headings`

- **Kaldırılan metin:** Sahada ASEL / Gerçek kullanıcılar, gerçek işler.
- **Dosya:** `videolar.html`
- **Satır (commit d93db4f):** 52
- **Dil:** tr
- **Konum / bağlam:** Videolar sayfası #saha bölümü eyebrow + H2. Sayfa H1 zaten ‘Videolar’; yeni slogan üretilmedi. Mevcut lead ‘Servislerden ve atölyelerden kullanıcı videoları.’ ve video ızgarası duruyor.

Orijinal HTML:

```html
    <p class="eyebrow reveal">Sahada ASEL</p>
    <h2 class="reveal">Gerçek kullanıcılar, gerçek işler.</h2>
```

Yeni HTML (yerine konan):

```html
(kaldırıldı, yerine bir şey konmadı)
```

---

## `videolar-en-saha-headings`

- **Kaldırılan metin:** ASEL in the field / Real users, real work.
- **Dosya:** `videolar-en.html`
- **Satır (commit d93db4f):** 52
- **Dil:** en
- **Konum / bağlam:** Videos page #saha section eyebrow + H2. Page H1 is already ‘Videos’; no new slogan invented. Existing lead and video grid kept.

Orijinal HTML:

```html
    <p class="eyebrow reveal">ASEL in the field</p>
    <h2 class="reveal">Real users, real work.</h2>
```

Yeni HTML (yerine konan):

```html
(kaldırıldı, yerine bir şey konmadı)
```

---

## `videolar-tr-uretim-heading`

- **Kaldırılan metin:** Ankara’da üretim.
- **Dosya:** `videolar.html`
- **Satır (commit d93db4f):** 61
- **Dil:** tr
- **Konum / bağlam:** Videolar sayfası #uretim bölümü H2. Mevcut ‘Üretim’ etiketi H2 yapıldı ki eyebrow yetim kalmasın. Lead ‘Fabrikamızdan kareler.’ ve videolar duruyor.

Orijinal HTML:

```html
    <p class="eyebrow reveal">Üretim</p>
    <h2 class="reveal">Ankara’da üretim.</h2>
```

Yeni HTML (yerine konan):

```html
    <h2 class="reveal">Üretim</h2>
```

---

## `videolar-en-uretim-heading`

- **Kaldırılan metin:** Made in Ankara.
- **Dosya:** `videolar-en.html`
- **Satır (commit d93db4f):** 61
- **Dil:** en
- **Konum / bağlam:** Videos page #uretim section H2. Existing ‘Production’ label promoted to H2 so the eyebrow is not orphaned. Lead and videos kept.

Orijinal HTML:

```html
    <p class="eyebrow reveal">Production</p>
    <h2 class="reveal">Made in Ankara.</h2>
```

Yeni HTML (yerine konan):

```html
    <h2 class="reveal">Production</h2>
```

---
