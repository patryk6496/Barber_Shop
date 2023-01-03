import './App.css';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div class="container">
        <div class="hero">
            <div class="hero_nav_panel">
                <div class="hero_logo">Polish Barber
                    <div class="nav">
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

            <div class="center_information">
                <div class="information_content">
                    <h4>Od 1989r</h4>

                    <h1>Salon <span>Męski</span></h1>

                    <p>Chęć przycięcia brody, odświeżenia fryzury i dopieszczenia? To jest idealne miejsce.
                    </p>

                    <button class="information_button">Zobacz Wszystko</button>
                </div>
            </div>
        </div>

        <div class="beard_section_header">

            <div class="beard_top_panel">
                <h4 id="text_beard_top_panel">Golenie & Strzyżenie</h4>
            </div>
        </div>


        <div class="beard_container">
            <div class="beard_content">
                <div class="beard_description">
                    <h4>La <span>Broda</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam,
                        purus
                        sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus
                        non.
                    </p>

                    <button class="beard_content_button">Ucz się więcej</button>
                </div>

                <div class="razor_photo">
                    <img src="./Assets/Images/Beard_Content/beard_content_product.png" alt="beard_content_photo"/>
                </div>

                <div class="example_photo">
                    <img src="./Assets/Images/Beard_Content/Beard_content_1.png" alt="beard_content_product"/>
                </div>
            </div>

            <div class="beard_content_skin">
                <div class="razor_photo">
                    <img src="./Assets/Images/Beard_Content/skin_content_1.png" alt="skin_content_photo"/>
                </div>
                <div class="beard_description_skin">
                    <h4>La <span>Skóra</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam,
                        purus
                        sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus
                        non.
                    </p>
                    <button class="beard_content_button">Ucz się więcej</button>
                </div>
                <div class="example_photo">
                    <img src="./Assets/Images/Beard_Content/skin_content_product.png" alt="skin_content_product"/>
                </div>
            </div>

            <div class="beard_content">

                <div class="beard_description">
                    <h4>La <span>Włosy</span></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non t aliquam,
                        purus
                        sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus
                        non.
                    </p>
                    <button class="beard_content_button">Ucz się więcej</button>
                </div>

                <div class="razor_photo">
                    <img src="./Assets/Images/Beard_Content/hair_content_product.png" alt="skin_content_photo"/>
                </div>

                <div class="example_photo">
                    <img src="./Assets/Images/Beard_Content/hair_content_1.png"/>
                </div>
            </div>
        </div>

        <div class="container_carousel_products">
            <div class="top_panel_carousel">
                <h2>Nasze Produkty</h2>
                <button class="beard_content_button">Ucz się więcej</button>
            </div>

            <Carousel/>
            <script src="./index.js"></script>
        </div>
    </div>
  )
}

export default App;
