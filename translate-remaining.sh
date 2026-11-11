#!/bin/bash

# iletisim-en.html (Contact)
sed -i '
s|title>İletişim|title>Contact|g
s|Asel ile iletişime geçin|Contact Asel|g
s|İletişim Bilgileri|Contact Information|g
s|Bize Ulaşın|Contact Us|g
s|İsim|Name|g
s|E-posta|Email|g
s|Telefon|Phone|g
s|Mesajınız|Your Message|g
s|Mesajınızı buraya yazın|Write your message here|g
s|Gönder|Send|g
s|Adres|Address|g
s|Çalışma Saatleri|Business Hours|g
s|Pazartesi - Cuma|Monday - Friday|g
s|Cumartesi|Saturday|g
s|Pazar|Sunday|g
s|Kapalı|Closed|g
s|KVKK metnini okudum ve kabul ediyorum|I have read and accept the GDPR text|g
s|Lütfen KVKK metnini kabul edin|Please accept the GDPR text|g
' iletisim-en.html

# sertifikalar-en.html (Certificates)
sed -i '
s|title>Sertifikalar|title>Certificates|g
s|ASEL sertifikaları ve belgeler|ASEL certificates and documents|g
s|Kalite Belgeleri|Quality Certificates|g
s|ISO 9001:2015 Kalite Yönetim Sistemi|ISO 9001:2015 Quality Management System|g
s|ISO 14001:2015 Çevre Yönetim Sistemi|ISO 14001:2015 Environmental Management System|g
s|Marka Tescil Belgesi|Trademark Registration Certificate|g
s|Yerli Malı Belgesi|Domestic Product Certificate|g
s|Büyütmek için tıklayın|Click to enlarge|g
s|Kapat|Close|g
' sertifikalar-en.html

# satis-noktalari-en.html (Dealers)
sed -i '
s|title>Satış Noktaları|title>Dealer Locations|g
s|ASEL ürünlerini bulabileceğiniz satış noktaları|Dealer locations where you can find ASEL products|g
s|Satış Noktalarımız|Our Dealers|g
s|Türkiye'"'"'nin her yerinde güvenilir bayilerimiz|Our reliable dealers throughout Turkey|g
s|Arama|Search|g
s|Şehir Seçin|Select City|g
s|Tüm Şehirler|All Cities|g
s|satış noktası bulundu|dealers found|g
s|Öne Çıkan Bayi|Featured Dealer|g
s|Telefon|Phone|g
s|E-posta|Email|g
s|Adres|Address|g
s|Haritada Göster|Show on Map|g
' satis-noktalari-en.html

echo "Translated remaining English pages"
