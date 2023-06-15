import Image from 'next/image';
import styles from './globals.css';

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
          <div className={`bg-black bg-opacity-50 rounded-lg p-4 flex items-center justify-between w-full ${styles.btnContainer}`}>
            <h1 className="text-4xl font-bold text-white">Welcome to Rai Gymnastics</h1>
            <nav className="flex gap-4">
              <a href="#" className={`btn ${styles.navBtn}`}>About</a>
              <a href="#" className={`btn ${styles.navBtn}`}>Achievements</a>
              <a href="#" className={`btn ${styles.navBtn}`}>Gallery</a>
              

            </nav>
          </div>
        </header>

        <div className="flex justify-center mt-8">
          <div className={`bg-white bg-opacity-20 rounded-lg p-10 flex items-center justify-center ${styles.contentSquare} mr-4`}>
            <div>
              <h2 className="text-4xl text-white mb-4">We are the Champions</h2>
              <p className="text-2xl text-white ">We have broken the record by winning 48 medals in the Senior Nationals 2023-24.</p>
              <p className="text-2xl text-white ">All the credits goes to our coach Dr. Takdir kundu</p>
            </div>
          </div>

          <div className={`bg-white bg-opacity-20 rounded-lg p-8 flex items-center justify-center ${styles.contentSquare} ml-4`}>
            <Image
              src="/acro3.jpg"
              alt="Image"
              width={300}
              height={200}
            />
          </div>
        </div>

        {/* Add more sections or content as needed */}
      </div>
    </main>
  );
}