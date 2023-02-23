import './style.scss'

return (
    <>
        <div class="container">
            <div class="mainTitle">
                ЛИЧНЫЙ КАБИНЕТ
            </div>
            <div class="blocks">
                <div class="blocks__left">
                    <div class="switcher">
                        <button class="switcher__button">Данные пользователя</button>
                        <button class="switcher__button">История заявок</button>
                        <button class="switcher__button">Оформление заявки</button>
                    </div>
                    <button class="switcher__exit">Выйти</button>
                </div>
                <div class="blocks__right">
                    <div class="formLabel">
                        <img src="./lk_img.png" alt="User icon"></img>
                        <span>Личные данные</span>
                    </div>
                    <hr></hr>
                    <form class="form">
                        <div class="formString">
                            <label class="formString__label" for="name">Имя</label>
                            <input class="formString__input" type="text" id="name" name="name" required></input>
                            <img class="formString__icon" src="./write_icon.png" alt="Write icon"></img>
                        </div>
                        <div class="formString">
                            <label class="formString__label" for="phone">Телефон</label>
                            <input class="formString__input" type="tel" id="phone" name="phone" required></input>
                            <img class="formString__icon" src="./write_icon.png" alt="Write icon"></img>
                        </div>
                        <div class="formString">
                            <label class="formString__label" for="email">E-mail</label>
                            <input class="formString__input" type="email" id="email" name="email" required></input>
                            <img class="formString__icon" src="./write_icon.png" alt="Write icon"></img>
                        </div>
                        <button class="buttonSave" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </div >
    </>
)
export default PersonalAreaCopm