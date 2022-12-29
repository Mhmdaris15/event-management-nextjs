import Link from 'next/link'
import Image from 'next/image';
import Navbar from '../../components/Navbar';

const CategoryPage = ({ data }) => {
  return (
  <>
    <Navbar />
    <h1 className='text-3xl text-white inline-block my-5 m-auto text-center'>Events Categories</h1>

    

    <div className='flex justify-around '>
    {
      data.map((category) => (
        <Link key={category.id} href={`/events/${category.id}`} passHref={true} className="card w-96 bg-base-100 shadow-xl">
        <figure><Image src={category.image} alt={category.title} width={400} height={400} /></figure>
        <div className="card-body">
          <h2 className="card-title">{category.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </Link>
        
      ))
    }

    </div>
    
  </>
  )
}

export default CategoryPage

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  console.log(events_categories)
  return {
    props: {
      data: events_categories,
    },
  };
}