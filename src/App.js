import './App.css';
import Carousel from './Components/Carousel';
import image3 from "../src/Assets/Images/Beard_Content/image3.png";

function App() {
  return (
    <div className="container">
        <div className="hero">
            <div className="hero_nav_panel">
                <div className="hero_logo">Polish Barber
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

                    <h1>Salon <span>Męski</span></h1>

                    <p>Chęć przycięcia brody, odświeżenia fryzury i dopieszczenia? To jest idealne miejsce.
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
                    <h4>La <span>Broda</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam,
                        purus
                        sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus
                        non.
                    </p>

                    <button className="beard_content_button">Ucz się więcej</button>
                </div>

                <div className="razor_photo">
                    <img src={image3} alt="beard_content_photo"/>
                </div>

                <div className="example_photo">
                    <img src="../Assets/Images/Beard_Content/Beard_content_1.png" alt="beard_content_product"/>
                </div>
            </div>

            <div className="beard_content_skin">
                <div className="razor_photo">
                    <img src="./Assets/Images/Beard_Content/skin_content_1.png" alt="skin_content_photo"/>
                </div>
                <div className="beard_description_skin">
                    <h4>La <span>Skóra</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam,
                        purus
                        sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus
                        non.
                    </p>
                    <button className="beard_content_button">Ucz się więcej</button>
                </div>
                <div className="example_photo">
                    <img src="./Assets/Images/Beard_Content/skin_content_product.png" alt="skin_content_product"/>
                </div>
            </div>

            <div className="beard_content">

                <div className="beard_description">
                    <h4>La <span>Włosy</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam,
                        purus
                        sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus
                        non.
                    </p>
                    <button className="beard_content_button">Ucz się więcej</button>
                </div>

                <div className="razor_photo">
                    <img src="./Assets/Images/Beard_Content/hair_content_product.png" alt="skin_content_photo"/>
                </div>

                <div className="example_photo">
                    <img src="./Assets/Images/Beard_Content/hair_content_1.png"/>
                </div>
            </div>
        </div>

        <div className="container_carousel_products">
            <div className="top_panel_carousel">
                <h2>Nasze Produkty</h2>
                <button className="beard_content_button">Ucz się więcej</button>
            </div>

            <Carousel/>
            <script src="./index.js"></script>
        </div>

        <div className='quote_container'>
            <div className='quote'>
            Naszą ambicją jest sprawić, abyś wyszła z salonu z nowym wizerunkiem siebie.
                <div className='quote_author'>Richard Davidson, kierownik pokazu w Montpellier</div>
            </div>

            <div className='quote_text'>
            Czysta broda, wyrzeźbiony wąs, spersonalizowany strzyżenie, ukierunkowana pielęgnacja, pielęgnacja, to sztuka dbania o siebie. Z nami przyjeżdżasz z lub bez dokładnego wyobrażenia o swoim przyszłym wyglądzie…
            </div>

        </div>

        <div className='artist_container'>
            <h2>Nasi Artyści</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>

            <button className='beard_content_button'></button>
        </div>

        <div className='artist_image'>
            <img src='./Assets/Images/Beard_Content/Group artist.png'></img>
        </div>

        <div className='pricing_container'>
            <div className='artist_container'>
                <h2>Nasze Ceny</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
            </div>

            <div className='pricing_card_container'>
                <div className='pricing_card'></div>
            </div>
        </div>
    </div>
  )
}

export default App;
