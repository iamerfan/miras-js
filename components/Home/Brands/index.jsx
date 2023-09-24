
import styles from '@/components/Home/Home.module.scss'
import BrandSlider from './BrandSlider'

export default function Brands() {
   return (
      <div className={styles.Brands}>
         <BrandSlider />
         <h3>پرفروش ترین برند ها</h3>
         <hr />
      </div>
   )
}

