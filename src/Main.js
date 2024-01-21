import "./index.css";
import "./main.css";

const data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();
let srcImg;
if (hora >= 6 && hora < 12) {
     srcImg =
          "https://lirp.cdn-website.com/46e9b5ee/dms3rep/multi/opt/20230416_085110970_iOS-640w.jpg";

     // body.style.background = "red";
} else if (hora >= 12 && hora <= 18) {
     srcImg =
          "https://images.ecycle.com.br/wp-content/uploads/2022/10/05145956/david-mullins-3Jnws1iRSwk-unsplash-scaled.jpg.webp";
} else {
     srcImg =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP7NU57ra7wAXR82omD_pGmVrqgD_5XIRAg&usqp=CAU";
}

function Main() {
     return (
          <div className="main">
               <p className="main__hora">
                    {hora}hrs e {minutos} minutos
               </p>
               <img src={srcImg} className="main__img" />
          </div>
     );
}

export default Main;
