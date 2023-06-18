import Image from 'next/image';
import styles from '../globals.css';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="object-cover object-center w-full h-full"
          src="/Gymnastics.jpg"
          alt="Background Image"
          layout="fill"
          priority
        />
      </div>

      <div className="relative flex flex-col items-center justify-between p-24">
        <header className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 z-10">
          <div className={`bg-white bg-opacity-20 rounded-lg p-4 flex items-center justify-between w-full ${styles.btnContainer}`}>
            <h1 className="text-4xl font-bold text-black">Welcome to Rai Gymnastics</h1>
            <nav className="flex gap-4">
              <a href="#" className={`btn ${styles.navBtn}`}>About</a>
              <a href="#" className={`btn ${styles.navBtn}`}>Achievements</a>
              <a href="#" className={`btn ${styles.navBtn}`}>Gallery</a>
              

            </nav>
          </div>
        </header>

        <div className="flex justify-center mt-8">
        
         <div className={`box ${styles.contentSquare} ml-4`}>
          <div>
          
          
         
              <h2 className="welcome-text">We are the Champions</h2>
              
              <p className="description">
               We have achieved tremendous success in gymnastics, winning 48 medals in the Senior Nationals 2023-24
               and numerous medals in other competitions. Our dedication and hard work have been recognized, and we
               recently had the honor of visiting the Haryana Governors House to receive inspiration and accolades.
               All the credit goes to our coach Dr. Takdir Kundu.
              </p>
              
              <div className="flex justify-center mt-4">
               <button className="button">About</button>
               <button className="button">Achievements</button>
               <button className="button">Gallery</button>
            </div>
           </div>
            
          </div>
          
         </div>
         <div className="image-container">
             <img className="image" src="/acro1.jpg" alt="Image" />
             <img className="image" src="/acro2.jpg" alt="Image" />
             <img className="image" src="/acro3.jpg" alt="Image" />
            </div>

        {/* Add more sections or content as needed */}
      </div>
    </main>
  );
}