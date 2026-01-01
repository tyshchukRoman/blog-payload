import HeroPrimary from '@sections/HeroPrimary/HeroPrimary';
import LatestPosts from '@sections/LatestPosts/LatestPosts';
import '@styles/main.scss'

export default async function HomePage() {
  return (
    <div className="home">

      <HeroPrimary 
        image="https://cdn.shazoo.ru/176393_xFEcNJODC1_42275.jpg"
        categories={["Technology", "Games"]}
        title="The Impact of Technology on the Workplace: How Technology is Changing"
        authorName="Jason Francisco"
        date="August 20, 2022"
      />

      <LatestPosts 
        title="Latest Posts" 
      />

    </div>
  );
}
