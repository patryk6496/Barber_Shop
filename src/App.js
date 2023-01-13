import './App.css';
import Carousel from './Components/Carousel';
import image3 from '../src/Assets/Images/Beard_Content/image3.png';
import image4 from '../src/Assets/Images/Beard_Content/Beard_content_1.png';
import image5 from '../src/Assets/Images/Beard_Content/skin_content_1.png';
import image6 from '../src/Assets/Images/Beard_Content/skin_content_product.png';
import image7 from '../src/Assets/Images/Beard_Content/hair_content_product.png';
import image8 from '../src/Assets/Images/Beard_Content/hair_content_1.png';
import image9 from '../src/Assets/Images/Beard_Content/Group artist.png';
import image10 from '../src/Assets/Images/Beard_Content/chair.png';
<script src="https://kit.fontawesome.com/a076d05399.js"></script>;

function App() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero_nav_panel">
          <div className="hero_logo">
            Polish Barber
            <div className="nav">
              <ul>
                <li>Nasze Usługi</li>
                <li>Nasze Produkty</li>
                <li>Nasze ceny</li>
                <li>Nasze salonu</li>
              </ul>
            </div>
            <button id="visit_button">Umów się na wiyztę</button>
          </div>
        </div>

        <div className="center_information">
          <div className="information_content">
            <h4>Od 1989r</h4>

            <h1>
              Salon <span>Męski</span>
            </h1>

            <p>
              Chęć przycięcia brody, odświeżenia fryzury i dopieszczenia? To
              jest idealne miejsce.
            </p>

            <button className="information_button">Zobacz Wszystko</button>
          </div>
        </div>
      </div>

      <div className="beard_section_header">
        <div className="beard_top_panel">
          <h4 id="text_beard_top_panel">Golenie & Strzyżenie</h4>
        </div>
      </div>

      <div className="beard_container">
        <div className="beard_content">
          <div className="beard_description">
            <h4>
              La <span>Broda</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet
              luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
              dolor purus non.
            </p>

            <button className="beard_content_button">Ucz się więcej</button>
          </div>

          <div className="razor_photo">
            <img src={image3} alt="beard_content_photo" />
          </div>

          <div className="example_photo">
            <img src={image4} alt="beard_content_product" />
          </div>
        </div>

        <div className="beard_content_skin">
          <div className="razor_photo">
            <img src={image5} alt="skin_content_photo" />
          </div>
          <div className="beard_description_skin">
            <h4>
              La <span>Skóra</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet
              luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
              dolor purus non.
            </p>
            <button className="beard_content_button">Ucz się więcej</button>
          </div>
          <div className="example_photo">
            <img src={image6} alt="skin_content_product" />
          </div>
        </div>

        <div className="beard_content">
          <div className="beard_description">
            <h4>
              La <span>Włosy</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non t aliquam, purus sit amet
              luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
              dolor purus non.
            </p>
            <button className="beard_content_button">Ucz się więcej</button>
          </div>

          <div className="razor_photo">
            <img src={image7} alt="skin_content_photo" />
          </div>

          <div className="example_photo">
            <img src={image8} />
          </div>
        </div>
      </div>

      <div className="container_carousel_products">
        <div className="top_panel_carousel">
          <h2>Nasze Produkty</h2>
          <button className="beard_content_button">Ucz się więcej</button>
        </div>

        <Carousel />
        <script src="./index.js"></script>
      </div>

      <div className="quote_container">
        <div className="quote">
          Naszą ambicją jest sprawić, abyś wyszła z salonu z nowym wizerunkiem
          siebie.
          <div className="quote_author">
            Richard Davidson, kierownik pokazu w Montpellier
          </div>
        </div>

        <div className="quote_text">
          Czysta broda, wyrzeźbiony wąs, spersonalizowany strzyżenie,
          ukierunkowana pielęgnacja, pielęgnacja, to sztuka dbania o siebie. Z
          nami przyjeżdżasz z lub bez dokładnego wyobrażenia o swoim przyszłym
          wyglądzie…
        </div>
      </div>

      <div className="artist_container">
        <h2>Nasi Artyści</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna
        </p>

        <button className="beard_content_button"></button>
      </div>

      <div className="artist_image">
        <img src={image9} />
      </div>

      <div className="pricing_container">
        <div className="artist_container">
          <h2>Nasze Ceny</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna
          </p>
        </div>

        <div className="pricing_card_container">
          <div className="pricing_card"></div>
        </div>

        <div class="wrapper">
          <div class="table basic">
            <div class="price-section">
              <div class="price-area">
                <div class="inner-area">
                  <span class="text">$</span>
                  <span class="price">29</span>
                </div>
              </div>
            </div>
            <div class="package-name"></div>
            <ul class="features">
              <li>
                <span class="list-name">One Selected Template</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">100% Responsive Design</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">Credit Remove Permission</span>
                <span class="icon cross">
                  <i class="fas fa-times"></i>
                </span>
              </li>
              <li>
                <span class="list-name">Lifetime Template Updates</span>
                <span class="icon cross">
                  <i class="fas fa-times"></i>
                </span>
              </li>
            </ul>
            <div class="btn">
              <button>Purchase</button>
            </div>
          </div>
          <div class="table premium">
            <div class="ribbon">
              <span>Recommend</span>
            </div>
            <div class="price-section">
              <div class="price-area">
                <div class="inner-area">
                  <span class="text">$</span>
                  <span class="price">59</span>
                </div>
              </div>
            </div>
            <div class="package-name"></div>
            <ul class="features">
              <li>
                <span class="list-name">Five Existing Templates</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">100% Responsive Design</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">Credit Remove Permission</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">Lifetime Template Updates</span>
                <span class="icon cross">
                  <i class="fas fa-times"></i>
                </span>
              </li>
            </ul>
            <div class="btn">
              <button>Purchase</button>
            </div>
          </div>
          <div class="table ultimate">
            <div class="price-section">
              <div class="price-area">
                <div class="inner-area">
                  <span class="text">$</span>
                  <span class="price">99</span>
                </div>
              </div>
            </div>
            <div class="package-name"></div>
            <ul class="features">
              <li>
                <span class="list-name">All Existing Templates</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">100% Responsive Design</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">Credit Remove Permission</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
              <li>
                <span class="list-name">Lifetime Template Updates</span>
                <span class="icon check">
                  <i class="fas fa-check"></i>
                </span>
              </li>
            </ul>
            <div class="btn">
              <button>Purchase</button>
            </div>
          </div>
        </div>

        <div className="beard_top_panel">
          <h4 id="text_beard_top_panel">Skontaktuj się z nami</h4>
        </div>

        <div className="contact_container">
          <div id="photo_chair">
            <img src={image10} alt="beard_content_product" />
          </div>

          <div className="contact_details">
            <h2>Szczegóły Kontaktu</h2>
            <p>
              Prototypy mogą być również zwolnione z niektórych wymagań, które
              będą miały zastosowanie do produktu końcowego
            </p>

            <div className="contact_address">
              <h3>7813 Cherry Hill Ave.Snohomish, Paris 98290</h3>

              <h3>📞 +33 31 94 38 76 04 👋 hello@frenchbarber.fr</h3>
            </div>

            <div className="social_icons"></div>
          </div>
        </div>

        <div className="footer_container">
          <div className="footer_content">
            <div className="footer_left">
              <h2>Polish Barber</h2>
              <p>
                Streetstyle i modna atmosfera w połączeniu z elegancją i
                know-how Paryża tworzą szykowną i ciepłą koncepcję.
              </p>
            </div>
            <div className="footer_right">
              <div className="left_content">
                <h2>Sklep</h2>
                <ul>
                  <li>Nasza prezentacja</li>
                  <li>Nasze produkty</li>
                  <li>Nasze salony</li>
                  <li>Nasze ceny</li>
                </ul>
              </div>
              <div className="right_content">
                <h2>Informacje</h2>
                <ul>
                  <li>Dołącz do nas</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">© 2021 The French Barber</div>
      </div>
    </div>
  );
}

export default App;
