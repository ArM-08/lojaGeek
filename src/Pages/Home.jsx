
import FirstLineProducts from "./../Components/FirstLineProducts";
import Footer from "./../Components/Footer";
import ImgHeader from "./../Components/ImgHeader";
import NavBar from "./../Components/NavBar";
import SecondLineProducts from "./../Components/SecondLineProducts"
import ThirdLineProducts from "./../Components/ThirdLineProducts";

const Home = () => {
    return (
        <>
        <NavBar/>
    <ImgHeader></ImgHeader>
    <FirstLineProducts/>
    <SecondLineProducts/>
    <ThirdLineProducts/>
    <Footer/>
    </>
    )
}
export default Home;