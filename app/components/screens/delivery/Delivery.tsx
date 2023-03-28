import ClockSvg from '../../ui/Clock'
import styles from './Delivery.module.scss'

const Delivery = () => {
    const color = [{
        id: 0,
        bg: "#7cb3423d",
        border: "#7cb342"
    },
    {
        id: 1,
        bg: "#fbc02d3d",
        border: "#FBC02D"
    },
    {
        id: 2,
        bg: "#ff52523d",
        border: "#FF5252"
    }]

    return (
        <div className={styles.delivery}>
            <div className={styles.delivery__container}>
                <h3 className={styles.delivery__title}>Доставка</h3>
                <div className={styles.delivery__types}>
                    {color.map(item => (
                        <div className={styles.delivery__types__item} >
                            <div className={styles.delivery__types__item__circle} style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                            </div>
                            <span>—</span>
                            <p>Бесплатная доставка</p>
                        </div>
                    ))}
                </div>
            </div>
            <section className={styles.delivery__map}>
                <div className={styles.delivery__container}>
                    <div className={styles.delivery__map__work}>
                        <h3>Условия доставки</h3>
                        <p>В настоящее время доставка осуществляется по зоне, выделенной цветом. Минимальная сумма заказа — 400 грн.</p>
                        <div className={styles.delivery__map__work__time}>
                            <span>Время работы:</span>
                            <div className={styles.delivery__map__work__time__block}>
                                <ClockSvg />
                                <p>с 11:00 до 22:45</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Delivery