import { ReactComponent as Logo } from '../../icons/logo.svg';
import './Header.css'


export const Header = () => {
    return <div className='appHeader'>
        <Logo />
        <h2 className="headerTitle">Github Isues</h2>
    </div>
}