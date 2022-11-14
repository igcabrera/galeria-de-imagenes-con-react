import './App.css';
import Card from './new_modules/card/card';
import Header from './new_modules/header/Header';
import Footer from './new_modules/footer/Footer'
import Img1 from './assets/img/f1.webp'
import Img2 from './assets/img/f2.webp'
import Img3 from './assets/img/f3.webp'

function App() {
  return (
    <main>
      <Header texto_titulo="Galería de Imágenes con React" />
      <div id='galeria'>
        <Card titulo_img="Defensa"
              texto_img="Prow scuttle parrel provost yardarm"
              src_img={Img1}
        />
        <Card titulo_img="Dribling"
              texto_img="Spirits boom mizzenmast yardarm"
              src_img={Img2}
        />
        <Card titulo_img="Ataque"
              texto_img="Prow scuttle Pinnace holystone"
              src_img={Img3}
        />
      </div>
      <Footer />
    </main>
  );
}

export default App;
