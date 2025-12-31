import '@styles/main.scss'

import HeroPrimary from '@sections/HeroPrimary/HeroPrimary.tsx';

export default async function HomePage() {
  return (
    <div className="home">
      <HeroPrimary 
        imageSrc="https://cdn.shazoo.ru/176393_xFEcNJODC1_42275.jpg"
        category="Technology"
        title="The Impact of Technology on the Workplace: How Technology is Changing"
        author="Jason Francisco"
        date="August 20, 2022"
      />
    </div>
  );
}
