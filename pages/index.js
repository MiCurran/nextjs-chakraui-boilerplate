import Home from '../views/Home/Home';
import { CustomHead } from '../components/CustomHead';

export default function HomePage(props) {
  return (
    <>
        <CustomHead title="BolierPlate Home" />
        <Home {...props} />
    </>
  )
}
