import '../App.css';
import photo1 from './site.jpg'
import photo2 from './site-1.jpg'
import photo3 from './site-2.jpg'
import photo10 from './site-3.jpg'
import photo4 from './site-4.jpg'
import photo5 from './site-5.jpg'
import photo6 from './site-6.jpg'
import photo7 from './site-7.jpg'
import photo8 from './site-8.jpg'
import photo9 from './site-9.jpg'
import photo11 from './site-10.jpg'
function Main() {
  return (
    <div className="App">
      <div className="port">
        <div className="photo">
          <img src={photo1} alt="" />
          <img src={photo2} alt="" className='second'/>
        </div>
        <em>I approach photography with a romantic, impressionist sensibility. Over the past decade, I have had the pleasure of documenting some of the most iconic and exclusive celebrations for discerning patrons in over twenty countries and six continents. I have been named one of the top film photographers in the world and featured in numerous prestigious publications such as Harpers Bazaar, Elle, Town & Country and Martha Stewart Weddings. </em>
        <img src={photo3} alt="" className='third'/>
        <em>My luminous imagery is understated, yet evocative, resulting from clear and polished creative direction and an exceptional eye for beauty. My fresh and simple composition, and use of natural light has evolved from a deep love and respect for the art and craft of shooting film. My clients describe my work as “painterly,” “nuanced,” “refined” and I am honored to be a leading choice amongst internationally acclaimed planners and designers.</em>
        <div className="photo-2">
          <img src={photo4} alt="" />
          <img src={photo5} alt="" />
          <img src={photo6} alt="" />
          <img src={photo7} alt="" />
        </div>
        <em>"Every romantic notion I’ve ever conjured up for a modern yet timeless sun-drenched wedding album is perfectly encapsulated in every image Jen Huang creates — from delicate details and décor to tantalizing food shots and couture-clad, gorgeous brides, Jen’s images have it all, and then some."</em>
        <div className="photo">
        <img src={photo8} alt="" />
        <img src={photo9} alt="" className='second'/>
        </div>
        <img src={photo10} alt="" className='photo-10'/>
        <img src={photo11} alt="" className='photo-10'/>
      </div>
    </div>
  );
}

export default Main;
