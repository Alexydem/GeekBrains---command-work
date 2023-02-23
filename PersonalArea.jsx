
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import PersonalAreaCopm from './PersonalAreaCopm'



const handleSearchFocus = event => {
    let imgSearch = document.querySelector('.header__search-img')
    let inputSearch = document.querySelector('.header__search-input')
    if (event.target.closest('.header__search')) {
        imgSearch.className = 'header__search-img search-img-hidden'
        inputSearch.className = 'header__search-input input__search-focus'
    } else {
        imgSearch.className = 'header__search-img'
        inputSearch.className = 'header__search-input'
        inputSearch.value = ''
    }
}

return (
    <div className="personalArea" onClick={(event) => handleSearchFocus(event)}>
        <Header />
        <main>
            <PersonalAreaCopm />
        </main>
        <Footer />
    </div>
)

export default PersonalArea