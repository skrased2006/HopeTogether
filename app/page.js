import Header from './components/Header';
import Banner from './components/Banner';
import MessageSection from './components/MessageSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        <MessageSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
