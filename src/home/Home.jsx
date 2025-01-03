import Banner from '../home/Banner'
import Services from '../home/Services'
import HomeAbout from '../home/HomeAbout'
import CounterUp from '../components/CounterUp'
import NewUpdates from '../components/NewUpdates'
import Customer from '../components/Customer'

const Home = () => {
    return(
        <>
            <Banner />
            <Services />
            <HomeAbout/>
            <CounterUp/>
            <NewUpdates/>
            <Customer/>
        </>
    )
}


export default Home;