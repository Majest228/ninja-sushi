import styles from "./CityModal.module.scss"
import close from "../../../../assets/cityclose.png"
import Image from "next/image"
import { useGetCitiesQuery, useGetRegionsQuery } from "@/app/redux/rtk-query/city.api"
import { useState } from "react"
const CityModal = ({ setIsShowCityModal }: any) => {
  const { data: regions, isLoading: regionsIsLoading } = useGetRegionsQuery("")
  const [citiesId, setCitiesId] = useState(0)
  const { data: cities, isLoading: citiesIsLoading } = useGetCitiesQuery(citiesId)
  return (
    <div className={styles.city}>
      <div className={styles.city__title}>
        <h3>Ваш город</h3>
        <button onClick={() => setIsShowCityModal(false)}>
          <Image src={close} alt='close' />
        </button>
      </div>
      <div className={styles.city__content}>
        <input className={styles.city__content__search} type='text' placeholder='Найти город' />
        <div className={styles.city__content__block}>
          <div className={styles.city__content__block__item}>
            <h3>Регион</h3>
            <ul className={styles.city__content__block__item__ul}>
              {regionsIsLoading
                ? ""
                : regions?.map((region) => (
                    <li className={styles.city__content__block__item__ul__link}>
                      <button onClick={() => setCitiesId(region.id)}>{region.name}</button>
                    </li>
                  ))}
            </ul>
          </div>
          <div className={styles.city__content__block__item}>
            <h3>Город</h3>
            <ul className={styles.city__content__block__item__ul}>
              {citiesIsLoading
                ? ""
                : cities?.map((city) => (
                    <li className={styles.city__content__block__item__ul__link}>
                      <button
                        onClick={() => {
                          localStorage.setItem("cityId", city.id)
                          localStorage.setItem("cityName", city.name)
                          setIsShowCityModal(false)
                        }}
                      >
                        {city.name}
                      </button>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityModal
