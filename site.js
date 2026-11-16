// Language switch for the landing page. English is in the HTML itself, so
// the page reads correctly with scripts off; Turkish is swapped in from here.
(function () {
  var TR = {
    navFeatures: 'Özellikler',
    navGet: 'Uygulama ya da web',
    navFaq: 'Sorular',
    openWeb: 'Web uygulamasını aç',
    eyebrow: 'Ücretsiz · Türkçe & İngilizce · Hesap gerekmez',
    heroTitle: 'Doldurulmuş değil,<br><i>özenle hazırlanmış</i> bir özgeçmiş.',
    heroLead: 'Özgeçmişinizi ve ön yazınızı canlı A4 önizlemesiyle yan yana yazın, işe alım uzmanlarının baktığı noktalara göre kontrol edin, temiz bir PDF ya da Word dosyası olarak aktarın.',
    download: 'Windows için indir',
    useWeb: 'Tarayıcıda kullan',
    fineVersion: 'Sürüm',
    featTitle: 'Bir iş başvurusu için gereken her şey',
    f1t: 'Yedi şablon',
    f1d: 'Güçlü kenar sütunlarından, aday takip sistemleri (ATS) için hazırlanmış sade tek sütuna kadar. İstediğiniz zaman değiştirin; içeriğiniz yerinde kalır.',
    f2t: 'CV Kontrolü',
    f2d: 'Somut önerilerle canlı puan: eksik iletişim bilgileri, özet uzunluğu, rakamsız maddeler, zayıf ifadeler, sayfa sayısı.',
    f3t: 'İlan Eşleştirme',
    f3d: 'Bir iş ilanı yapıştırın; ilandaki anahtar ifadelerden hangilerinin özgeçmişinizde geçtiğini, hangilerinin eksik olduğunu görün.',
    f4t: 'PDF ve Word olarak aktarma',
    f4d: 'Önizlemeyle birebir aynı, baskıya hazır A4 PDF ya da işveren Word istediğinde düzenlenebilir .docx.',
    f5t: 'Uyumlu ön yazılar',
    f5d: 'Ön yazıyı bir özgeçmişe bağlayın; adınızı, iletişim bilgilerinizi ve stilinizi oradan alsın.',
    f6t: 'Gizlilik esas',
    f6d: 'Hesap yok, yükleme yok. Belgeleriniz hem uygulamada hem tarayıcı sürümünde kendi cihazınızda saklanır.',
    trEyebrow: 'İki dil',
    trTitle: 'Uygulama ve belge için ayrı ayrı: Türkçe ya da İngilizce',
    trText: 'Türkçe arayüzle İngilizce CV yazın ya da tam tersi. Bölüm başlıkları, tarihler ve büyük harfler belgenin diline uyar.',
    darkText: 'Açık ve koyu tema hazır gelir.',
    getTitle: 'İki kullanım yolu',
    appTitle: 'Windows uygulaması',
    app1: 'PDF ve Word dosyalarını doğrudan seçtiğiniz klasöre kaydeder',
    app2: 'Belgeler bilgisayarınızdaki bir dosyada, otomatik yedek kopyasıyla saklanır',
    app3: 'İnternet bağlantısı olmadan çalışır',
    appFine: 'Yükleyici henüz kod imzalı olmadığı için Windows “bilinmeyen yayıncı” uyarısı gösterebilir. “Ek bilgi”yi, ardından “Yine de çalıştır”ı seçin.',
    webTitle: 'Tarayıcınızda',
    web1: 'Kurulum gerekmez; Windows, Mac ve Linux’ta çalışır',
    web2: 'Belgeler bu cihazda, bu tarayıcının depolama alanında saklanır',
    web3: 'PDF aktarma, tarayıcının yazdırma penceresi üzerinden yapılır',
    webFine: 'Tarayıcı verilerini temizlemek belgelerinizi siler. Bir kopya saklamak için Ayarlar’daki “Tüm belgeleri yedekle”yi kullanın. En iyi Chrome ya da Edge’de çalışır.',
    faqTitle: 'Sorular',
    q1: 'Gerçekten ücretsiz mi?',
    a1: 'Evet. Ücretli sürüm, deneme süresi ya da lisans anahtarı yok.',
    q2: 'Özgeçmişim nerede saklanıyor?',
    a2: 'Yalnızca cihazınızda. Windows uygulaması kullanıcı profilinize tek bir dosya yazar; web sürümü tarayıcınızın yerel depolamasını kullanır. CVcraft’ın belgelerinizi alan bir sunucusu yoktur.',
    q3: 'Belgeleri web sürümü ile uygulama arasında taşıyabilir miyim?',
    a3: 'Evet. Birinde Ayarlar’dan “Tüm belgeleri yedekle”yi, diğerinde “JSON içe aktar”ı seçin.',
    q4: 'Aday takip sistemleri (ATS) özgeçmişimi okuyabilir mi?',
    a4: 'Çevrimiçi başvuru formları için Plain şablonunu kullanın: grafik içermeyen tek sütundur ve PDF metni doğru sırayla okunur. Süslü şablonlar bir kişiye göndermek içindir.',
    footNote: 'Özenle hazırlanmış özgeçmişler. Verileriniz sizde kalır.',
  };
  var META = {
    en: { title: document.title, desc: document.querySelector('meta[name=description]').content },
    tr: {
      title: 'CVcraft - özenle hazırlanmış özgeçmişler ve ön yazılar',
      desc: 'CVcraft, Türkçe ve İngilizce ücretsiz bir özgeçmiş ve ön yazı hazırlama aracıdır. Tarayıcınızda kullanın ya da Windows uygulamasını indirin. Belgeleriniz cihazınızda kalır.',
    },
  };

  var nodes = [].slice.call(document.querySelectorAll('[data-i18n], [data-i18n-html]'));
  var EN = {};
  nodes.forEach(function (n) {
    var k = n.dataset.i18n || n.dataset.i18nHtml;
    EN[k] = n.dataset.i18nHtml ? n.innerHTML : n.textContent;
  });

  function apply(lang) {
    var dict = lang === 'tr' ? TR : EN;
    nodes.forEach(function (n) {
      var k = n.dataset.i18n || n.dataset.i18nHtml;
      if (dict[k] == null) return;
      if (n.dataset.i18nHtml) n.innerHTML = dict[k];
      else n.textContent = dict[k];
    });
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelector('meta[name=description]').content = META[lang].desc;
    document.getElementById('lang').textContent = lang === 'tr' ? 'EN' : 'TR';
  }

  var lang = 'en';
  try { lang = localStorage.getItem('cvcraft-site:lang') || ''; } catch (e) { lang = ''; }
  if (lang !== 'en' && lang !== 'tr') lang = /^tr/i.test(navigator.language || '') ? 'tr' : 'en';
  if (lang === 'tr') apply('tr');

  document.getElementById('lang').addEventListener('click', function () {
    lang = lang === 'tr' ? 'en' : 'tr';
    apply(lang);
    try { localStorage.setItem('cvcraft-site:lang', lang); } catch (e) { /* not persisted */ }
  });
})();
