export default function ReactNativeNedir() {
  return (
    <>
      <p className="lead">
        <strong>React Native</strong>, JavaScript ve React kullanarak tek bir kod tabanından hem{' '}
        <strong>iOS</strong> hem de <strong>Android</strong> için gerçek native mobil uygulamalar geliştirmeyi sağlayan
        açık kaynaklı bir framework'tür. Meta (eski adıyla Facebook) tarafından 2015 yılında yayınlanan React Native,
        bugün Instagram, Facebook, Discord, Shopify ve Microsoft gibi şirketlerin uygulamalarında kullanılıyor.
      </p>
      <p>
        Bu rehberde <strong>React Native nedir</strong>, nasıl çalışır, avantajları ve dezavantajları nelerdir,{' '}
        <strong>React Native mi Flutter mı</strong> sorusuna nasıl yaklaşmalısınız ve React Native öğrenmeye nereden
        başlamalısınız gibi soruları; kendi geliştirdiğim mobil uygulamalardan edindiğim deneyimle birlikte ele
        alıyorum.
      </p>

      <h2 id="react-native-nedir">React Native nedir?</h2>
      <p>
        React Native, web dünyasında çok popüler olan <strong>React</strong> kütüphanesinin mobil platformlara
        uyarlanmış hâlidir. React ile web'de <code>&lt;div&gt;</code> ve <code>&lt;span&gt;</code> kullanırken, React
        Native'de <code>&lt;View&gt;</code>, <code>&lt;Text&gt;</code> ve <code>&lt;Image&gt;</code> gibi bileşenler
        kullanırsınız. Bu bileşenler bir web görünümünde (WebView) değil, doğrudan iOS ve Android'in kendi native arayüz
        bileşenlerine dönüştürülür.
      </p>
      <p>
        Yani React Native ile yazılan bir uygulama, kullanıcı açısından Swift veya Kotlin ile yazılmış bir uygulamadan
        farksız görünür ve hissettirir. Bu yüzden React Native, <strong>çapraz platform (cross-platform) mobil
        uygulama geliştirme</strong> denince akla gelen ilk teknolojilerden biridir.
      </p>

      <h3>Kısaca React Native</h3>
      <ul>
        <li><strong>Geliştiren:</strong> Meta (Facebook) ve açık kaynak topluluğu</li>
        <li><strong>İlk sürüm:</strong> 2015</li>
        <li><strong>Dil:</strong> JavaScript veya TypeScript</li>
        <li><strong>Platformlar:</strong> iOS, Android (topluluk desteğiyle Windows, macOS ve web)</li>
        <li><strong>Lisans:</strong> MIT (ücretsiz ve açık kaynak)</li>
      </ul>

      <h2 id="nasil-calisir">React Native nasıl çalışır?</h2>
      <p>
        Bir React Native uygulamasında iki dünya vardır: JavaScript kodunuzun çalıştığı taraf ve telefonun native
        tarafı. Uygulama mantığınızı, state yönetimini ve arayüz tanımlarınızı JavaScript tarafında yazarsınız; React
        Native bu tanımları native bileşenlere çevirerek ekrana çizer.
      </p>
      <p>
        Eski mimaride bu iki taraf, asenkron çalışan bir "köprü" (bridge) üzerinden JSON mesajlarıyla haberleşiyordu.
        Bu da yoğun animasyonlarda ve büyük listelerde performans darboğazlarına yol açabiliyordu.{' '}
        <strong>Yeni Mimari (New Architecture)</strong> ile bu köprü kaldırıldı:
      </p>
      <ul>
        <li>
          <strong>JSI (JavaScript Interface):</strong> JavaScript'in native kodla doğrudan ve senkron şekilde
          konuşabilmesini sağlar.
        </li>
        <li>
          <strong>Fabric:</strong> Yeni render sistemi; arayüz güncellemelerini daha hızlı ve öngörülebilir hâle
          getirir.
        </li>
        <li>
          <strong>TurboModules:</strong> Native modüllerin yalnızca ihtiyaç duyulduğunda yüklenmesini sağlayarak açılış
          süresini kısaltır.
        </li>
        <li>
          <strong>Hermes:</strong> React Native için optimize edilmiş JavaScript motoru; daha düşük bellek kullanımı ve
          daha hızlı açılış sağlar.
        </li>
      </ul>
      <p>
        Yeni Mimari artık varsayılan olarak geliyor. Bu da React Native'in eskiden en çok eleştirildiği performans
        konusunda native uygulamalara çok daha yakın bir noktaya geldiği anlamına geliyor.
      </p>

      <h2 id="avantajlar">React Native'in avantajları</h2>
      <h3>1. Tek kod tabanı, iki platform</h3>
      <p>
        Kodunuzun büyük kısmını bir kez yazıp hem iOS hem de Android'de çalıştırırsınız. Bu, geliştirme süresini ve
        maliyetini ciddi oranda düşürür; özellikle startup'lar ve küçük ekipler için büyük bir avantajdır.
      </p>
      <h3>2. JavaScript ve React bilgisi doğrudan işe yarar</h3>
      <p>
        React biliyorsanız React Native'e geçiş oldukça kolaydır. Bileşenler, props, state ve hook'lar aynı mantıkla
        çalışır. Web ve mobil ekipleri aynı dili konuşabilir, hatta iş mantığını paylaşabilir.
      </p>
      <h3>3. Hızlı geliştirme: Fast Refresh</h3>
      <p>
        Kodu kaydettiğiniz anda değişikliği uygulamada görürsünüz; her seferinde uygulamayı yeniden derlemeniz
        gerekmez. Bu, arayüz geliştirmeyi inanılmaz derecede hızlandırır.
      </p>
      <h3>4. Dev bir ekosistem</h3>
      <p>
        npm üzerindeki on binlerce paket, React Navigation, Reanimated ve Expo gibi olgun kütüphaneler sayesinde kamera,
        bildirimler, harita, ödeme gibi özelliklerin çoğu için tekerleği yeniden icat etmeniz gerekmez.
      </p>
      <h3>5. OTA (Over-the-Air) güncellemeler</h3>
      <p>
        JavaScript tarafındaki değişiklikleri App Store veya Google Play onayı beklemeden kullanıcılara ulaştırabilirsiniz
        (mağaza kurallarına uygun olduğu sürece). Kritik bir hatayı dakikalar içinde düzeltmek mümkün olur.
      </p>

      <h2 id="dezavantajlar">React Native'in dezavantajları</h2>
      <ul>
        <li>
          <strong>Ağır grafik ve oyunlar için ideal değil:</strong> 3D oyunlar veya yoğun grafik işleme gerektiren
          uygulamalarda Unity ya da tamamen native çözümler daha uygundur.
        </li>
        <li>
          <strong>Bazen native bilgi gerekir:</strong> Hazır paketi olmayan bir donanım özelliği için Swift/Kotlin ile
          native modül yazmanız gerekebilir.
        </li>
        <li>
          <strong>Sürüm güncellemeleri:</strong> Büyük React Native sürüm geçişleri ve üçüncü parti paketlerin
          uyumluluğu zaman zaman ekstra efor ister. Expo kullanmak bu yükü büyük ölçüde azaltır.
        </li>
        <li>
          <strong>Uygulama boyutu:</strong> JavaScript motoru ve framework dahil edildiği için çok basit uygulamalarda
          bile paket boyutu tamamen native bir uygulamaya göre biraz daha büyük olabilir.
        </li>
      </ul>

      <h2 id="react-native-mi-flutter-mi">React Native mi Flutter mı?</h2>
      <p>
        Çapraz platform mobil geliştirmede en sık sorulan soru budur. İkisi de üretim seviyesinde, güçlü ve aktif
        olarak geliştirilen teknolojiler. Kararı genellikle ekibiniz ve projeniz belirler:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>React Native</th>
              <th>Flutter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dil</td>
              <td>JavaScript / TypeScript</td>
              <td>Dart</td>
            </tr>
            <tr>
              <td>Geliştiren</td>
              <td>Meta</td>
              <td>Google</td>
            </tr>
            <tr>
              <td>Arayüz</td>
              <td>Platformun native bileşenleri</td>
              <td>Kendi render motoruyla çizilen widget'lar</td>
            </tr>
            <tr>
              <td>Web ile kod paylaşımı</td>
              <td>Çok güçlü (React ekosistemi)</td>
              <td>Mümkün ama daha sınırlı</td>
            </tr>
            <tr>
              <td>Öğrenme eğrisi</td>
              <td>React biliyorsanız çok düşük</td>
              <td>Dart ve widget yapısını öğrenmek gerekir</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Hem Flutter hem de React Native ile gerçek projeler geliştirmiş biri olarak önerim şu: Ekibiniz JavaScript/React
        biliyorsa veya web uygulamanızla kod paylaşmak istiyorsanız <strong>React Native</strong>; piksel piksel aynı
        görünen, yoğun özel tasarımlı bir arayüz hedefliyorsanız ve Dart öğrenmekte sorun yoksa{' '}
        <strong>Flutter</strong> mantıklı bir tercih olur.
      </p>

      <h2 id="ilk-uygulama">Expo ile ilk React Native uygulaması</h2>
      <p>
        Bugün React Native'e başlamanın resmi olarak önerilen yolu <strong>Expo</strong> kullanmaktır. Expo; derleme,
        native ayarlar ve dağıtım gibi karmaşık işleri sizin yerinize halleder. Bilgisayarınızda Node.js kurulu
        olduğunu varsayarsak:
      </p>
      <pre>
        <code>{`npx create-expo-app@latest ilk-uygulamam
cd ilk-uygulamam
npx expo start`}</code>
      </pre>
      <p>
        Terminalde çıkan QR kodu telefonunuzdaki <strong>Expo Go</strong> uygulamasıyla okuttuğunuzda uygulamanız
        anında telefonunuzda açılır. Basit bir bileşen şöyle görünür:
      </p>
      <pre>
        <code>{`import { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Merhaba React Native!</Text>
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>{count} kez tıklandı</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 16 },
  button: { backgroundColor: '#111', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 8 },
  buttonText: { color: '#fff' },
})`}</code>
      </pre>
      <p>
        Gördüğünüz gibi React bilen biri için kod son derece tanıdık. Stil yazımı CSS'e benzer ama JavaScript nesneleri
        ile yapılır ve yerleşim varsayılan olarak <strong>Flexbox</strong> ile kurulur.
      </p>

      <h2 id="nerelerde-kullanilir">React Native ile neler geliştirilebilir?</h2>
      <p>
        E-ticaret, finans, sosyal medya, sağlık, eğitim ve verimlilik uygulamaları React Native'in en güçlü olduğu
        alanlardır. Örneğin kendi geliştirdiğim <strong>BolusApp</strong>, ev arkadaşları arasındaki ortak giderleri
        ve borçları takip eden bir React Native uygulaması: Firebase ile gerçek zamanlı senkronizasyon, OCR ile fiş
        tarama, grafiklerle harcama analizi ve bildirimler gibi özelliklerin tamamı tek bir TypeScript kod tabanıyla hem
        iOS hem Android için çalışıyor.
      </p>

      <h2 id="nasil-ogrenilir">React Native nasıl öğrenilir? Yol haritası</h2>
      <ol>
        <li>
          <strong>Modern JavaScript:</strong> <code>let/const</code>, arrow function'lar, destructuring, Promise ve{' '}
          <code>async/await</code>.
        </li>
        <li>
          <strong>TypeScript temelleri:</strong> Büyüyen projelerde hataları erkenden yakalamak için neredeyse
          standart hâline geldi.
        </li>
        <li>
          <strong>React:</strong> Bileşenler, props, state, <code>useEffect</code> ve diğer hook'lar.
        </li>
        <li>
          <strong>React Native temelleri:</strong> Core bileşenler, StyleSheet, Flexbox ile yerleşim ve{' '}
          <code>FlatList</code> ile performanslı listeler.
        </li>
        <li>
          <strong>Navigasyon:</strong> Expo Router veya React Navigation ile çok ekranlı uygulamalar.
        </li>
        <li>
          <strong>Veri ve backend:</strong> REST/GraphQL API'leri, Firebase veya Supabase; TanStack Query ile veri
          yönetimi.
        </li>
        <li>
          <strong>Yayınlama:</strong> EAS Build ile derleme ve uygulamanızı App Store ile Google Play'e gönderme.
        </li>
      </ol>
      <p>
        En hızlı öğrenme yolu, küçük ama gerçek bir problem çözen bir uygulama yapmaktır. Bir yapılacaklar listesi, bir
        harcama takip uygulaması veya sevdiğiniz bir API'yi kullanan bir uygulama harika başlangıç projeleridir.
      </p>

      <h2 id="sss">Sıkça sorulan sorular</h2>
      <h3>React Native ücretsiz mi?</h3>
      <p>
        Evet. React Native MIT lisanslı, tamamen ücretsiz ve açık kaynaklıdır. Ticari projelerde de ücretsiz olarak
        kullanabilirsiniz. Yalnızca uygulamanızı mağazalarda yayınlamak için Apple ve Google'ın geliştirici hesabı
        ücretleri vardır.
      </p>
      <h3>React Native öğrenmek için React bilmek şart mı?</h3>
      <p>
        Şart değil ama büyük avantaj sağlar. React Native, React'in tüm kavramlarını kullandığı için önce React
        temellerini öğrenmek süreci çok hızlandırır.
      </p>
      <h3>React Native ile iOS uygulaması yapmak için Mac gerekir mi?</h3>
      <p>
        Geliştirme ve Expo Go ile test için Mac gerekmez; Windows veya Linux'ta da çalışabilirsiniz. iOS derlemesini
        ise EAS Build gibi bulut servisleriyle Mac olmadan alabilirsiniz.
      </p>
      <h3>React Native performansı native uygulamalar kadar iyi mi?</h3>
      <p>
        Uygulamaların büyük çoğunluğu için evet. Yeni Mimari, Hermes motoru ve Reanimated gibi kütüphanelerle 60 FPS
        animasyonlar ve akıcı listeler rahatlıkla elde edilir. Yalnızca 3D oyunlar gibi çok yoğun grafik gerektiren
        senaryolarda native çözümler öne çıkar.
      </p>
      <h3>2026'da React Native öğrenmeye değer mi?</h3>
      <p>
        Kesinlikle. React Native aktif olarak geliştiriliyor, büyük şirketler tarafından kullanılıyor ve React
        ekosistemiyle birlikte hem web hem mobil tarafında iş bulma şansınızı ciddi şekilde artırıyor.
      </p>

      <h2 id="sonuc">Sonuç</h2>
      <p>
        <strong>React Native</strong>, tek bir JavaScript/TypeScript kod tabanıyla iOS ve Android için hızlı, native
        hissettiren mobil uygulamalar geliştirmenin en verimli yollarından biri. React biliyorsanız mobil dünyaya
        geçmenin en kısa yolu; bilmiyorsanız da hem web hem mobil kapılarını aynı anda açan güçlü bir başlangıç noktası.
      </p>
      <p>
        Bir mobil uygulama fikriniz mi var veya React Native ile ilgili sorunuz mu? Bana{' '}
        <a href="/#iletisim">iletişim</a> bölümünden ulaşabilirsiniz.
      </p>
    </>
  )
}
