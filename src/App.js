import './App.css';
import Nav from './components/Nav';
import Store from './components/Store';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
  <Nav></Nav>
  <div className='card'>
  <Store name={"معسكر تطوير تطبيقات"} p={"16 oct 2022"} res='16' photo={'data:image/png;base64,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'}></Store>
  <Store name={"UI/UX دورة"} p={"30 nov 2022"} res='31' photo={'https://previews.123rf.com/images/pikepicture/pikepicture2008/pikepicture200801771/153927999-ux-ui-design-icon-vector-ux-ui-design-sign-color-symbol-illustration.jpg'}></Store>
  <Store name={"swift دورة"} p={"5 sep 2022"} res="9" photo={'https://cdn.iconscout.com/icon/free/png-256/swift-21-1175088.png'}></Store>
  <Store name={"java معسكر"} p={"30 nov 2022"} res="17" photo={'https://cdn.iconscout.com/icon/free/png-256/java-23-225999.png'}></Store>
  <Store name={"python معسكر"} p={"9 oct 2022"} res="16" photo={'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'}></Store>
  <Store name={"kotlin دورة"} p={"23 dec 2022"} res="1" photo={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png'}></Store>
  </div>
  {/* <Footer></Footer>  */}
    </div>
  );
}

export default App;



