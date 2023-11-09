function App() {

function Header() {
    return(
        <header>
            <h1>This is a Header function</h1>
        </header>
    );
}
const name = 'Josh Perez';
function Main () {
    return(
        <section>
     
         <h1>Hello, {name}</h1>;
           <p>This is main section of body</p> 
        </section>
    );
}

function Footer(prop){
    return(
        <footer>
           <p>This is footer section of this page {prop.name}</p> 
        </footer>
    );
}
  return (
    <>
      <Header />
      <Main />
      <Footer name="footer_name"/> //declared prop in footer function
    </>
  );
}
export default App;
