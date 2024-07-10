import { Outlet } from 'react-router-dom'
import Header from '../shared/Header'

const RootLayout = () => {
    return (
        <section className='flex flex-col flex-1'>
            <Header />
            <div className='p-4 flex flex-col flex-1'>
                <Outlet />
            </div>
        </section>
    )
}

export default RootLayout