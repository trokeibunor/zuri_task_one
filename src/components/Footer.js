import '../style/footer.scss'
// footer Icon
import Zuri_logo from '../images/Zuri.Internship_Logo.svg';
import I4G from '../images/I4G.svg';

function Footer(){
    return (
        <footer>
            <img src={Zuri_logo} alt='zuri_logo'/>
            <p>HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt='i4g log'/>
        </footer>
    )
}

export default Footer;