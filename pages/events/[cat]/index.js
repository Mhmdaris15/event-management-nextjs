import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

const SinglePage = ({ data, pageName }) => {
  return (
  <>
    <Navbar />
    <h1 className='text-3xl text-white inline-block my-5 m-auto text-center'>Events in { pageName }</h1>
    
    <div className='flex justify-around flex-wrap gap-5'>
    {
      data.map((event) => (
        <Link key={event.id} href={`/events/${event.city}/${event.id}`} passHref={true} className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><Image src={event.image} alt={event.title} width={400} height={400} /></figure>
          <div className="card-body">
            <h2 className="card-title">{event.title}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Register Now</button>
            </div>
          </div>
        </Link>
        )
      )
    }
    </div>

   
  </>
  )
}
export default SinglePage

export async function getStaticPaths(){
  const { events_categories } = await import('/data/data.json');
  const paths = events_categories.map((category) => ({
    params: { cat: category.id },
  }));
  // console.log(paths)
  return {
    paths,
    fallback: false, // See the "fallback" section below 
  }
}

export async function getStaticProps(context) { 
  // console.log(context)
  const id = context?.params?.cat;
  const { allEvents } = await import('/data/data.json');
  const data = allEvents.filter((event) => event.city === id);
  // console.log(data)
  return {
    props: {
      data: data,
      pageName: id,
    },
  };
}