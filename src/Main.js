import "./index.css";
import "./main.css";

const data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();

let srcImg;
let cor;

if (hora >= 6 && hora < 12) {
     srcImg =
          "https://lirp.cdn-website.com/46e9b5ee/dms3rep/multi/opt/20230416_085110970_iOS-640w.jpg";
     cor =
          "linear-gradient(227deg, rgba(231,124,0,1) 26%, rgba(249,255,0,1) 64%)";
} else if (hora >= 12 && hora <= 18) {
     srcImg =
          "https://images.ecycle.com.br/wp-content/uploads/2022/10/05145956/david-mullins-3Jnws1iRSwk-unsplash-scaled.jpg.webp";

     cor =
          "linear-gradient(169deg, rgba(0,179,231,1) 8%, rgba(0,86,255,1) 87%)";
} else {
     srcImg =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP7NU57ra7wAXR82omD_pGmVrqgD_5XIRAg&usqp=CAU";
     cor =
          "linear-gradient(232deg, rgba(20,50,238,1) 8%, rgba(1,21,56,1) 90%);";
}

function Main() {
     return (
          <div className="main" style={{ background: cor }}>
               <p className="main__hora">
                    {hora} horas e {minutos} minutos
               </p>
               <img src={srcImg} className="main__img" />
          </div>
     );
}

export default Main;
