import headshot from '../assets/headshot.jpg';

export default function About() {
    return (
      <>
      <section>
        <img src={headshot} alt="Headshot of Lucas Vandermaarel" className="justify-self-center w-56 rounded-full border-2 border-gray-300" />
      </section>
        <p>Hello! I'm Lucas Vandermaarel.</p>
      </>
    );
}